import React, { useContext } from "react"
import {ActivityContext} from "../ActivityContext"


export default function Search(props){

    const {activities, getActivity, handleSaveActivity } = useContext(ActivityContext)
    
    return(
        <div>

            <button onClick={getActivity}> Get Activity</button>
            <h1>Activity:{activities.activity}</h1>
            <h2>Price:{activities.price === 0 ? "free" : activities.price}</h2>
            <h2>{activities.link}</h2>
            <button onClick={()=>handleSaveActivity()}>Add to My Saved Activities</button>

        </div>
    )
}