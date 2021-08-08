import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Storage from '../../libs/storage';
import exampleStyles from '../../styles/example';
import BadgesItem from '../BadgesScreen/BadgesItem';

class Favorites extends React.Component {
  state = {
    loading: false,
    badges: undefined,
  };
  //      This method creates the components needed for the page
  //      getFavorites and focusEvent
  componentDidMount = () => {
    this.getFavorites();
    this.focusEvent();
  };

  //      This method will gather the badges that are stored
  //      in the local storage, and will get the information to be shown
  //      in the view

  getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter(key => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keys);
      const favorites = favs.map(fav => JSON.parse(fav[1]));
      this.setState({badges: favorites});
    } catch (err) {
      console.log('Get favorites error', err);
    }
  };

  //      In this method we handle the user touching a badge in the
  //      favorites view, the user will be send to the FavoriteDetails view

  handlePress = item => {
    this.props.navigation.navigate('FavoritesDetails', {item});
  };

  //      This method zooms the page when we call it which is by 
  //      clicking the badge in the Favorites view

  focusEvent = () => {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.getFavorites();
    });
  };

  //      This method unmounts components that will not longer
  //      ne used to save resources

  componentWillUnmount = () => {
    this.focusListener();
  };


  //      Render view
  render() {
    const {badges, loading} = this.state;

    if (loading === true && !badges) {
      <View
        style={[
          styles.favoritesContainer,
          exampleStyles.container,
          exampleStyles.horizontal,
        ]}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <ActivityIndicator
          style={exampleStyles.loader}
          color="#43FF0D"
          size="large"
        />
      </View>;
    }
    return (
      <View
        style={[
          styles.favoritesContainer,
          exampleStyles.container,
          exampleStyles.horizontal,
        ]}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <FlatList
          style={styles.list}
          data={badges}
          renderItem={({item}) => (
            <BadgesItem item={item} onPress={() => this.handlePress(item)} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
  //     Styles     @.@
const styles = StyleSheet.create({
  favoritesContainer: {
    paddingTop: 45,
  },
  list: {
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default Favorites;
