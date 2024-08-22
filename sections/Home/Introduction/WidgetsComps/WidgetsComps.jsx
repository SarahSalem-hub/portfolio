import React from "react";
import Clock from "./ClockWidget/Clock";
import AvailabilityWidget from "./AvailabilityWidget/AvailabilityWidget";
import { WidgContainer } from "./WidgetsComps.styled";

export const WidgetsComps = () => {
  return (
    <WidgContainer>
      <Clock />
      <AvailabilityWidget />
    </WidgContainer>
  );
};
