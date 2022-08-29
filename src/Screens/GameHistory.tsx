import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import {AUthContext} from '../Contexts';
import LinearGradient from 'react-native-linear-gradient';
const GameHistory = () => {
  const {value, setValue} = useContext(AUthContext);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const history: any = await AsyncStorage.getItem('userGameHistory');
    if (history) {
      console.log('History : ', history);
      setHistory(JSON.parse(history));
    }
  };
  return (
    <>
      <LinearGradient
        colors={[value.linearGradiant.first, value.linearGradiant.second]}
        style={{flex: 1}}>
        {!_.isEmpty(history) ? (
          <SafeAreaView style={styles.container}>
            <FlatList
              data={history.reverse()}
              renderItem={({item, index}) => (
                <View
                  style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[styles.gameIndexText, {color: value.primaryText}]}>
                    {index + 1}
                  </Text>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#ffffff',
                      marginVertical: 5,
                      paddingVertical: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,

                        height: 4,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,

                      elevation: 8,
                      borderRadius: 7,
                    }}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={require('../Assets/Images/user_image.png')}
                        style={{height: 40, width: 40, borderRadius: 100}}
                      />
                      <Text style={styles.iconText}>
                        {item ? 'Won' : 'Lost'}
                      </Text>
                    </View>
                    <Text style={styles.vsText}>VS</Text>
                    <View style={styles.iconContainer}>
                      <Image
                        source={require('../Assets/Images/bot.png')}
                        style={{height: 40, width: 40, borderRadius: 100}}
                      />
                      <Text style={styles.iconText}>
                        {!item ? 'Won' : 'Lost'}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: value.primaryText}}>No History</Text>
          </View>
        )}
      </LinearGradient>
    </>
  );
};

export default GameHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  vsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  gameIndexText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    // marginRight: 10,
    // padding: 5,
  },
});
