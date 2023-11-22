import { useState } from "react";
function Search({searchTerm,handleSearch}){
    return(
        <div>
            Search
       <input type="text" value={searchTerm}  
       onChange={handleSearch}/>
        </div>
    )

}
export default Search;