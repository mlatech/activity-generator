import React from "react"
import {useContext} from "react"
import Search from "./Search"
import { ActivityContext } from "../ActivityContext"


export default function Activities(){
    const {activities} = useContext(ActivityContext)
    return(
        <div>   
            {activities.map((activity, _id)=>{
                return (
                    <Search 
                    key = {activity._id}
                    id = {activity._id}
                />
                )
            })}
            
        </div>
    )
}