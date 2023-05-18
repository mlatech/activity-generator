import React, { useContext } from "react"
import {Context} from "./ActivityContext"
import axios from "axios"

export default function Search(props){
    const {activities, getActivity, } = useContext(Context)
    return(
        <div>
            <button 
                className="form--btn"
                onSubmit={getActivity}
                > Get Activity</button>
        </div>
    )
}