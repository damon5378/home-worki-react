import React from "react";
// import { PropsTypesMessage } from "../../p1-main/m1-ui/u1-app/App";
import Message from "./Message";


export type MessageDataType = {
    avatar: string
    name:string
    message:string
    time:string
}


const messageData:MessageDataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Constantine",
    message: "Привет! Ничего не понимаю))",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
