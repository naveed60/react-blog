import { Child } from "./Child"
export const Parent = () => {
    const greetParent = (childName) =>{
        alert(`Hello Parent ${childName}`)
    }
    return (
        <Child greetHandler={greetParent}/>
    )
}