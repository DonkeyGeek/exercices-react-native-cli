import React from 'react';
import navigationPaths from '../constants/navigationPaths';
import { StyleSheet, Text, View, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
      <Button 
        title='Vers Profil'
        onPress={() => navigation.navigate(navigationPaths.PROFILE, {newTitle: 'Donkey Geek'}) }
        // goBack, replace, popTopTop etc!
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;