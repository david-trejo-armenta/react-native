import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import Colors from '../../res/Colors';
import Loader from '../../Generics/Loader';
import UserSession from '../../libs/sessions';
import style from './styles';

const imageBackground = {
  uri: 'https://amordeimagenes.com/wp-content/uploads/2018/04/bonita-imagen-de-lago-para-fondo-de-pantalla-300x300.jpg',
};

class Signup extends React.Component {
  state = {
    loading: false,
    errors: [],
    user: undefined,
    IsPasswordVisible: true,
    isPasswordConfVisible: true,
    form: {},
  };

  handleSubmit = async () => {
    try {
      this.setState({loading: true, user: undefined});
      let response = await UserSession.instance.signup(this.state.form);
      if (typeof response == 'object') {
        let errors = [];
        let cont = 0;

        for (let error in response) {
          let key = error;
          if (error == 'non_field_errors') {
            error = 'password';
          }

          errors.push(
            <View key={cont}>
              <Text>{`${error} : ${response[key][0]}`}</Text>
            </View>,
          );
          cont++;
        }
        this.setState({
          loading: false,
          user: undefined,
          errors: errors,
        });
      } else {
        this.setState({
          loading: false,
          user: response,
          errors: [],
        });
        if (this.state.user) {
          this.props.navigation.navigate('Login');
        }
      }
    } catch (err) {
      console.log('Sign up err', err);
      throw Error(err);
    }
  };

  ToggleIsPasswordVisible = () => {
    if (this.state.IsPasswordVisible) {
      this.setState({IsPasswordVisible: false});
    } else {
      this.setState({IsPasswordVisible: true});
    }
  };

  ToggleIsPasswordConfVisible = () => {
    if (this.state.isPasswordConfVisible) {
      this.setState({isPasswordConfVisible: false});
    } else {
      this.setState({isPasswordConfVisible: true});
    }
  };

  render() {
    const {IsPasswordVisible, isPasswordConfVisible, loading, errors} =
      this.state;
    if (loading == true) {
      <Loader />;
    }
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.layerColor}>
            <View style={styles.signupform}>
              <View style={styles.signupBack}>
                <Text style={styles.signup}>Sign Up</Text>
                {errors ? (
                  <View style={styles.errorContainer}>{errors}</View>
                ) : null}
                <Text style={styles.inputText}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Username'}
                  keyboardAppearance="dark"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form);
                      form.username = text;
                      return {form};
                    });
                  }}
                />
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Email'}
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form);
                      form.email = text;
                      return {form};
                    });
                  }}
                />
                <Text style={styles.inputText}>Password</Text>
                <View style={style.password}>
                  <TextInput
                    style={style.input}
                    secureTextEntry={IsPasswordVisible}
                    placeholder={'Password'}
                    keyboardAppearance="dark"
                    onChangeText={text => {
                      this.setState(prevState => {
                        let form = Object.assign({}, prevState.form);
                        form.password = text;
                        return {form};
                      });
                    }}
                  />
                  <TouchableOpacity onPress={this.ToggleIsPasswordVisible}>
                    <Image
                      style={{marginRight: 10}}
                      source={
                        IsPasswordVisible
                          ? require('../../assets/show.png')
                          : require('../../assets/hide.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.inputText}>Password Confirmation</Text>
                <View style={style.password}>
                  <TextInput
                    style={style.input}
                    secureTextEntry={isPasswordConfVisible}
                    placeholder={'Password Confirmation'}
                    keyboardAppearance="dark"
                    onChangeText={text => {
                      this.setState(prevState => {
                        let form = Object.assign({}, prevState.form);
                        form.password_confirmation = text;
                        return {form};
                      });
                    }}
                  />
                  <TouchableOpacity onPress={this.ToggleIsPasswordConfVisible}>
                    <Image
                      style={{marginRight: 10}}
                      source={
                        isPasswordConfVisible
                          ? require('../../assets/show.png')
                          : require('../../assets/hide.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.handleSubmit}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  horizontal: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    margin: 20,
    width: '90%',
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 25,
  },
  layerColor: {
    flex: 2,
    backgroundColor: '#04593A80',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBack: {
    backgroundColor: Colors.blackPearl,
    height: 550,
    width: '150%',
    paddingHorizontal: 20,
    marginTop: '-20%',
    borderRadius: 30,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  signup: {
    color: Colors.white,
    fontSize: 30,
    textAlign: 'center',
    marginTop: '2%',
  },
  signupform: {
    paddingVertical: 190,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    color: Colors.white,
    borderRadius: 10,
    borderColor: Colors.white,
  },
  inputText: {
    fontSize: 18,
    marginTop: 10,
    color: Colors.white,
    marginBottom: 5,
    marginLeft: 10,
  },
  submit: {
    marginVertical: 30,
    width: '30%',
    borderWidth: 1,
    borderColor: Colors.zircon,
    borderRadius: 10,
    backgroundColor: Colors.charade,
  },
  submitText: {
    fontSize: 16,
    margin: 5,
    color: Colors.white,
    textAlign: 'center',
  },
  button: {
    padding: 15,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: '#121212cc',
    borderColor: Colors.white,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    color: Colors.white,
  },
});

export default Signup;
