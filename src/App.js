import logo from './logo.svg';
import './App.css';
import LeftNavbar from './components/leftNavBar/leftNavBar';
import TopNavbar from './components/topNavBar/topNavBar';
import Component1 from "./components/component1/component1"
import Component2 from './components/component2/component2';
import Component3 from './components/component3/component3';

function App() {
  return (
    <>
    <LeftNavbar />
    <TopNavbar name={"Projects > Golden state"}/>
    <Component1  
    title={{name1:"Requirement 1 :",name2:"Requirement 2 :",name3:"Requirement 3 :"}} 
    dropdown={[{
      name:"1.1.1 description goes here"
    },
    {name:"1.1.2 description goes here"}]}
    dropdown1={[{
      name:"2.1.1 description goes here"
    },
    {name:"2.1.2 description goes here"}]}
    dropdown2={[{
      name:"3.1.1 description goes here"
    },
    {name:"3.1.2 description goes here"}]}/>
    <Component2 />
    <Component3 
    details={{heading:"Status Graph",
    t1:"Req Met : 44",t2: "Req In Prgoress : 20"
    ,t3:"Req To Move : 36"}}/>
    </>
    
  );
}

export default App;
