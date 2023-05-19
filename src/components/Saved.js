import React, {useContext} from "react";
import {ActivityContext} from "../ActivityContext"

export default function Saved(props){
   const {activity} = props
    return(
        <div>
            <h1>Saved Activities </h1>
            {activity}
        </div>
    )
}