import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, Dimensions, Linking } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import AutoHeightImage from 'react-native-auto-height-image';
import styles from './styles';
import { getSourceById } from '../../helpers';
import { RoundedButton } from '../../components';

const { width } = Dimensions.get('window');

class Article extends PureComponent {
  state = {};

  onPressReadFull = () => {
    const { navigation } = this.props;
    const article = navigation.getParam('article');
    Linking.openURL(article.url).catch(err => console.error('An error occurred', err));
  };

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('article');
    const { title, urlToImage, source, url, publishedAt, content } = article;
    return (
      <React.Fragment>
        <ScrollView>
          <View style={styles.container}>
            <AutoHeightImage source={{ uri: urlToImage }} width={width} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.sourceRow}>
              <View style={styles.sourceContainer}>
                <Image
                  source={{ uri: getSourceById(source.id).logoUrl }}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.timeAgo}>{source.name}</Text>
              </View>
              <Text style={styles.timeAgo}>{moment(publishedAt).fromNow()}</Text>
            </View>
            <Text style={styles.content}>{content}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="READ FULL ARTICLE"
            onPress={this.onPressReadFull}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.button}
            icon="file-text"
          />
        </View>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Article;
