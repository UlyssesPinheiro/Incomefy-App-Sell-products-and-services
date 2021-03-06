import React from "react";
import styled from "styled-components/native";
import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";

export default function LineButton({ onPress, children }) {
  return (
    <SignInButton onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </SignInButton>
  );
}

const SignInButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${Border.radius};
  border: 2px solid ${Color.black};
`;
const ButtonText = styled.Text`
  color: ${Color.black};
  font-size: ${Font.sizes[5] + "px"};
  font-family: ${Font.family.bold};
`;
