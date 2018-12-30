import React, { PureComponent } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { getArticlesBySource, setSelectedSources } from '../../actions/newsActions';
import { ArticleCard, SelectableItem } from '../../components';
import { colors } from '../../theme';
import { getSourceById, newsSources } from '../../helpers';

class Home extends PureComponent {
  state = {
    modalVisible: false,
  };

  componentDidMount() {
    this.getNewsArticles();
  }

  toggleModal = visible => {
    this.setState({ modalVisible: visible });
  };

  getNewsArticles = () => {
    const { getArticles, sources, page } = this.props;
    getArticles({
      page: page.nextPage,
      sources: sources.selectedSources.join(),
    });
  };

  onCardPress = item => {
    const { navigation } = this.props;
    navigation.navigate('Article', {
      article: item,
    });
  };

  renderItem = ({ item }) => <ArticleCard article={item} onPress={this.onCardPress} />;

  keyExtractor = (item, index) => index.toString();

  getItemSeparatorComponent = () => <View style={styles.separator} />;

  onEndReached = () => {
    this.getNewsArticles();
  };

  onPressModalClose = () => {
    this.toggleModal(false);
    this.getNewsArticles();
  };

  onPressModalOpen = () => {
    this.toggleModal(true);
  };

  onPressSoucre = item => {
    const { setSources, sources } = this.props;
    let selected = sources.selectedSources;
    if (selected.indexOf(item.id) === -1) {
      selected.push(item.id);
    } else {
      selected = selected.filter(source => source !== item.id);
    }
    setSources(selected);
  };

  isSourceSelected = id => {
    const { sources } = this.props;
    return sources.selectedSources.indexOf(id) !== -1;
  };

  renderSourceItem = ({ item }) => (
    <SelectableItem
      item={item}
      title={item.name}
      imageUrl={item.logoUrl}
      isSelected={this.isSourceSelected(item.id)}
      onPress={this.onPressSoucre}
    />
  );

  render() {
    const { news, sources } = this.props;
    const { articles, loading } = news;
    const { selectedSources } = sources;
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={this.onPressModalClose}
        >
          <View style={styles.modalContent}>
            <View style={styles.topRow}>
              <Text style={styles.modalTitle}>Select Sources</Text>
              <TouchableOpacity onPress={this.onPressModalClose}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              extraData={this.props}
              data={newsSources}
              renderItem={this.renderSourceItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </Modal>
        {!loading ? (
          <View style={styles.filterRow}>
            {selectedSources.length > 0 ? (
              <Text style={styles.selectedSources}>
                {selectedSources.length > 1
                  ? `${getSourceById(selectedSources[0]).name} & ${selectedSources.length -
                      1} others`
                  : `${getSourceById(selectedSources[0]).name}`}
              </Text>
            ) : (
              <Text style={styles.selectedSources}>No news sources selected</Text>
            )}
            <TouchableOpacity onPress={this.onPressModalOpen}>
              <Icon
                // onPress={this.onPressModalOpen}
                name="ios-options"
                size={30}
                color={colors.primaryGreen}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.filterRow}>
            <ActivityIndicator size="small" color={colors.primaryGreen} />
          </View>
        )}
        <View style={styles.listContainer}>
          <FlatList
            data={articles}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={this.getItemSeparatorComponent}
            onEndReached={this.onEndReached}
            ListEmptyComponent={() => (
              <View style={styles.emptyContainer}>
                <AntIcon name="inbox" size={60} color={colors.lightgrey} />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  getArticles: PropTypes.func.isRequired,
  setSources: PropTypes.func.isRequired,
  news: PropTypes.shape({}).isRequired,
  page: PropTypes.shape({}).isRequired,
  sources: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ news, page, sources }) => ({
  news,
  page,
  sources,
});

export default connect(
  mapStateToProps,
  {
    getArticles: getArticlesBySource,
    setSources: setSelectedSources,
  }
)(Home);
