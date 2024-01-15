import { View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

const ModalComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => {
        setIsModalVisible(true);
    }
    return (
        <View>
            <Modal animationType="fade"
                visible={isModalVisible}
                transparent={true}>
                <View style={styles.modalBackground}>
                    <Modal onSwipeComplete={() => setIsModalVisible(false)}
                        swipeDirection={"down"}
                        animationType="slide"
                        visible={isModalVisible}
                        onBackdropPress={onPressModalClose}
                        backdropOpacity={0}
                        transparent={true}>
                        <View style={styles.modalView}>
                            <View style={styles.modalItemContainter}>
                                <View style={styles.modalVector}></View>
                                <View style={styles.modalBtnContainer}>
                                    <TouchableOpacity onPress={confirmColor}>
                                        <Image style={styles.modalConfirmBtn} source={require("./Images/modalConfirmBtn.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Modal>
        </View>
    )
}

export default ModalComponent