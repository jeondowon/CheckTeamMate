import { StatusBar } from "expo-status-bar";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";


const AssignmentPage = ({route}) => {
    const navigation = useNavigation();
    const { title, fileColor, id} = route.params;

    return(
        <View style={styles.container}>
            <StatusBar style={"dark"}></StatusBar>
            <View style={styles.headerContainer}>
                <View style={styles.backBtn}>
                    <TouchableOpacity onPress={() => { navigation.navigate("TeamPage") }}>
                        <AntDesign name="left" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default AssignmentPage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    headerContainer: {
        marginTop: "5%",
        flex: 0.15,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "red",
    },
    backBtn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }
})