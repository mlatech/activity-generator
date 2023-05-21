import React, { useContext } from "react";
import { ActivityContext } from "../ActivityContext";
import Saved from "./Saved";

export default function SavedLogic() {
  const { savedActivities } = useContext(ActivityContext);
console.log(savedActivities)
  return (
    <div>
      {savedActivities.map((activity)=> 
      <Saved {...activity} key={activity._id}/>)}
    </div>
  );
}

