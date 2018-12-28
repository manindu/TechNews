import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import { getArticlesBySource } from '../../actions/newsActions';
import ArticleCard from './components/ArticleCard/ArticleCard';

class Home extends PureComponent {
  state = {};

  componentDidMount() {
    this.getNewsArticles();
  }

  getNewsArticles = () => {
    const { getArticles, news, page } = this.props;
    getArticles({
      page: page.nextPage,
      sources: news.selectedSources.join(),
    });
  };

  renderItem = ({ item }) => <ArticleCard article={item} />;

  keyExtractor = (item, index) => index.toString();

  getItemSeparatorComponent = () => <View style={styles.separator} />;

  onEndReached = () => {
    this.getNewsArticles();
  };

  render() {
    const { news } = this.props;
    const { articles, loading } = news;
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={articles}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={this.getItemSeparatorComponent}
            // onEndReachedThreshold={0.5}
            onEndReached={this.onEndReached}
          />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  getArticles: PropTypes.func.isRequired,
  news: PropTypes.shape({}).isRequired,
  page: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ news, page }) => ({
  news,
  page,
});

export default connect(
  mapStateToProps,
  {
    getArticles: getArticlesBySource,
  }
)(Home);
