import React from "react";
import { MessageDataType } from "./HW1";
import s from './Message.module.css';


function Message(props: MessageDataType ) {
    return (
        <div className={s.message__general}>
            <div>
                <img src={props.avatar} alt="avatar" className={s.avatar}/>
            </div>
        
            <div className={s.wrapper}>

            
            <div className={s.name}>{props.name}</div>
            <div className={s.message}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
        </div>
        </div>
    );
}

export default Message;
