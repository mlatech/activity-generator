import React from "react"
import {useContext} from "react"
import GetMyActivity from "./GetMyActivity"
import { ActivityContext } from "../ActivityContext"


export default function Activities(){
    const {activities} = useContext(ActivityContext)
    return(
        <div>   
            {activities.map((activity, _id)=>{
                return (
                    <GetMyActivity 
                    key = {activity._id}
                    id = {activity._id}
                />
                )
            })}
            
        </div>
    )
}