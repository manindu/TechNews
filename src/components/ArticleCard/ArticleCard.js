import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getSourceById } from '../../helpers';
import styles from './styles';

const ArticleCard = ({ article, onPress }) => {
  const { title, urlToImage, source, publishedAt } = article;
  return (
    <TouchableOpacity onPress={() => onPress(article)}>
      <Image source={{ uri: urlToImage }} style={styles.card} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomRow}>
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
    </TouchableOpacity>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({}).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ArticleCard;
