import React from "react"
import axios from "axios"
import { createContext } from "react"

 export const Context = React.createContext()

export default function ActivityContext(props){
    //created state for activities
    const [activities, setActivities] = React.useState([])
    console.log(activities )
function getActivity(){
   
        axios.get("https://www.boredapi.com/api/activity")
        .then(res => setActivities(res.data))
        .catch(err => console.log(err))
        
       //onclick the activity will change
}
React.useEffect(()=> {
    getActivity()
}, [])

    
       
    return(
        <Context.Provider value={{activities, getActivity}}>
            {props.children}
        </Context.Provider>

    )
}
