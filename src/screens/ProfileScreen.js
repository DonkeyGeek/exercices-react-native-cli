import React, { useState } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


const ProfileScreen = ({route}) => {

  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

  const handleResponseObj = (response, msg) => {
    if (response.errorCode) {
      //console.log(response.errorMessage);
      console.log(response.errorCode);
    } else if (response.didCancel) {
      alert(msg);
    } else {
      setImage(response.assets[0].uri);
    }
  } 

  const selectImage = () => {
    launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    }, response => {
  
    handleResponseObj(response,'Importation annulée');

    })
  }

  const takePicture = () => {
    launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    }, response => {

      handleResponseObj(response, 'Prise de photo annulée');

    })
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{uri: image}}
      />
      <Button 
        title="Sélectionner une image"
        onPress={ selectImage }
      />

      <Button 
        title="Prendre une photo"
        onPress={ takePicture }
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
      height: 200,
      width: 200,
      marginBottom: 20
    }
});

export default ProfileScreen;