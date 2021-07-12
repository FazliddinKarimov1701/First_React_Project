import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import SignUp from './container/SignUp';
import SignIn from './container/SignIn'; 
import AddBook from './container/addbook';
import AddAuthor from './container/addauthor'
import './index.css';

function App(){
    return (
        <div className="App">
            <header>
                <NavLink exact to='./'>Home</NavLink>
                <NavLink exact to='./sign-in'>Sign In</NavLink>
                <NavLink exact to='./sign-up'>Sign Up</NavLink>
                <NavLink exact to='./add-book'>Add Book</NavLink>
                <NavLink exact to='./add-author'>Add Author</NavLink>
            </header>
           <Switch>
               <Route component={SignIn} exact path="/sign-in"/>
               <Route component={SignUp} exact path="/sign-up"/>
               <Route component={AddAuthor} exact path="/add-author"/>
               <Route component={AddBook} exact path="/add-book"/>
           </Switch>
        </div>
    )
}

export default App;