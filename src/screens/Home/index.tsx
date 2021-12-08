import React from "react";
import { Button, View } from "react-native";
import { styles } from './style';
import { Profile } from "../../components/profile";
import { ButtonAdd } from "../../components/buttonAdd";
import { CategorySelect } from "../../components/categorySelect";

export function Home() {
  return(
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <View>
            <CategorySelect />
        </View>

      </View>
  );
};