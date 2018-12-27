import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const NewsCard = ({ title, image }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NewsCard;
