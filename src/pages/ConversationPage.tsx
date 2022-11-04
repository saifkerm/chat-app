import { Page } from '../utils/styles';
import { ConversationSidebar } from '../components/conversations/ConversationSidebar';
import {Outlet, useParams} from "react-router-dom";
import {ConversationPanel} from "../components/conversations/ConversationPanel";

export const ConversationPage = () => {
    const { id } = useParams();
  return (
    <Page>
        <ConversationSidebar />
        {!id && <ConversationPanel /> }
        <Outlet />
    </Page>
  );
};