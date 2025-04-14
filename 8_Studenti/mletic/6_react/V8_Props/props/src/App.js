
import './App.css';
import React from "react"
import {users} from "./data/dummyData"
// import { UserFunction } from './user/UserFunction';
// import { UserClass } from './user/UserClass';
// import { UserChildren } from './user/UserChildren';
// import { NovaKomponenta } from './user/NovaKomponenta';

import { UserChildren, UserFunction, UserClass, NovaKomponenta } from './user';


export default class App extends React.Component {
  render() {

    return(
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} years={users[0].years}/>
        {/* <UserFunction user={users[0]}/> */}  
      	<UserClass name={users[1].name} years={users[1].years}/>
        <UserChildren name={users[2].name} years={users[2].years}>
          I hobi mi je skijanje
          <NovaKomponenta/>
          </UserChildren>
       </div>


    ) 
  }


}


