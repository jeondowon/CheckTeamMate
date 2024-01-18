//팀 참여하기 화면
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { color } from './colors';

export default function TeamJoinPage() {
    const navigation = useNavigation()

    {/* 확인 버튼 (초기값: 비활성화 상태*/}
    const [confirmBtnColor, setConfirmBtnColor] = useState(color.deactivated);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    //참여코드
    const [joinCode, setJoinCode] = useState("");

    //참여코드 입력란에 문자 입력시 확인 버튼 활성화, 색상 변경
    const joinCodeInputChange = (text) => {
        setJoinCode(text);
        if (text.length > 0) {
            setButtonDisabled(false);
            setConfirmBtnColor(color.activated);
        }
        else {
            setButtonDisabled(true);
            setConfirmBtnColor(color.deactivated);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar style={"dark"}></StatusBar>
                {/* 뒤로가기 버튼, 헤더, 확인버튼 컨테이너 */}
                <View style={styles.headerContainer}>
                    <View style={styles.backBtn}>
                        <TouchableOpacity onPress={() => { navigation.navigate("TeamPage") }}>
                            <AntDesign name="left" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.headerText}>팀 참여하기</Text>
                    </View>
                    <View style={styles.confirmBtn}>
                        <TouchableOpacity disabled={buttonDisabled}>
                            <Text style={{ ...styles.headerText, color: confirmBtnColor }}>확인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 참여코드 입력란 */}
                <View style={styles.inputContainer}>
                    <View style={styles.TextInputContainer}>
                        <View>
                            <TextInput placeholder='참여 코드' onChangeText={joinCodeInputChange} style={styles.TextInput}></TextInput>
                        </View>
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
    inputContainer: {
        flex: 1,
        justifyContent: "flex-start",
        //backgroundColor: "skyblue"
      },
    TextInput: {
        height: 50,
        fontSize: 15,
        fontWeight: '500',
        marginLeft: "1%",
        marginTop: "5%",
        paddingTop: "2%",
    },
    TextInputContainer: {
        borderBottomWidth: 1,
    },
    headerContainer: {
        marginTop: "5%",
        flex: 0.13,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        //backgroundColor: "red",
    },
    backBtn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: "center",
        marginLeft: "3%"
    },
    confirmBtn: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: "3%",
    },
    headerText: {
        fontSize: 19,
        fontWeight: '500',
    },
});