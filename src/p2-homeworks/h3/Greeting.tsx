import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    // count: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <div className={s.input__wrapper}>
                <input 
                    value={name} 
                    onChange={setNameCallback} 
                    className={`${inputClass} ${s.addInputClass}`}/>
                <button onClick={addUser} className={s.add__greetings}>Add</button>
               <span className={s.greetings__counter}>{totalUsers}</span>
            </div>
            <span className={s.greetings__error}>{error}</span>
        </div>
    );
}

export default Greeting;
