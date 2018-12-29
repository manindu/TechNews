import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const RoundedButton = ({
  containerStyle,
  title,
  titleStyle,
  onPress,
  disabled,
  disabledContainerStyle,
  disabledTitleStyle,
  icon,
}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[containerStyle, disabled && disabledContainerStyle]}
    activeOpacity={0.7}
  >
    {icon && <Icon name={icon} size={20} color="white" />}
    <Text style={disabled ? disabledTitleStyle : titleStyle}>{title}</Text>
  </TouchableOpacity>
);

RoundedButton.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.shape({}),
  disabled: PropTypes.bool,
  disabledContainerStyle: PropTypes.shape({}),
  disabledTitleStyle: PropTypes.shape({}),
  titleStyle: PropTypes.shape({}),
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

RoundedButton.defaultProps = {
  title: '',
  containerStyle: styles.container,
  disabledContainerStyle: styles.disabledContainer,
  disabledTitleStyle: styles.disabledTitle,
  titleStyle: styles.title,
  disabled: false,
  icon: null,
};

export default RoundedButton;
