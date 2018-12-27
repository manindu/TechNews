import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import { getArticlesBySource } from '../../actions/newsActions';

class Home extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.getArticlesBySource();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

Home.propTypes = {
  getArticlesBySource: PropTypes.func.isRequired,
};

const mapStateToProps = ({ news }) => ({
  news,
});

export default connect(
  mapStateToProps,
  { getArticlesBySource }
)(Home);
