import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import Start from './screens/Start';
import Colors from './consts/colors';
import Main from './screens/Main';

export default function App(){
    const [userNumber, setUserNumber] = useState();
    
    function pickedNumberHandler(pickedNUmber){
        setUserNumber(pickedNUmber)
    }

    let screen = <Start onPickNumber={pickedNumberHandler}/>;

    if(userNumber) {
        screen = <Main/>
    }

    return(
        <View  style={styles.rootScreen}>
            <ImageBackground source={require('./img/bg.jpeg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.bg}>
                <SafeAreaView style={styles.sfroot}>{screen}</SafeAreaView>

            </ImageBackground>
        </View>   
    );
}

const styles =  StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: Colors.primary4
    },

    sfroot:{
        flex:1,
    },

    bg: {
        flex: 1,
        opacity: 0.15
    }
})