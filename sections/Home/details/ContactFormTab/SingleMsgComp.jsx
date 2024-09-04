import React, { useEffect, useRef, useState } from "react";
import { DialogName, ReceiverMsg, SingleMsgDiv } from "./Contact.styled";

const SingleMsgComp = ({ type, msg, first }) => {
  const [show, setShow] = useState(false);

  //   const SarahColor = "#b94457";
  // const SarahColor = "#e4ddd3";
  const SarahColor = "#90324f";
  const YouColor = "#5b8090";
  //const YouColor =  "#365554";
  const sarah = "Sarah: ";
  const you = "You: ";

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth",block:"nearest"})
  }

  useEffect(() => {
   
    scrollToBottom()
    const timeout = setTimeout(
      () => {
        setShow(true);
      },
      first ? 1 : 600
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [show,type, msg, first]);

  return (
    <div>
      {show === true ? (
        <SingleMsgDiv >
          <DialogName color={type === "sarah" ? SarahColor : YouColor}>
            {type === "sarah" ? sarah : you}{" "}
          </DialogName>
          <ReceiverMsg>{Object.values(msg)}</ReceiverMsg>
        </SingleMsgDiv>
      ) : null}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default SingleMsgComp;
