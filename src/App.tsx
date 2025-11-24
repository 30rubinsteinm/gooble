import { useRef, useState } from 'react';
import './App.css';
import ChatInput from './components/ChatInput';
import ChatUsersPanel from './components/ChatUsersPanel';
import ChatWindow from './components/ChatWindow';
import ProfileTopBar from './components/ProfileTopBar';
import SwitcherPanel from './components/SwitcherPanel';
import ChatInputRef from './types/ChatInputRef';
import ChatMessageObject from './types/ChatMessageObject';
import ChatWindowRef from './types/ChatWindowRef';
import createChatObject from './utils/ChatMessageCreator';
import createProfileObject from './utils/UserProfileCreator';

const App = () => {
  let [ messages, setMessages ] = useState<ChatMessageObject[]>([]);
  const chatInputRef = useRef<ChatInputRef>(null);
  const chatWindowRef = useRef<ChatWindowRef>(null);
  const userProfilePicture = 'https://picsum.photos/512'
  
  const addNewInput = (newMessage: ChatMessageObject) => {
    if (messages.length < 200) // Make sure the number of messages isn't to high, to save performance
    {
      setMessages(messages.concat(newMessage));
    }
    else // If it is, then just delete the most recent one
    {
      let newMessages = messages.slice(1); // Why javascript do you have to be so random?? This is the best way I could find to delete the first (oldest) element
      setMessages(newMessages.concat(newMessage));
    }
  }

  const handleMessageSent = () => {
    if (!chatInputRef.current) return;
    const contentText: string = chatInputRef.current.getInputValueToSend();
    if (contentText.trim() != '') { // Make sure the content isn't blank!
      addNewInput(createChatObject({
        newUserDisplayName: 'John Doe',
        newUserID: 0,
        newUserProfilePicture: userProfilePicture,
        newUserContent: contentText
      }));

      if (!chatWindowRef.current) return;
      chatWindowRef.current.scrollToBottom();
    }
  }

  return (
    <div className='wrapper'>
      <ProfileTopBar profile={createProfileObject({
        newUserDisplayName: 'John Doe',
        newUserID: 0,
        newUserProfilePicture: userProfilePicture
      })}></ProfileTopBar>
      <SwitcherPanel></SwitcherPanel>
      <ChatWindow messages={messages} ref={chatWindowRef}></ChatWindow>
      <ChatInput onSend={handleMessageSent} ref={chatInputRef}></ChatInput>
      <ChatUsersPanel></ChatUsersPanel>
    </div>
  );
}

export default App;
