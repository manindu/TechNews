import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../theme';

const SelectableItem = ({ item, imageUrl, title, isSelected, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.container}>
    <View style={styles.titleContainer}>
      {imageUrl && <Image source={{ uri: imageUrl }} resizeMode="contain" style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
    </View>
    {isSelected && <Icon name="ios-checkmark-circle" size={25} color={colors.primaryGreen} />}
  </TouchableOpacity>
);

SelectableItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({})]).isRequired,
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
};

SelectableItem.defaultProps = {
  imageUrl: null,
};

export default SelectableItem;
