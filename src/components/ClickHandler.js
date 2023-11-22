export const  ClickHandler = () => {
    const clickHandler = () => {
        console.log('Button Clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )

}