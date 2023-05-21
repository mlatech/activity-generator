import React, { useContext } from "react";
import { ActivityContext } from "../ActivityContext";
import Saved from "./Saved";

export default function SavedLogic(props) {
  const { savedActivities } = useContext(ActivityContext);
console.log(savedActivities)
  return (
    <div>
      {savedActivities.map(savedActivity=> <Saved {...savedActivity} key={savedActivity._id}/>)}
    </div>
  );
}

