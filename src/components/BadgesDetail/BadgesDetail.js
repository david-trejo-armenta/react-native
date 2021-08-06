import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'
import Storage from '../../libs/storage'
import Colors from '../../res/Colors'

class BadgesDetail extends React.Component{
    state = {
        badge: {},
    };

    componentDidMount() {
        this.getBadge();
    }

    getBadge = () => {
        const {item} = this.props.route.params;
        this.setState({badge:item}), () => {
            this.getFavorite();
        };
        this.props.navigation.setOptions({title: item.name})
    };

    getFavorite = async () => {
        try{
            const key = `favorite-${this.state.badge._id}`;
            const favoriteStr = await Storage.instance.get(key);
            if(favoriteStr != null){
                this.setState({isFavorite:true})
            }
        } catch (err) {
            console.log('Get favorite error', err);
        }
    };

    toggleFavorite = () => {
        if(this.state.isFavorite){
            this.removeFavorite();
        } else {
            this.addFavorite();
        }
    };

    addFavorite = async () => {
        const badge = JSON.stringify(this.state.badge);
        const key = `favorite-${this.state.badge._id}`;

        const stored = await Storage.instance.store(key, badge);

        if(stored) {
            this.setState({isFavorite: true});
        }
    };

    removeFavorite = async () => {
        const key = `favorite-${this.state.badge._id}`;
        await Storage.instance.remove(key);
        this.setState({isFavorite: false});
    }

    render(){
        const {badge, isFavorite} = this.state;
        return(
            <View style={styles.container}>
            <View style={styles.badge}>
                <Image 
                style={styles.header} 
                source={{uri: `${badge.header_img_url}`}}
                />
                <Image 
                style={styles.profileImage} 
                source={{uri: `${badge.profile_picture_url}`}}
                />
                <TouchableOpacity
                style={styles.favorite}
                onPress={this.toggleFavorite}
                >
                <Image 
                    source={
                            isFavorite
                            ? require('../../assets/ishuevo.png')
                            : require('../../assets/nothuevo.png')
                        }
                />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{badge.name}</Text>
                    <Text style={styles.age}>{badge.age}</Text>
                </View>
                <Text style={styles.city}>{badge.city}</Text>
                <View style={styles.data}>
                <View style={styles.dataColumns}>
                    <Text style={styles.dataInfo}>{badge.followers || "0"}</Text>
                    <Text style={styles.smallText}>Followers</Text>
                  </View>
                  <View style={styles.dataColumns}>
                    <Text style={styles.dataInfo}>{badge.likes || "0"}</Text>
                    <Text style={styles.smallText}>Likes</Text>
                  </View>
                  <View style={styles.dataColumns}>
                    <Text style={styles.dataInfo}>{badge.post || "0"}</Text>
                    <Text style={styles.smallText}>Posts</Text>
                  </View>
                </View>
             </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.charade,
    },
    badge:{
        flex: 1,
        margin: 20,
        width: '90%',
        height: '90%',
        backgroundColor: Colors.white,
        borderRadius: 25,
    },
    header:{
        width: '100%',
        height: '40%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    profileImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 8,
        borderColor:Colors.charade,
        position: 'absolute',
        top: 150,
        left: '21%',
    },
    favorite:{
        position: 'absolute',
        top: 295,
        right: 10,
    },
    userInfo:{
        flexDirection: 'row',
        marginTop: 110,
        justifyContent: 'center',            
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color:Colors.blackPearl,
    },
    age:{
        fontSize: 28,
        marginLeft: 20,
        color: Colors.zircon,
    },
    city:{
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: Colors.zircon,
    },
    data:{
        padding: 20,
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Colors.zircon,
    },
    dataColumns: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataInfo: {
        marginTop: 20,
        fontSize: 28,
        fontWeight: 'bold',
        marginHorizontal: 25,
        color: Colors.charade,
    },
    smallText: {
        color: Colors.zircon,
    }
    });

export default BadgesDetail;