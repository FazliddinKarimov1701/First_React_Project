import React from 'react';
import BookImg from "../Img/addbook.png";
import classes from './SignIn.module.css';

export default function AddBook(){
    return (
        <div className={classes.container}>
            <div style={{textAlign: 'center'}}>
                <img src={BookImg} alt="asss" />
                <h1>Ulug'bek hazinasi</h1>  
                <button>Upload cover</button>  
            </div>
            <div className={classes.wrapper}>
                <h1>Add Book</h1>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title"
                />
                <input 
                    type="number" 
                    name="pages" 
                    placeholder="Pages"
                />
                <input 
                    type="number" 
                    name="year" 
                    placeholder="Year"
                />
                <input 
                    type="number" 
                    name="price" 
                    placeholder="Price"
                />
                <input 
                    type="text" 
                    name="country" 
                    placeholder="Country"
                />
                <input 
                    type="text" 
                    name="author" 
                    placeholder="Author"
                />
                <textarea name="description" cols="30" rows="10" placeholder="Description"></textarea>
                <button type="submit">Create</button>
            </div>
        </div>
    )
}