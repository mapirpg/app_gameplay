import React, {useState}  from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import illustrationImg from './../../../assets/illustrationImg.png';
import { styles } from './styles';
import { ButtonIcon } from './../../components/buttonIcon';
import { useNavigation } from '@react-navigation/native';

export function SignIn(){
  const navigation = useNavigation();
  
  function handleSignIn() {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>

      <Image 
        source={illustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>

        <Text style={styles.title}>
          Conecte-se{`\n`}
          e organize{`\n`}
          suas jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title={'Entrar com discord'}
          activeOpacity={.8}
          onPress={handleSignIn}  
        />

      </View>
    </View>
    
  );
};