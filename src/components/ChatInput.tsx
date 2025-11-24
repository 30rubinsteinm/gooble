import { ChangeEvent, FormEvent, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import '../App.css';
import ChatExtrasButton from './ChatExtrasButton';
import ChatSendButton from './ChatSendButton';

const ChatInput = forwardRef(({onSend}: {onSend: () => void}, ref) => { // Wrap the component with forwardRef so the parent can pass a ref;  useImperativeHandle exposes methods to that ref
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(''); // useState is used to make React update stuff on the screen when something changes

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value) // for some reason React makes setting vars a function with useState. probably because it needs to update the page
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior which is to reload/load a new version of the website
        if (inputValue) {
            onSend(); // This will send the onSend function up to the parent
        }
    }

    useImperativeHandle(ref, () => ({ // Think of this as a more complex version of a public method in C#
        getInputValueToSend: () => { // This is one of these methods, and adding more is like adding to a dictionary. This one just returns the current value.
            if (!inputRef.current) return; // Typescript thing to ensure safety, otherwise error. Just makes sure inputRef is not null
            inputRef.current.value = '';
            setInputValue(inputRef.current.value);
            return inputValue;
        }
    }));

    useEffect (() => {
        const handleKeyDown = (event: KeyboardEvent) => { // This will focus the input box any time any character is pressed, as long as it's a valid character.
            const otherKeys = ['Shift', 'CapsLock', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Tab', 'Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Home', 'End', 'PageUp', 'PageDown', 'Insert', ' ']
            if (event.altKey || event.ctrlKey || event.metaKey || otherKeys.includes(event.key)) return; // Don't refocus if it's not a valid character
            if(document.activeElement !== inputRef.current) { // Only refocus if it's not already focused
                if (!inputRef.current) return; // Typescript thing to ensure safety, otherwise error. Just makes sure inputRef is not null
                inputRef.current.focus();
                inputRef.current.setSelectionRange(inputRef.current.selectionEnd, inputRef.current.selectionEnd) // FIXME: doesn't work yet; aims to reset the typing back to the final character instead of saving the previous selection
            }
        }

        document.addEventListener('keydown', handleKeyDown) // Do this always when on key down

        return () => { document.removeEventListener('keydown', handleKeyDown) }; // Once everything is done and cleaning up, remove the event listener. Not a great garbage collection in react/js D:
    }, []);
    
    return (
        <form
        className='chat-input-form'
        id="chatInputForm"
        onSubmit={onSubmit}
        autoComplete='off'
        >
            <ChatExtrasButton></ChatExtrasButton>
            <input
            className='chat-input'
            type="text"
            id="chatInput"
            placeholder="Type here..."
            ref={inputRef}
            onChange={onChange}
            />
            <ChatSendButton onSend={onSend}></ChatSendButton>
        </form>
    )
})
ChatInput.displayName = "ChatInput"

export default ChatInput;