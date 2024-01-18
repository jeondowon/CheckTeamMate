//팀 화면
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, 
        FlatList, Dimensions, TouchableWithoutFeedback, Modal } from "react-native";
import { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import TeamItem from "./TeamItem";
import { db, doc, deleteDoc, getDocs, collection } from "../firebase/index"
import * as React from 'react';

//반응형 디자인을 위한 스크린의 높이, 넓이 구하는 코드
const WINDOW_WIDHT = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

TeamPage = () => {
    const navigation = useNavigation()

    {/* 플러스 버튼 터치 시 팀등록/팀 참여하기 버튼 모달창 띄우기/숨기기 함수 */}
    const [showModal, setShowModal] = useState(false);
    const handlePress = () => {
        setShowModal(!showModal);
    };

    const [teamList, setTeamList] = useState([]);
    //firebase에서 데이터 읽어오는 코드
    const getTeamList = async () => {
        const querySnapshot = await getDocs(collection(db, "team"));
        setTeamList(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, fileColor: doc.fileImage }))
        );
    };

    {/* 팀 삭제 코드 */}
    const deleteTeamItem = async (id) => {
        await deleteDoc(doc(db, "team", id));
        getTeamList();
    };

    {/* TeamPage에 들어올 시 getTeamList 함수 작동 (새로고침 함수)*/}
    useFocusEffect(
        React.useCallback(() => {
            getTeamList();
        }, [teamList])
    );

    return (
        <View style={styles.container}>
            <StatusBar style={"dark"}></StatusBar>
            {/* 플러스 버튼 */}
            <View style={styles.addBtnContainter}>
                <TouchableOpacity style={styles.addBtnContainter} onPress={handlePress}>
                    <Image style={styles.addBtn} source={require("./Images/ClassAddBtn.png")}></Image>
                    <Modal style={styles.modalView} animationType="fade" transparent={true} visible={showModal}>
                        <TouchableWithoutFeedback onPress={handlePress}>
                            <View style={styles.modalView}>
                                <View style={styles.addBtnContainter}>
                                    <TouchableOpacity style={styles.addBtnContainter} onPress={handlePress}>
                                        <Image style={styles.addBtn} source={require("./Images/CloseClassAddBtn.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.TwoBtnContainer} onPress={handlePress}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("TeamAddPage"), setShowModal(false) }}>
                                        <View style={styles.AddClassBtn}>
                                            <Text>팀 등록</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { navigation.navigate("TeamJoinPage"), setShowModal(false) }}>
                                        <View style={styles.JoinClassBtn}>
                                            <Text>팀 참여하기</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View flex={1}>
                                </View>
                                <View height="10%"></View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </TouchableOpacity>
            </View>
            <View style={styles.classContainer}>
                {<FlatList
                    numColumns={2}
                    data={teamList}
                    contentContainerStyle={styles.teamListContainer}
                    renderItem={({ item }) => (
                        <TeamItem
                            title={item.title}
                            id={item.id}
                            fileColor={item.fileImage}
                            deleteTeamItem={deleteTeamItem}
                            getTeamList={getTeamList}
                        />
                    )}
                    keyExtractor={item => item.id}
                />}
            </View>
            <View>
            </View>
        </View >
    );
}
export default TeamPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
        backgroundColor: "white",
    },
    classContainer: {
        flex: 2,
        //backgroundColor: "grey",
        alignItems: "center",
        flexWrap: "wrap",
    },
    teamListContainer: {
        //backgroundColor: "red",
        width: WINDOW_WIDHT * 0.9,
    },
    addBtnContainter: {
        flex: 0.3,
        //backgroundColor: "teal",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginBottom: "2%",
    },
    addBtn: {
        width: 40,
        height: 40,
        marginRight: "2%",
    },
    modalView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: "5%",
    },
    TwoBtnContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    AddClassBtn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginBottom: "2%",
    },
    AddBtnText: {
        fontSize: 14,
    },
    JoinClassBtn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
    },
});