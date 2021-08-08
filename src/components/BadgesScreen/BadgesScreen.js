import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import BadgesItem from './BadgesItem';
import Colors from '../../res/Colors';
import Http from '../../libs/http.js';
import BadgesSearch from './BadgesSearch';

class BadgesScreen extends React.Component {
  state = {
    loading: false,
    badges: undefined,
    badgesCopy: undefined,
  };

  //      This method creates three objects, 
  //      the fetchdata, the focus event and the blur event

  componentDidMount() {
    this.fetchdata();
    this.focusEvent();
    this.blurEvent();
  }

   //       This method focus the screen when we click
   //       a badge or edit or remove

  focusEvent = () => {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setFetchInterval();
    });
  };

   //       This method blurs the screen when we click
   //       a badge or edit

  blurEvent = () => {
    this.blurListener = this.props.navigation.addListener('blur', () => {
      clearInterval(this.interval);
    });
  };

  //       Sets a 3 second interval to reload
  //       the fetch method which gathers the information
  //       from the database

  setFetchInterval = () => {
    this.interval = setInterval(this.fetchdata, 3000);
  };

  //     This methods fetchs the badges from 
  //     the database

  fetchdata = async () => {
    this.setState({loading: true});
    let response = await Http.instance.get_all();
    response = response.reverse();
    this.setState({loading: false, badges: response, badgesCopy: response});
  };

  //     This method sends the user to the Badges Detail
  //     screen when clicking this method

  handlePress = item => {
    this.props.navigation.navigate('BadgesDetail', {item});
  };
  
  //     This method sends the user to the Badges Edit
  //     screen when clicking this method
  handleEdit = item => {
    this.props.navigation.navigate('BadgesEdit', {item});
  };

  //      This method filters the information if the badges
  //      by entering letters, this will show us only the badges
  //      that have the same info that was entered in the form

  handleChange = query => {
    const {badgesCopy} = this.state;

    const badgesFiltered = badgesCopy.filter(badge => {
      return badge.name.toLowerCase().includes(query.toLowerCase());
    });

    this.setState({badges: badgesFiltered});

    if (query) {
      clearInterval(this.interval);
    } else {
      this.setFetchInterval();
    }
  };

  //      This method shows the modal that is shown when we \
  //      click the delete option in the badges screen, this will
  //      call the Api using the Https to remove an item from the 
  //      database


  handleDelete = item => {
    Alert.alert(
      'Are you sure?',
      `Do you really want to delete ${item.name}'s badge?\n\n This processcannot be reversed.`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            this.setState({loading: true, badges: undefined});
            await Http.instance.remove(item._id);
            this.fetchdata();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  //      This method will unmount the components when we are done working
  //      with this method we will save a lot of 
  //      the phone's resources by only performing what's
  //      needed

  componentWillUnmount() {
    this.focusListener();
    this.blurListener();
  }

  render() {
    const {badges, loading} = this.state;

    if (loading === true && !badges) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator
            style={styles.loader}
            color="#43FF0D"
            size="large"
          />
        </View>
      );
    }
    return (
      <View style={[styles.container, styles.horizontal]}>
        <StatusBar backgroundColor="#000000" translucent={false} />
        <BadgesSearch onChange={this.handleChange} />
        <FlatList
          style={styles.list}
          data={badges}
          renderItem={({item}) => (
            <BadgesItem
              key={item._id}
              item={item}
              onPress={() => this.handlePress(item)}
              onEdit={() => this.handleEdit(item)}
              onDelete={() => this.handleDelete(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

//    Styles   u.u
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.charade,
  },
  horizontal: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loader: {
    height: '100%',
    paddingHorizontal: 10,
  },
  list: {
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default BadgesScreen;
