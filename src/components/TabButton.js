export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </>
  );
}