import React, {useContext} from "react";
import { ActivityContext } from "../ActivityContext";
import "./Saved.css"; // Import the CSS file for styling


export default function Saved(props) {
    console.log(props)
  return (
    <ul>
    <li className="saved-item">
      <h3 className="activity-name">{props.activity}</h3>
    </li>
    </ul>
  );
}
