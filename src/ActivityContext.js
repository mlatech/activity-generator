import React from "react"
import axios from "axios"


 export const ActivityContext = React.createContext()

export default function ActivityProvider(props){
    //created state for activities
    const [activities, setActivities] = React.useState({})
    const [savedActivities, setSavedActivities] = React.useState([])
   
    function handleSaveActivity(){
         console.log(activities)
        setSavedActivities(activitiesArray =>([
            ...activitiesArray,
            // activity: activities.activity,
            // accessibility: activities.accessibility,
            // key: activities.key, 
            // link: activities.link,
            // participants: activities.participants,
            // price: activities.price,
            // type: activities.type
            activities
        ]))
        alert(`Activity was added to "SAVED ACTIVITIES`)
        console.log(savedActivities)
    }

function getActivity(){
        axios.get("https://www.boredapi.com/api/activity")
        .then(res => setActivities(res.data))
        .catch(err => console.log(err))
}
React.useEffect(()=> {
    getActivity()
}, [])

    
       
    return(
        <ActivityContext.Provider value={{activities, getActivity, handleSaveActivity, savedActivities, setSavedActivities, setActivities}}>
            {props.children}
        </ActivityContext.Provider>

    )
}
