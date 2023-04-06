import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

function Main() {
    return (
     <View style={styles.screen}>
        <Title>My Guess!</Title>
         {/* Tebak */}
        <View>
            <Text>Higher or Lower?</Text>
            {/* + - nya disini nggeh */}
        </View>
    {/* <View>Log Rounds!</View> */}
    </View>
    );
}

export default Main;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
    },
    
})