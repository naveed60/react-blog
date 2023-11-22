import { useState } from "react"
export const Message = () => {
    const [message, setMessage] = useState ('Welcome Visitor')
    return(
        <div> 
            <h1>{message}</h1>
            <button onClick ={()=> setMessage('Thanks for Subscribing!')}>
            Subscribe
            </button>
        </div>
    )
}
export default Message