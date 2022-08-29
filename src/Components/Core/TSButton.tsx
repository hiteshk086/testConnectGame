import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import PlayIcon from '../../Assets/SVGs/PlayIcon';

interface ButtonInterface {
  onPress: () => void;
  title: string;
  icon: ImageSourcePropType;
  bgColor: string;
  bdColor: string;
}

const TSButton: React.FC<ButtonInterface> = (props: ButtonInterface) => {
  const {onPress, title, icon, bgColor, bdColor} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          borderColor: bdColor,
        },
      ]}>
      <View style={styles.iconContainer}>
        <Image
          source={icon}
          style={{height: 25, width: 25, tintColor: 'white'}}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: (Dimensions.get('window').width * 47) / 100,
        }}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TSButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    width: (Dimensions.get('window').width * 60) / 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000030',
    borderRadius: 7,
    height: 47,
    // borderBottomWidth: 3,
    width: (Dimensions.get('window').width * 13) / 100,
  },
});
