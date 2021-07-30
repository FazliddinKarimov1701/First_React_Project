import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import SignUp from './container/SignUp';
import SignIn from './container/SignIn'; 
import AddBook from './container/addbook';
import AddAuthor from './container/addauthor';
import BooksPage from './container/BooksPage/booksPage';
import AuthorsPage from './container/AuthorsPage/author';
import BookDetails from './container/BookDetails/BookDetails.js';
import AuthorDetails from './container/AuthorDetails/AuthorDetails';
import Dashboard from './container/Dashboard/Dashboard';
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
                <NavLink exact to='./books'>Books</NavLink>
                <NavLink exact to='./authors'>Authors</NavLink>
                <NavLink exact to='./bookdetails'>Book</NavLink>
                <NavLink exact to='./authordetails'>Author</NavLink>
                <NavLink exact to='./dashboard'>Dashboard</NavLink>
            </header>
           <Switch>
               <Route component={SignIn} exact path="/sign-in"/>
               <Route component={SignUp} exact path="/sign-up"/>
               <Route component={AddAuthor} exact path="/add-author"/>
               <Route component={AddBook} exact path="/add-book"/>
               <Route component={BooksPage} exact path="/books"/>
               <Route component={AuthorsPage} exact path="/authors"/>
               <Route component={BookDetails} exact path="/bookdetails"/>
               <Route component={AuthorDetails} exact path="/authordetails"/>
               <Route component={Dashboard} exact path="/dashboard"/>
           </Switch>
        </div>
    )
}

export default App;