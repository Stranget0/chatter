import React, { FC } from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import { IMessage, MessageProps } from "react-native-gifted-chat";
import { dialogPadding, plum300, radius, whiteColor } from "../../styles";
import Typography from "../common/Typography";

interface Props {
  message: MessageProps<IMessage>;
  loggedUser: ChatUser;
}

const ChatMessage: FC<Props> = ({ message, loggedUser }) => {
  const { currentMessage, nextMessage } = message;
  if (!currentMessage) return null;
  const { text, user } = currentMessage;
  const isYours = user._id === loggedUser.id;
  const nextUser = nextMessage?.user;
  const userChanges = user._id !== nextUser?._id && nextUser !== undefined;
  let style = styles.message;
  let textStyle: undefined | TextStyle = undefined;
  if (isYours) {
    style = { ...style, ...styles.messageYours };
    textStyle = styles.textYours;
  }
  if (userChanges) style = { ...style, ...styles.messageBreak };
  return (
    <View style={style}>
      <Typography type="bodyText" style={textStyle}>
        {text}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    borderRadius: radius,
    borderBottomLeftRadius: 0,
    backgroundColor: whiteColor,
    padding: dialogPadding,
    marginBottom: dialogPadding,
    width: "65%",
    marginLeft: dialogPadding * 2,
  },
  messageYours: {
    backgroundColor: plum300,
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: 0,
    marginLeft: 0,
    alignSelf: "flex-end",
  },
  textYours: {
    color: whiteColor,
  },
  messageBreak: {
    marginBottom: dialogPadding * 2,
  },
});

export default ChatMessage;
