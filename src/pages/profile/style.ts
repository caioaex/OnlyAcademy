import styled from "styled-components/native";

export const Body = styled.View`
  background-color: black;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageBackground = styled.Image`
  position: absolute;
  z-index: 0;
  overflow: hidden;
`;

export const ViewImage = styled.View`
  position: absolute;
  z-index: 2;

  width: 100.77px;
  height: 100.77px;
  top: 137.23px;
  left: 145px;
  gap: 0px;

  border: 6px solid;
  border-color: white;

  border-radius: 60px;

  overflow: hidden;
`;

export const MiddleImage = styled.Image`
  
`;

export const ProfileBody = styled.View`
  position: absolute;
  width: 100%;
  height: 1000%;
  top: 200px;
  z-index: 1;
  background-color: #E6EEFA;

  border-top-left-radius: 55px;
  border-top-right-radius: 50px;
`;

