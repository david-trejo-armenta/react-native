import {StyleSheet} from 'react-native';
import Colors from '../res/Colors';

const exampleStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:Colors.charade,

    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loader: {
        height: '100%',
        alignSelf: 'center',
    },
})

export default exampleStyles