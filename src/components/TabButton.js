export default function TabButton({children, onSelect}){
    return(
      <button onClick={onSelect}className="tab-button" >{children}</button>
    )

}
