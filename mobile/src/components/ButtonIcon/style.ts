import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather"
import { ButtonProps } from ".";

export const Container = styled.TouchableOpacity<ButtonProps>`
  margin: 16px 16px 0px 16px;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#E6EEFA"};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled(Icon)<ButtonProps>`
  z-index: 1
`;
