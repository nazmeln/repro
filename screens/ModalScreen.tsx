import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ModalScreenProps = NativeStackScreenProps<RootStackParamList, 'Modal'>;

const ModalScreen: React.FC<ModalScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is a Modal Screen</Text>
      <Button title="Close Modal" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ModalScreen;
