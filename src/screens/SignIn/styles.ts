import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background
  },
  
  image: {
    width: '100%',
  },
  
  content: {
    paddingHorizontal: 50,
  },

  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 16,
  },

  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    marginBottom: 34,
  }
});