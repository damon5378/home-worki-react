import React from "react";
import { MessageDataType } from "./HW1";
import s from './Message.module.css';


function Message(props: MessageDataType ) {
    return (
        <div>
            <div>
                <img src={props.avatar} className={s.avatar}/>
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
