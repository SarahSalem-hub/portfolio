import React from "react";
import {
  ChatBoxDiv,
  ChatBoxPic,
  ChatBoxPicDiv,
  DialogName,
  ReceiverBox,
  ReceiverMsg,
  SingleMsgDiv,
} from "./Contact.styled";
import SingleMsgComp from "./SingleMsgComp";

function ChatBoxComp({ UserMsgInfo }) {
  return (
    <ReceiverBox>
      <ChatBoxDiv>
        <SingleMsgComp
          type="sarah"
          msg={`Hi !  \n and Welcome to my website, what's your name?`}
          first= "true"
        />
        <SingleMsgComp type="you" msg={UserMsgInfo.name} />

        {Object.values(UserMsgInfo.name).length > 0 ? (
          <>
            <SingleMsgComp
              type="sarah"
              msg={`Nice to meet you, ${UserMsgInfo.name} ! \n what's your Email, please.`}
            />
            <SingleMsgComp type="you" msg={UserMsgInfo.email} />
          </>
        ) : null}
        {Object.values(UserMsgInfo.email).length > 0 ? (
          <>
            <SingleMsgComp
              type="sarah"
              msg="Brilliant! now what's your Message?"
            />
            <SingleMsgComp type="you" msg={UserMsgInfo.msg} />
          </>
        ) : null}
      </ChatBoxDiv>
      <ChatBoxPicDiv>
        <ChatBoxPic
          src="/assets/images/maro-me.jpg"
          alt="Receiver picture"
        />
      </ChatBoxPicDiv>
    </ReceiverBox>
  );
}

export default ChatBoxComp;
