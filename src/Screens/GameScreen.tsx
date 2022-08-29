import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Switch,
  Text,
  Platform,
} from 'react-native';
import {checkRow, cpuTurn, playerValue} from '../Functions/checkRow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import ConfettiCannon from 'react-native-confetti-cannon';
import {AUthContext} from '../Contexts';
import {darkThemeColors, lightThemeColors} from '../Constants/colors';
const GameScreen = () => {
  const {value, setValue} = useContext(AUthContext);
  const [board, setBoard] = useState([
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ]);
  const [player, setPlayer] = useState<boolean>(true);
  const [theme, setTheme] = useState<boolean>(
    value.theme === 'light' ? false : true,
  );
  const [isWon, setisWon] = useState<null | string>(null);
  function later(time: number) {
    return new Promise((resolve: any) => setTimeout(resolve, time));
  }

  const onPress = (i: any, j: any) => {
    const arr = [...board];
    const play = playerValue(arr, arr.length - 1, j);
    if (!play) {
      return;
    } else [(arr[play.i][play.j] = 'x')];
    // arr[i][j] = 'x';
    setBoard(arr);
    if (checkRow(arr, true)) {
      setTimeout(async () => {
        const history = await AsyncStorage.getItem('userGameHistory');
        const arr = history ? JSON.parse(history) : [];
        arr.push(true);
        await AsyncStorage.setItem('userGameHistory', JSON.stringify(arr));
        setisWon('x');
      }, 500);
      return;
    }
    later(0)
      .then(() => setPlayer(false))
      .then(() =>
        later(300).then(() => {
          const playIndex: any = cpuTurn(board);

          console.log('PlayIndex : ', playIndex);

          const newArr = [...board];
          newArr[playIndex.i][playIndex.j] = 'o';
          setBoard(newArr);
          setPlayer(true);
          if (checkRow(newArr, false)) {
            setTimeout(async () => {
              const history = await AsyncStorage.getItem('userGameHistory');
              const arr = history ? JSON.parse(history) : [];
              arr.push(false);
              await AsyncStorage.setItem(
                'userGameHistory',
                JSON.stringify(arr),
              );
              setisWon('o');
            }, 500);
            return;
          }
        }),
      );
  };
  const styles = StyleSheet.create({
    playerView: {
      height: 40,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      borderWidth: 2,
      flexDirection: 'row',
    },
    playerText: {
      color: theme ? '#e7e2e2' : 'black',
      fontSize: 16,
      fontWeight: '600',
    },
  });

  const toggleSwitch = () => {
    setTheme(pre => !pre);
    setValue(value.theme === 'light' ? darkThemeColors : lightThemeColors);
  };

  let player1Color = theme ? '#c30808' : 'red';
  let player2Color = theme ? '#d0d700' : '#f3f30b';

  return (
    <LinearGradient
      colors={[value.linearGradiant.first, value.linearGradiant.second]}
      style={{flex: 1}}>
      {isWon && (
        <ConfettiCannon
          fadeOut
          fallSpeed={4000}
          count={isWon ? 70 : 0}
          origin={{x: 0, y: 0}}
          onAnimationEnd={() => {
            setisWon(null);
            setBoard([
              ['', '', '', '', '', ''],
              ['', '', '', '', '', ''],
              ['', '', '', '', '', ''],
              ['', '', '', '', '', ''],
              ['', '', '', '', '', ''],
              ['', '', '', '', '', ''],
            ]);
          }}
        />
      )}
      {isWon && (
        <ConfettiCannon
          fallSpeed={3400}
          count={isWon ? 70 : 0}
          fadeOut
          origin={{x: 400, y: 0}}
        />
      )}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {isWon && (
          <View
            style={{
              position: 'absolute',
              top: '12%',
              backgroundColor: theme ? '#3b3383' : '#168fff',
              shadowColor: theme ? '#1900ff' : '#168fff',
              shadowOpacity: 0.5,
              shadowOffset: {width: 0, height: 0},
              shadowRadius: 20,
              elevation: 3,
              paddingHorizontal: 50,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 38,
                fontWeight: '600',
                fontStyle: 'italic',
                color: theme ? 'white' : 'white',
              }}>
              {isWon === 'x' ? 'Player 1' : 'Computer' + ' Won'}
            </Text>
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            right: '5%',
            top: Platform.OS === 'ios' ? '5%' : '3%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: theme ? '#d7cdcd' : 'black',
              fontSize: 16,
              fontWeight: '800',
              fontStyle: 'italic',
            }}>
            Switch to {theme ? 'Light' : 'Dark'} Theme
          </Text>
          <Switch
            style={{marginLeft: 10}}
            trackColor={{false: '#524d57', true: '#737475'}}
            thumbColor={theme ? '#2f254a' : '#81d0fb'}
            onValueChange={toggleSwitch}
            value={theme}
          />
        </View>
        <View
          style={[
            styles.playerView,
            {
              borderColor: theme
                ? !player
                  ? '#00ff0d'
                  : 'white'
                : !player
                ? '#5eff00'
                : 'black',
              alignSelf: 'flex-end',
              marginBottom: '5%',
              marginTop: '5%',
              right: '1%',
            },
          ]}>
          <Text style={styles.playerText}>Computer</Text>
          <View
            style={{
              padding: 10,
              backgroundColor: player2Color,
              borderRadius: 50,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: theme
                ? !player
                  ? '#00ff0d'
                  : 'transparent'
                : !player
                ? '#5eff00'
                : 'white',
            }}
          />
        </View>
        {board.map((row, i) => (
          <View key={i} style={{flexDirection: 'row'}}>
            {row.map((col, j) => (
              <TouchableOpacity
                key={j}
                activeOpacity={0.4}
                disabled={col.length !== 0 || isWon !== null}
                style={{
                  width: 65,
                  height: 65,
                  borderWidth: 1,
                  borderColor: value.primaryText,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: j == 5 && i == 0 ? 18 : 0,
                  borderTopLeftRadius: j == 0 && i == 0 ? 18 : 0,
                  borderBottomRightRadius: j == 5 && i == 5 ? 18 : 0,
                  borderBottomLeftRadius: j == 0 && i == 5 ? 18 : 0,
                }}
                onPress={() => onPress(i, j)}>
                <View
                  style={{
                    borderRadius: 100,
                    height: 50,
                    width: 50,
                    backgroundColor:
                      col === 'x'
                        ? 'red'
                        : col === 'o'
                        ? 'yellow'
                        : 'transparent',
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View
          style={[
            styles.playerView,
            {
              borderColor: theme
                ? player
                  ? '#00ff0d'
                  : 'white'
                : player
                ? '#5eff00'
                : 'black',
              alignSelf: 'flex-start',
              top: '5%',
              left: '1%',
            },
          ]}>
          <Text style={styles.playerText}>Player 1</Text>
          <View
            style={{
              padding: 10,
              backgroundColor: player1Color,
              borderRadius: 50,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: theme
                ? player
                  ? '#00ff0d'
                  : 'transparent'
                : player
                ? '#5eff00'
                : 'white',
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default GameScreen;
