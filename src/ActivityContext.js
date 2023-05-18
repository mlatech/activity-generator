import React from "react"
import axios from "axios"
import { createContext } from "react"

const Context = React.createContext()

function ActivityContext(props){
    //created state for activities
    const [activities, setActivities] = React.useState([])

    const [activitiesData, setActivitiesData] = React.useState()

    React.useEffect(()=>{
        axios.get("https://www.boredapi.com/api/activity")
        .then(res => setActivities(res.data))
        .catch(err => console.log(err))
        }, [])
       //onclick the activity will change


    function getActivity(){
        const randomNum = Math.floor(Math.random() * activities.length)
        const url = activities[randomNum].url
        return url
      
    }        
    return(
        <ActivityContext.Provider value={{activities, getActivity}}>
            {props.children}
        </ActivityContext.Provider>

    )
}
export {Context, ActivityContext}