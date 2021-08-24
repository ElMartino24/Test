import React, {useEffect, useState} from "react"
import axios from "axios"
import UnicornKard from "./unicornmap/UnicornKard"

export default function Unicorn(){

    const [unicornState, setUnicornState] = useState([])

    useEffect(() => {
        ( async ()=> {

           const {data} = await axios.get("http://localhost:8080/unicorns/")

           setUnicornState([...data, ...unicornState])
        })()
    }, [])
    
    console.log(unicornState)

    return(
            <div>
                {unicornState.map((unicornObject) => <UnicornKard unicorn={unicornObject}/>)}   
                
            </div>
           
    )
}

