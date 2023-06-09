import {Text, StyleSheet} from 'react-native';
import Colors from '../consts/colors';
function Title ({children}) {

    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary2 ,
        backgroundColor: Colors.primary2,
        padding: 20,
    }
})