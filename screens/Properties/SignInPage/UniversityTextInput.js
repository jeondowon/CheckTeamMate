//회원가입 화면 학교이름 입력창
import React, { useState, useRef } from 'react';
import { Animated, Easing, TextInput, StyleSheet } from 'react-native';

const UniversityTextInput = ({
  label = '학교 이름',
  titleActiveSize = 12,
  titleInActiveSize = 16,
  titleActiveColor = '#444444',
  titleInactiveColor = '#c2c2c2',
  onValidInput}) => {

  const [university, setUniversity] = useState("");
  const animatedValue = useRef(new Animated.Value(0));

  const handleInputChange = (text) => {
    setUniversity(text);
    if (text.length > 0) { // valid input인지 판별
      onValidInput(true);
      //console.log("success");
    }
    else {
      onValidInput(false);
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
  };

  const onBlur = () => {
    if (!university) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.subContainer, viewStyles]}>
      <Animated.Text style={[returnAnimatedTitleStyles]}>{label}</Animated.Text>
      <TextInput
        onChangeText={handleInputChange}
        value={university}
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
    paddingHorizontal: 15,
  },
  textStyle: {
    paddingBottom: 10,
    fontSize: 18,
  },
});

export default UniversityTextInput;