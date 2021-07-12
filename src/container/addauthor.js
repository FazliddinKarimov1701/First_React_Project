import React from 'react';

export default function AddBook(){
    return (
        <div className="container">
            <div>
                <img src="../addauthor.png" alt="png file" />
                <h1>Abdulla Avloniy</h1>  
                <button>Upload image</button>
            </div>
            <div className="wrapper">
                <h1>Add Author</h1>
                <input type="text" name="firstname" placeholder="First name"/>
                <input type="text" name="lastname" placeholder="Last name"/>
                <input type="number" name="dateofbirth" placeholder="Date of birth"/>
                <input type="number" name="dateofdeath" placeholder="Date of death"/>
                <input type="text" name="country" placeholder="Country"/>
                <textarea name="bio" cols="30" rows="10" placeholder="Bio"></textarea>
                <button type="submit">Next Step →</button>
            </div>
        </div>
    )
}