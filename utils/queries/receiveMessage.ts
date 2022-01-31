import { gql, useSubscription } from "@apollo/client";
import { useEffect } from "react";
import { IMessage } from "react-native-gifted-chat";
import { userFrag } from "../../lib/api";
import { messageToGiftedMessage } from "../gifted";
import { roomIdVar } from "../global";

export const messageAddedQuery = gql`
	subscription messageAdded(${roomIdVar}:String!){
  messageAdded(roomId:${roomIdVar}){
    body
    id
    insertedAt
    ${userFrag}
  }
}`;

export const useReceiveMessageQuery = (roomId: string) =>
  useSubscription<{ messageAdded: ChatMessage }, RoomVariable>(
    messageAddedQuery,
    { variables: { roomId } }
  );

export const useReceiveMessage = (
  roomId: string,
  onSuccess?: (m: IMessage) => void
) => {
  const { data: receivedMessageData } = useReceiveMessageQuery(roomId);

  // If received message, push it to messages
  useEffect(() => {
    if (receivedMessageData) {
      const receivedMessage = messageToGiftedMessage(
        receivedMessageData.messageAdded
      );
      if (onSuccess) onSuccess(receivedMessage);
      // setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessageData]);
  return receivedMessageData?.messageAdded;
};
