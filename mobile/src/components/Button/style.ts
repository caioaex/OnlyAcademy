import styled from "styled-components/native";
import { Ibutton } from ".";

export const ButtonView = styled.TouchableOpacity<Ibutton>`
	margin: 16px 16px 0px 16px;
	width: 80px;
	height: 80px;
	backgroundColor: ${props => props.backgroundColor ? props.backgroundColor : "#E6EEFA"};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`

`;