import {
    ConversationSidebarContainer,
    ConversationSidebarHeader,
    ConversationSidebarItem,
    ConversationSidebarStyle
} from '../../utils/styles';
import { TbEdit } from "react-icons/tb";
import {FC} from "react";
import {ConversationsType} from "../../__mocks__/conversations";
import styles from './index.module.scss';

type Props = {
    conversations: ConversationsType[];
}

export const ConversationSidebar: FC<Props> = ({conversations}) => {
  return (
      <ConversationSidebarStyle>
        <ConversationSidebarHeader>
            <h1>Conversations</h1>
            <TbEdit size={40}/>
        </ConversationSidebarHeader>
          <ConversationSidebarContainer>
              {conversations.map((conversation) => (
                  <ConversationSidebarItem>
                      <div className={styles.conversationAvatar}></div>
                      <div>
                          <span className={styles.conversationName}>{conversation.name}</span>
                          <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
                      </div>
                  </ConversationSidebarItem>
              ))}
          </ConversationSidebarContainer>
      </ConversationSidebarStyle>
  )
}