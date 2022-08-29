import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import TSButton from '../Components/Core/TSButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AUthContext} from '../Contexts';
import {darkThemeColors, lightThemeColors} from '../Constants/colors';
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const {value, setValue} = useContext(AUthContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: value.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: value.primaryText,
      fontSize: 28,
      marginBottom: 100,
    },
  });
  return (
    <LinearGradient
      colors={[value.linearGradiant.first, value.linearGradiant.second]}
      style={styles.container}>
      {/* // <SafeAreaView style={styles.container}> */}

      <Text style={[styles.title, {color: value.primaryText}]}>Test Game</Text>
      <TSButton
        onPress={() => navigation.navigate('Game')}
        title={'Play Game'}
        icon={require('../Assets/Images/icons8-play-50.png')}
        bgColor={'#e94558'}
        bdColor={'#b53544'}
      />
      <TSButton
        onPress={() => navigation.navigate('History')}
        title={'Game History'}
        icon={require('../Assets/Images/icons8-scroll-32.png')}
        bgColor={'#2aa5e8'}
        bdColor={'#1d6d98'}
      />
      <TSButton
        onPress={() =>
          setValue(value.theme === 'light' ? darkThemeColors : lightThemeColors)
        }
        title={'Chage Theme'}
        icon={require('../Assets/Images/icons8-sun-50.png')}
        bgColor={'#f1c360'}
        bdColor={'#ae8d46'}
      />
      {/* // </SafeAreaView> */}
    </LinearGradient>
  );
};

export default HomeScreen;
