//회원가입 화면
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { color } from './colors';

export default function SignInPage() {
  const navigation = useNavigation()

  const [signInBtnColor, setSignInBtnColor] = useState(color.deactivated);    //가입하기 버튼 색상 (초기값: 비활성화(회색))
  const [buttonDisabled, setButtonDisabled] = useState(true);     //가입하기 버튼 비활성화/활성화 (초기값: 비활성화)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   //조건 수정 필요(이메일과 비밀번호를 같이 판별해야함 ex)비밀번호와 이메일이 모두 valid input인 경우 버튼 활성화
  {/*이메일 입력란에 문자 입력시 확인버튼 활성화*/ }
  const emailInputChange = (text) => {
    setEmail(text);
    if (text.length > 5) {
      setButtonDisabled(false);
      setSignInBtnColor(color.activated);
    }
    else {
      setButtonDisabled(true);
      setSignInBtnColor(color.deactivated);
    }
  };
  {/*비밀번호 입력란에 문자 입력시 확인버튼 활성화*/ }  //조건 수정 필요
  const passwordInputChange = (text) => {
    setPassword(text);
    if (text.length > 5) {
      setButtonDisabled(false);
      setSignInBtnColor(color.activated);
    }
    else {
      setButtonDisabled(true);
      setSignInBtnColor(color.deactivated);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View /*behavior='padding'*/ style={styles.container}>
        <StatusBar style={"dark"}></StatusBar>
        {/* 뒤로가기 버튼 */}
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("InitialPage")}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {/* 이메일 입력란 */}
        <View style={styles.inputContainer}>
          <View style={styles.TextInputContainer}>
            <View>
              <TextInput placeholder='이메일' onChangeText={emailInputChange} style={styles.TextInput}></TextInput>
            </View>
          </View>
          {/* 비밀번호 입력란 */}
          <View style={styles.TextInputContainer}>
            <View>
              <TextInput placeholder='비밀번호' secureTextEntry={true} onChangeText={passwordInputChange} style={styles.TextInput}></TextInput>
            </View>
          </View>
          {/* 가입하기 버튼 */}
          <View style={styles.BtnContainter}>
            <TouchableOpacity disabled={buttonDisabled} onPress={() => navigation.navigate("TeamPage")}>
              <View style={{ ...styles.logInBtn, backgroundColor: signInBtnColor }}>
                <Text style={styles.logInText}>가입하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  TextInput: {
    height: 50,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: "1%",
    marginTop: "5%",
    paddingTop: "2%",
  },
  TextInputContainer: {
    borderBottomWidth: 1,
  },
  backBtn: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
  BtnContainter: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: "5%",
    //backgroundColor: "red"
  },
  logInBtn: {
    borderRadius: 9,
    alignItems: "center",
    paddingVertical: "5%",
  },
  logInText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  inputContainer: {
    flex: 0.9,
    justifyContent: "flex-start",
    //backgroundColor: "skyblue"
  },
});