import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import AutoHeightImage from 'react-native-auto-height-image';
import styles from './styles';
import { getLogoById } from '../../helpers';
import { RoundedButton } from '../../components';

const { width, height } = Dimensions.get('window');

class Article extends PureComponent {
  state = {};

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
                  source={{ uri: getLogoById(source.id) }}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.timeAgo}>{source.name}</Text>
              </View>
              <Text style={styles.timeAgo}>{moment(publishedAt).fromNow()}</Text>
            </View>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis
              elementum nibh tellus molestie. Risus quis varius quam quisque. Sit amet commodo nulla
              facilisi. Tortor at auctor urna nunc. Lacus luctus accumsan tortor posuere ac. Et leo
              duis ut diam quam nulla porttitor massa. Dictumst vestibulum rhoncus est pellentesque
              elit. Et leo duis ut diam quam. Turpis egestas integer eget aliquet nibh praesent
              tristique magna sit. Nec ullamcorper sit amet risus nullam eget felis. Nunc sed velit
              dignissim sodales ut eu sem. Convallis a cras semper auctor neque vitae tempus quam
              pellentesque. Feugiat scelerisque varius morbi enim nunc faucibus. Sagittis aliquam
              malesuada bibendum arcu vitae elementum curabitur vitae nunc. Facilisis volutpat est
              velit egestas dui. Lacus vel facilisis volutpat est velit. Diam vel quam elementum
              pulvinar etiam non quam lacus suspendisse. Pretium viverra suspendisse potenti nullam
              ac tortor vitae purus faucibus. Nulla pharetra diam sit amet nisl suscipit. Volutpat
              consequat mauris nunc congue nisi vitae. Magnis dis parturient montes nascetur
              ridiculus mus mauris. Id neque aliquam vestibulum morbi blandit cursus risus.
              Adipiscing commodo elit at imperdiet dui. Ut sem viverra aliquet eget sit amet tellus
              cras. Quis blandit turpis cursus in hac habitasse platea. Blandit turpis cursus in hac
              habitasse. In arcu cursus euismod quis viverra nibh. Diam sollicitudin tempor id eu
              nisl nunc mi ipsum. Neque vitae tempus quam pellentesque nec nam aliquam sem. Purus in
              massa tempor nec feugiat nisl pretium fusce id. Vestibulum mattis ullamcorper velit
              sed ullamcorper morbi tincidunt. Nisl nunc mi ipsum faucibus vitae aliquet nec. Sed
              vulputate odio ut enim. Maecenas sed enim ut sem viverra aliquet eget sit. Sit amet
              commodo nulla facilisi nullam vehicula ipsum a. Sed faucibus turpis in eu. Gravida
              neque convallis a cras semper. Metus aliquam eleifend mi in nulla posuere sollicitudin
              aliquam ultrices. Tortor vitae purus faucibus ornare suspendisse sed nisi. Ipsum nunc
              aliquet bibendum enim facilisis. Purus viverra accumsan in nisl nisi scelerisque eu.
              Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Sed pulvinar proin
              gravida hendrerit lectus. Vitae semper quis lectus nulla. Nascetur ridiculus mus
              mauris vitae ultricies leo. Blandit massa enim nec dui nunc mattis. Nisl pretium fusce
              id velit ut tortor pretium viverra suspendisse. Facilisis mauris sit amet massa vitae
              tortor condimentum lacinia quis. Vel orci porta non pulvinar neque laoreet
              suspendisse. At imperdiet dui accumsan sit amet nulla facilisi morbi. Integer eget
              aliquet nibh praesent tristique. Tempus quam pellentesque nec nam aliquam. Sagittis
              aliquam malesuada bibendum arcu. Nec ullamcorper sit amet risus nullam eget. Consequat
              semper viverra nam libero. Bibendum enim facilisis gravida neque convallis a cras.
              Ultricies integer quis auctor elit sed vulputate mi. Vel risus commodo viverra
              maecenas accumsan lacus vel. Sit amet est placerat in egestas erat. Feugiat vivamus at
              augue eget arcu dictum varius duis at. Suscipit adipiscing bibendum est ultricies
              integer quis. Risus at ultrices mi tempus. In est ante in nibh mauris. Placerat orci
              nulla pellentesque dignissim enim sit amet venenatis. Nascetur ridiculus mus mauris
              vitae ultricies leo integer malesuada nunc. Turpis egestas maecenas pharetra
              convallis. Ut diam quam nulla porttitor massa. Donec et odio pellentesque diam.
              Curabitur vitae nunc sed velit dignissim sodales. Nibh praesent tristique magna sit
              amet purus gravida quis. Auctor urna nunc id cursus metus aliquam eleifend. A iaculis
              at erat pellentesque. Nulla facilisi etiam dignissim diam quis enim. Nunc sed blandit
              libero volutpat sed. Magna sit amet purus gravida quis blandit turpis cursus. Et netus
              et malesuada fames ac turpis. Consectetur purus ut faucibus pulvinar. Est sit amet
              facilisis magna. Phasellus vestibulum lorem sed risus ultricies tristique nulla
              aliquet enim. Eu ultrices vitae auctor eu augue. Auctor urna nunc id cursus.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="READ FULL ARTICLE"
            onPress={() => {}}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.button}
            icon="book"
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
