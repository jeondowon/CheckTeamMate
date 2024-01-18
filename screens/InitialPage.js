//시작 화면 (로그인 하기 전)
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from "react-native";

//반응형 디자인을 위한 스크린의 높이, 넓이 구하는 코드
{/*const WINDOW_WIDHT = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;*/}

export default function InitialPage({ navigation }) {
  //const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"}></StatusBar>
      {/*로고 이미지*/}
      <View style={styles.logoContainter}>
        <Image style={styles.logoImage} source={require("./Images/logo.png")}></Image>
      </View>
      {/*넘어가는 그림들*/}
      <View style={styles.imgContainer}>
        <Image style={styles.logInImage} source={require("./Images/LoginImages.gif")}></Image>
        <Text style={styles.description}>무임승차를 방지하기 위한 최적의 방법</Text>
      </View>
      {/* 로그인 버튼, 가입하기 버튼 */}
      <View style={styles.BtnContainter}>
        <TouchableOpacity>
          <View style={styles.logInBtn}>
            <Text style={styles.logInText}>로그인</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>  
          <View style={styles.signInBtn}>
            <Text style={styles.signInText}>가입하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  logoContainter: {
    flex: 1.2,
    //backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
  },
  imgContainer: {
    flex: 2,
    //backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logInImage: {
    height: 270,
    width: 290,
  },
  logoImage: {
    height: 107,
    width: 115,
  },
  description: {
    color: "#050026",
    fontSize: 16,
    fontWeight: 400,
    alignSelf: "center",
    marginBottom: "10%",
  },
  BtnContainter: {
    flex: 1,
    //backgroundColor: "red",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "10%",
  },
  logInBtn: {
    backgroundColor: "#050026",
    borderRadius: 9,
    alignItems: "center",
    paddingVertical: "5%",
    marginBottom: "3%",
  },
  logInText: {
    color: "white",
    fontSize: 18,
    fontWeight: 400,
  },
  signInBtn: {
    backgroundColor: "white",
    borderRadius: 9,
    alignItems: "center",
    paddingVertical: "4.5%",
    borderColor: "#050026",
    borderWidth: 1,
  },
  signInText: {
    color: "black",
    fontSize: 18,
    fontWeight: 400,
  },
});
