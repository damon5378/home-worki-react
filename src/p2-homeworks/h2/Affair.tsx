import React from "react";
import s from "./Affair.module.css";
import { AffairType } from "./HW2";

export type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType; // need to fix any
  deleteAffairCallback: (id: number) => void; // need to fix any
  defaultAffairs: Array<AffairType>;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = (id: number) => {
    props.deleteAffairCallback(id);
  };

  return (
    <div className={s.affair_wrapper}>
      <span className={s.affair_id}>{props.affair._id}</span>
      <span className={s.affair_name}>{props.affair.name}</span>
      <button onClick={()=> deleteCallback(props.affair._id)} className={s.btn_delete}>DEL</button>
    </div>
  );
}

export default Affair;
