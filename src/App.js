// App.js
import { useState } from "react";
import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import PrimarySearchAppBar from "./components/ApBar";
import  Card  from "./components/Card";
import TabButton from "./components/TabButton";
import UserLogin from "./components/UserLogin";
import Discount from "./components/Discount";
import { EXAMPLES } from "./data";
import Card2 from "./components/Card2";

const App = () => {
  const [discount, setDiscount]= useState('apply Discount')
	function handleClick(discounted){
		setDiscount(discounted);
		console.log(discount);
	}

	const [selectedTopic, setSeletedTopic] = useState('components')
	 function handleSelect(selectedButton){
		setSeletedTopic(selectedButton);
		console.log('app components executing');
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
			<Discount price={()=> handleClick('75')}/>
			<div className="container-fluid d-flex justify-content-center  vh-100">
				<section>
					<menu>
						<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
						<TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
						<TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            {selectedTopic}
					</menu>
          <div id="tab-content"> 
          
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>
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
