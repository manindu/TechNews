import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getLogoById } from '../../../../helpers';
import styles from './styles';

const ArticleCard = ({ article }) => {
  const { title, urlToImage, source, publishedAt } = article;
  return (
    <View>
      <Image source={{ uri: urlToImage }} style={styles.card} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomRow}>
        <View style={styles.sourceContainer}>
          <Image
            source={{ uri: getLogoById(source.id) }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.timeAgo}>{source.name}</Text>
        </View>
        <Text style={styles.timeAgo}>{moment(publishedAt).fromNow()}</Text>
      </View>
    </View>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({}).isRequired,
};

export default ArticleCard;
