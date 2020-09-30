import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "low" | "middle"; 
export type AffairType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};

export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  let priorityItem = affairs;

  if (filter === "high") {
    priorityItem = affairs.filter((a) => a.priority === "high");
  } else if (filter === "middle") {
    priorityItem = affairs.filter((a) => a.priority === "middle");
  } else if (filter === "low") {
    priorityItem = affairs.filter((a) => a.priority === "low");
  }

  return priorityItem;
};

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {

    let filteredTasks = affairs.filter((a : AffairType) => {
        return a._id !== _id
    });

        return filteredTasks; // need to fix
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);

  function changeFilter(value: FilterType) {
    setFilter(value);
}

  const deleteAffairCallback = (_id: number) => {
    setAffairs(deleteAffair(affairs, _id));
  }
    

  return (
    <div>
      <hr />
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
        defaultAffairs={defaultAffairs}
        filterAffairs={changeFilter}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
