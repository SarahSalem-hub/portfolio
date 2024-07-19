import React, { useEffect, useState } from "react";
import { ClockContainer, DateDiv, PmAm, Time } from "./Clock.styled";
import useClock from "@/hooks/useClock";

const Clock = () => {
  const { hours, minutes, seconds, amPm,weekday, day, month, year} = useClock();

  return (
    <ClockContainer>
      <Time>
        {hours}: {minutes}
        
        <PmAm>{amPm}</PmAm>
      </Time>
      <DateDiv>{`${weekday}, ${day} ${month}`}</DateDiv>
    </ClockContainer>
  );
};

export default Clock;
