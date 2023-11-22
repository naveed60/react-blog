// App.js
import { useState } from "react";
import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { Parent } from "./components/Parent";
import Counter from "./components/Counter";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";
import MyForm from "./components/Form";
import Search from "./components/Search";
import List from "./components/List";
const App = () => {
	const [searchTerm, setSearchTerm] = useState();
	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	}

	const posts = [
		{
			id:"1",
			title:"Javascript Guys!",
			content:"Hi Students Learning React Js is Fun",
		},
		{
			id:"2",
			title:"React Js!",
			content:"You have learn js first to Learning React "
		},
		{
			id:"3",
			title:"All World!",
			content:"Learning React Js is cup of Tea",
		},
		{
			id:"4",
			title:"Good Guys!",
			content:"Hi Students Learning React Js is Fun",
		},
		{
			id:"5",
			title:"Top Students!",
			content:"You have learn js first to Learning React "
		},
		{
			id:"6",
			title:"Node Js!",
			content:"Learning React Js is cup of Tea",
		},
		{
			id:"7",
			title:"Nest Js!",
			content:"Hi Students Learning React Js is Fun",
		},
		{
			id:"8",
			title:"Next Js!",
			content:"You have learn js first to Learning React "
		},
		{
			id:"9",
			title:"Mongo DB!",
			content:"Learning React Js is cup of Tea",
		}

	]

	const filterList = posts.filter((item) =>{
	 return	item.title.toLowerCase().includes(searchTerm)
	});

	
	return (
		<div className="App">
			<Greet name ="Naveed Ali" />
			{/* <Greet profession ="Software Developer"/> */}
			{/* <Message/> */}
			{/* <ClickHandler/> */}
			{/* <Parent/>
			<Counter/> */}
			{/* <LoginControl/> */}
			{/* <MyForm /> */}
			<Search searchTerm={searchTerm} handleSearch={handleSearch}></Search>
			<List list={filterList}></List>
		</div>
	);
};

export default App;
