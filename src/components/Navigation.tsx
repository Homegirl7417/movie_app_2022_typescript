import React from "react";
import { Link } from "react-router-dom";

const Navigation = (): React.ReactElement => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
} 

export default Navigation