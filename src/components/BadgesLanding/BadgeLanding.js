import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    } from 'react-native';
    import Colors from '../../res/Colors';
    const imageBackground = {uri: 'https://images.pexels.com/photos/2161954/pexels-photo-2161954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'};
        
class BadgeLanding extends React.Component{

    handlePress = () => {
      this.props.navigation.navigate('Badges');
    };


      render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <ImageBackground source={imageBackground} style={styles.image}>
                <View style={styles.layerColor}>
                 <Text style={styles.title}>
                     Welcome {'\n'}to the {'\n'} rice fields
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                <Text style={styles.buttonText}>      Dive in     </Text>
                </TouchableOpacity>   
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        },
    layerColor: {
        flex:2,
        backgroundColor:'#163B1E50',
        justifyContent:'center',
        alignItems:'center',
        },
    image: {
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        },
    title: {
        margin: 30,
        fontSize: 80,
        borderColor: Colors.white,
        fontWeight: 'bold',
        color:  Colors.white,
        },
    button: {
        padding:15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: '#121212cc',
        borderColor: Colors.white,
        borderWidth: 1,
        },
    buttonText: {
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            paddingHorizontal: 25, 
            color: Colors.white,
        }
})

export default BadgeLanding