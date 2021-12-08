import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../avatar";
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>

      <Avatar urlImage="https://github.com/mapirpg.png"/>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
        
          <Text style={styles.username}>
            Marcel
          </Text>
        </View>
          <Text style={styles.message}>
            Hoje é seu dia de vitóra
          </Text>
      </View>
    </View>
  )};