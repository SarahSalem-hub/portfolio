import React, { useState } from "react";
import {
  ChatBox,
  ChatBoxDiv,
  ChatBoxPic,
  ChatBoxPicDiv,
  ContactDiv,
  DialogName,
  ReceiverBox,
  ReceiverMsg,
  SendButton,
  SendMsg,
  SendMsgBox,
  SenderBox,
  SingleMsgDiv,
} from "./Contact.styled";
import { Fredoka } from "@/components/fonts";
import ChatBoxComp from "./ChatBoxComp";
import emailjs from "emailjs-com";

const ContactFormTab = () => {
  const placeHolderArray = [
    { name: "your name ..." },
    { email: "Email..." },
    { msg: " message is ..." },
  ];

  // const [msg, setMsg] = useState(". . .")
  const [placeHolder, setPlaceHolder] = useState(placeHolderArray[0]);
  const [UserMsgInfo, setUserMsgInfo] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [turn, setTurn] = useState(0);
  const [readOnly, setReadOnly] = useState(false);

  function placeHolderTurner(e) {
    if (e.key == "Enter") {
      e.preventDefault();
      // console.log("enter");
      console.log("turn", turn + 1, placeHolderArray.length);
      if (turn < placeHolderArray.length) {
        let pHkey = Object.keys(placeHolder);
        if (turn === 2) {
          setPlaceHolder({ submit: 'Click "Submit" to send your Message 🤩' });
          setReadOnly(true);
        } else {
          setPlaceHolder(placeHolderArray.at(turn + 1));
        }
        console.log("pHkey", pHkey);
        setUserMsgInfo({ ...UserMsgInfo, [pHkey]: e.target.value });

        // e.target.value = "";
      } else {
        // e.target.value = "";
        setPlaceHolder({ submit: 'Click "Submit" to send your Message ! ' });
      }
      e.target.value = "";
      setTurn((turn) => turn + 1);
    }
  }

  function submitToEmail() {
    emailjs
      .send(
        "service_1if3dsl",
        "template_nt4scre",
        UserMsgInfo,
        "s2K_75rh1o1Aok7zT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  console.log("user info", UserMsgInfo);
  console.log("placeholder", placeHolder);
  return (
    <ContactDiv className={Fredoka.className}>
      <ChatBox>
        <ChatBoxComp UserMsgInfo={UserMsgInfo} />

        <SenderBox>
          <ChatBoxPicDiv>
            <ChatBoxPic
              src="/assets/images/maro-sender.jpeg"
              alt="Receiver picture"
            />
          </ChatBoxPicDiv>

          <SendMsgBox>
            <SendMsg
              onKeyDown={(e) => placeHolderTurner(e)}
              placeholder={Object.values(placeHolder)}
              readOnly={readOnly}
            />
            <SendButton onClick={submitToEmail} readOnly={readOnly}>Submit</SendButton>
          </SendMsgBox>
        </SenderBox>
      </ChatBox>
    </ContactDiv>
  );
};

export default ContactFormTab;
