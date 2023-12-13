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
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.js';
import CoreConcept from './components/CoreConcepts.js';
import Blog from './components/Blog.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  

	
    return (
      <>
        <PrimarySearchAppBar/>
			  {/* <Greet name ="Naveed Ali" />  */}
        <Header/>
        <main>
        {/* <Blog/> */}
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((conceptItem) =>(
                <CoreConcept key={conceptItem.title}{...conceptItem}/>
              ))}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton
                isSelected={selectedTopic === 'components'}
                onSelect={() => handleSelect('components')}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'jsx'}
                onSelect={() => handleSelect('jsx')}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'props'}
                onSelect={() => handleSelect('props')}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'state'}
                onSelect={() => handleSelect('state')}
              >
                State
              </TabButton>
            </menu>
            {tabContent}
          </section>
        </main>
      </>
    );
};

export default App;
