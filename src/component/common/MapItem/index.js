import React from "react";
import styled from "styled-components";

import { Text } from "../Text";

export const ItemView = styled.div`
  position: relative;
  width: 354px;
  min-height: 210px;
`;
const StyledItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 20px 26px 27px 48px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 60px;
  height: 180px;
  width: 400px;
  margin-top: 40px;
`;
const Datetap = styled.div`
  background: #16beaa;
  position: absolute;
  border-radius: 25px;
  width: 90px;
  height: 60px;
  z-index: 0;
  right: 5%;
  padding: 7px 50px 0 50px;
  text-align: center;
`;
export const MapItem = (props) => {
  return (
    <ItemView direction={props.direction}>
      <Datetap>
        <Text fontSize="20px" lineHeight="34.5pxpx">
          {props.date}
        </Text>
      </Datetap>
      <StyledItem>
        <Text fontSize="25px" lineHeight="50.18px">
          {props.title}
        </Text>
        <Text
          fontSize="20px"
          lineHeight="34.5pxpx"
          margin="15px 0 0 0"
          width="100%"
          maxWidth="750px"
        >
          {props.content}
        </Text>
      </StyledItem>
    </ItemView>
  );
};