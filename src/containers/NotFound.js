import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not__found" style={{padding: "10rem 0rem",textAlign:'center'}}>
            <h1>404 - Not Found!</h1>
           <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFound;