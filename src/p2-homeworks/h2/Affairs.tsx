import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css';

export type AffairsPropsType = {
    data:  Array<AffairType>
    setFilter: (value: FilterType) => void // не уверен
    deleteAffairCallback: (id: number) => void
    defaultAffairs: Array<AffairType>
    filterAffairs: (value: FilterType) => void
}

function Affairs(props: AffairsPropsType) {


    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            defaultAffairs={props.defaultAffairs}
        />
    ))

    const setAll = () => {
        props.filterAffairs("all");
    }; 
    const setHigh = () => {
        props.filterAffairs("high");
    };
    const setMiddle = () => {
        props.filterAffairs("middle");
    };
    const setLow = () => {
        props.filterAffairs("low");
    };

    return (
        <div>

            {mappedAffairs}

            <div className={s.btn_wrapper}>
                <button className={`${s.btn_priority} + ${s.btn_all}`} onClick={setAll}>All</button>
                <button className={`${s.btn_priority} + ${s.btn_high}`} onClick={setHigh}>High</button>
                <button className={`${s.btn_priority} + ${s.btn_middle}`} onClick={setMiddle}>Middle</button>
                <button className={`${s.btn_priority} + ${s.btn_low}`} onClick={setLow}>Low</button>
            </div>
            
        </div>
    );
}

export default Affairs;
