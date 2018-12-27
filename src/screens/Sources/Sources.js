import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Home extends PureComponent {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Sources</Text>
      </View>
    );
  }
}

export default Home;
