import styled from "styled-components/native";
import { Ibutton } from ".";

export const ButtonView = styled.TouchableOpacity<Ibutton>`
	margin: 16px 16px 0px 16px;
	width: 100px;
	height: 50px;
	background-color: ${props => props.backgroundColor ? props.backgroundColor : "#E6EEFA"};
  justify-content: center;
  align-items: center;
	border-radius: 6px;
	border: 1px solid;
	border-color: black;
`;

export const ButtonText = styled.Text`

`;