import React, { useContext } from "react";
import { ActivityContext } from "../ActivityContext";
import "./GetMyActivity.css"; // Import the CSS file for styling

export default function GetMyActivity(props) {
  const { activities, getActivity, handleSaveActivity } = useContext(ActivityContext);

  return (
    <div className="getmyactivity-container">
      <button className="get-activity-button" onClick={getActivity}>
        Get Activity
      </button>
      <h1 className="activity-title">Activity: {activities.activity}</h1>
      <h2 className="price">Price: {activities.price === 0 ? "free" : activities.price}</h2>
      <h2 className="link">{activities.link}</h2>
      <button className="save-button" onClick={handleSaveActivity}>
        Add to My Saved Activities
      </button>
    </div>
  );
}
