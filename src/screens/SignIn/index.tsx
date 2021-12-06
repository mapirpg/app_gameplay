import React, {useState}  from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';

import illustrationImg from './../../../assets/illustrationImg.png';
import { styles } from './styles';
import { ButtonIcon } from './../../components/buttonIcon';

export function SignIn(){
  

  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image 
        source={illustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />
    
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title={'Entrar com discord'}
          activeOpacity={.8}  
        />

      </View>
    </View>

    

    
  );
};