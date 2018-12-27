import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import { getArticlesBySource } from '../../actions/newsActions';

class Home extends PureComponent {
  state = {};

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  renderItem = ({ item }) => <Text />

  render() {
    const { news } = this.props;
    const { articles, loading } = news;
    return (
      <View style={styles.container}>
        <Text>News</Text>
      </View>
    );
  }
}

Home.propTypes = {
  getArticles: PropTypes.func.isRequired,
  news: PropTypes.shape({}),
};

Home.defaultProps = {
  news: null,
};

const mapStateToProps = ({ news }) => ({
  news,
});

export default connect(
  mapStateToProps,
  {
    getArticles: getArticlesBySource,
  }
)(Home);
