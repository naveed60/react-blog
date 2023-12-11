// App.js
import { useState } from "react";
import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import PrimarySearchAppBar from "./components/ApBar";
import  Card  from "./components/Card";
import TabButton from "./components/TabButton";
import UserLogin from "./components/UserLogin";

const App = () => {
	const [selectedTopic, setSeletedTopic] = useState('Plese Click the button')
	 function handleSelect(selectedButton){
		setSeletedTopic(selectedButton);
		console.log(selectedTopic);
	}
	const [user, setUser] = useState({
    email: '',
    password: '',
    loggedIn: false,
  });

	const handleLogin = () => {
    // TODO: Update user object with dummy data
    // Dummy data can be any non-empty strings for email and password, and loggedIn set to true
    setUser({
      email: 'dummy@example.com',
      password: 'dummyPassword',
      loggedIn: true,
    });
	}
	
	
	return (
		<div className="App ">
			<PrimarySearchAppBar/>
			<Greet name ="Naveed Ali" />
			<div className="container-fluid d-flex justify-content-center  vh-100">
				<section>
					<menu>
						<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
						<TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
						<TabButton onSelect={() => handleSelect('state')}>State</TabButton>
           {selectedTopic}
					</menu>
				</section>
			</div>

				
		
			<UserLogin user={user} onLogin={handleLogin} />
				{/* Display user information */}
				<div>
					<h2>User Information</h2>
					<p>Email: {user.email}</p>
					<p>Password: {user.password}</p>
					<p>Logged In: {user.loggedIn ? 'Yes' : 'No'}</p>
				</div>
			<div className="container-fluid d-flex justify-content-center align-items-center vh-100">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
	);
};

export default App;
