//로딩 화면
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image} from "react-native";

export default function LoadingPage() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"}></StatusBar>
      <View style={styles.imgContainer}>
        <Image style={styles.logInImage} source={require("./Images/loading.gif")}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "white",
    paddingBottom: "15%"
  },
  imgContainer: {
    flex: 2,
    //backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  logInImage: {
    height: 400,
    width: 400,
  },
});
