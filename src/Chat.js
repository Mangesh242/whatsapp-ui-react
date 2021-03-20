import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import React,{useEffect,useState } from 'react'
import "./Chat.css";
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
    const[seed,setSeed]=useState('');
    const [input,setInput]=useState("");
    useEffect (() => {
        setSeed(Math.floor(Math.random()*5000 ))
    },[]
    ) 


    const sendMessage = (e) =>{
            e.preventDefault();
            console.log("Yout typed >> ",input);
            setInput("");

    }


    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at ...</p>

                </div>
                 <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>

                    <IconButton>
                        <AttachFile/>
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    
                 </div>
            </div>
            <div className="chat__body">
            <p className={`chat_message`}>
            <span className="   chat__name">
                        Hang
                </span>
                    Hey Guys
            <span className="chat__timestamp">
                3:52

            </span>
              
            </p> 

            <p className={`chat_message ${true && "chat__receiver"}`}>
            <span className="   chat__name">
                        Hang
                </span>
                    Hey Guys
            <span className="chat__timestamp">
                3:52

            </span>
              
            </p> 

            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder="Type a message"
                    value={input}
                    onChange={
                        (e)=>setInput(e.target.value) }
                    
                    
                    />
                    <button onClick ={sendMessage}
                    
                       type="submit">Send a message</button>
                </form>
                <MicIcon />
              </div>

        </div>
    )
}

export default Chat
