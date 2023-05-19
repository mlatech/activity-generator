import React, {useContext} from "react"
import { ActivityContext } from "../ActivityContext"
import Saved from "./Saved"


export default function SavedLogic(){
    const { savedActivities } = React.useContext(ActivityContext)
    
    return(
        <div>
            <ul>
                {savedActivities.map((activity, index) => {
                    return(
                        <Saved key={index} activity={activity} />
                        )
                        }
                    )
                }
            </ul>
        </div>
    )
}