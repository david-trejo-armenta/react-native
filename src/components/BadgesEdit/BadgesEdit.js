import React from 'react'
import {
    View, Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native'
import Colors from '../../res/Colors'
import Http from '../../libs/http'

class BadgesEdit extends React.Component {

    state={
        loading: false,
        badge: {},
        form: {},
    };

    componentDidMount(){
        this.getBadge();
    }

    getBadge = () => {
        const {item} = this.props.route.params;
        this.setState({badge : item});
        this.props.navigation.setOptions({title: item.name});
    };

    render() {

        const {badge, loading} = this.state;

        if(loading===true){
            return(
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
                <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text>{badge.name}</Text>
                    <TextInput style={styles.input} placeholder="This is an input"/>
                    </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.charade,
        
    },
    horizontal:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    container:{
        flex: 1,
        margin: 20,
        width: '90%',
        height: 'auto',
        backgroundColor: Colors.white,
        borderRadius: 20,
    },
    loader: {
        height: '100%',
        paddingHorizontal: 10,

    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: Colors.zircon,
        borderRadius: 10,
    },
});

export default BadgesEdit;