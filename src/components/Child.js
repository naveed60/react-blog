export const Child = (props) => {
    return (
        <div>
            <button onClick= {() => props.greetHandler('child')}>Greet Parents</button>
        </div>
    )
}