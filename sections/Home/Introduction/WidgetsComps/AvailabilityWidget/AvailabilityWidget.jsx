import React from "react";
import {
  ActiveSign,
  ActiveText,
  ActiveTextBold,
  ActiveTextContainer,
  ActiveTextNote,
  AvailableContainer,
  BoxFirstPart,
  BoxWrapper,
  SmallCorner,
} from "./AvailabilityWidget.styled";

const AvailabilityWidget = () => {
  return (
    <BoxWrapper>
       <ActiveSign></ActiveSign>
      {/* <BoxFirstPart>
      <ActiveSign></ActiveSign>
      <SmallCorner></SmallCorner>

      </BoxFirstPart> */}
      
    <AvailableContainer>
      

      <ActiveTextContainer>
        <ActiveText>{"Available"}</ActiveText>
        <ActiveTextNote>{"Ready for new challenges!"}</ActiveTextNote>
      </ActiveTextContainer>
    </AvailableContainer>
    </BoxWrapper>
  );
};

export default AvailabilityWidget;
