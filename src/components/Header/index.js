import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';

=======
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
>>>>>>> 67eae0c60c413c2f1b27746e39b40bda744ab02a
=======
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
>>>>>>> 67eae0c60c413c2f1b27746e39b40bda744ab02a
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  };

  signOut = async () => {
    await AsyncStorage.clear();
  };

  render() {
    const { title } = this.props;

=======
=======
>>>>>>> 67eae0c60c413c2f1b27746e39b40bda744ab02a
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;
<<<<<<< HEAD
>>>>>>> 67eae0c60c413c2f1b27746e39b40bda744ab02a
=======
>>>>>>> 67eae0c60c413c2f1b27746e39b40bda744ab02a
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
