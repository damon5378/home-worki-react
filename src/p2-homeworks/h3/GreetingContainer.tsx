import React, { ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";
import { Modal } from "./Modal";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string | null>(""); // need to fix any

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modal, setModal] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(null);
        setName(e.currentTarget.value); // need to fix
    };

    const addUser = () => {
        if(!isOpen) {
            setIsOpen(true)
        }
        if(name.trim() !== "") {
            // alert(`Hello,  ${name}!`);
            setModal(`Hello, ${name}!`);
            setName("")
            addUserCallback(name);
        } else {
            setError("⚠ Field should be fill ⚠")
        }   
    };

    const onCancel = () => {
        setIsOpen(false);
    }

    const totalUsers = users.length; // need to fix

    return (
        <>
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            // count={count}
        />
        
        <Modal 
            modal={modal}
            name={name}
            setNameCallback={setNameCallback}
            isOpen={isOpen}
            onCancel={onCancel}/>
        </>
    );
}

export default GreetingContainer;
