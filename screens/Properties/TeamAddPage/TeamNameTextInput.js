//수업등록 팀 이름 입력창
import React, { useState, useRef } from 'react';
import { Animated, Easing, TextInput, StyleSheet, View, Image} from 'react-native';

const TeamNameTextInput = ({
  label = '팀 이름',
  titleActiveSize = 12,
  titleInActiveSize = 16,
  titleActiveColor = '#444444',
  titleInactiveColor = '#c2c2c2',
  onValidInput }) => {

  const [teamName, setTeamName] = useState("");
  const animatedValue = useRef(new Animated.Value(0));

  const [visible, setVisible] = useState(true);

  const handleInputChange = (text) => {
    setTeamName(text);
    if (text.length > 0) {    // valid input인지 판별
      onValidInput(true);       //valid할 경우 true 전달
      setVisible(false)
    } 
    else {
      onValidInput(false);    //아닐 경우 false 전달
    }
  };

  //입력창 애니메이션 효과
  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [22, -4],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: 'clamp',
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
  };

  const viewStyles = {
    borderBottomColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
    borderBottomWidth: 1.5,
  }

  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
    setVisible(false)
  };

  const onBlur = () => {
    if (!teamName) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    if(teamName == 0){
      setVisible(true)
    }
  };

  return (
    <Animated.View style={[styles.subContainer, viewStyles]}>
      <View style={styles.inputStyle}>
        {visible && <Image style={styles.astarisk} source={require("./RedAstarisk.png")}></Image>}
        <Animated.Text style={[returnAnimatedTitleStyles]}>{label}</Animated.Text>
      </View>
      <TextInput
        onChangeText={handleInputChange}
        value={teamName}
        style={styles.textStyle}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    paddingTop: 15,
  },
  textStyle: {
    paddingBottom: 10,
    fontSize: 18,
  },
  astarisk: {
    width: 7,
    height: 7,
  },
  inputStyle: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default TeamNameTextInput;