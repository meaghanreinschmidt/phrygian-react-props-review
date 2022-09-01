import { useState, useEffect } from 'react';
// useState to create variables that will appear
// on the DOM
// useEffect to call a function when the component
// is 'ready'

// Because it is a component, use capital letters!
function Header({color}) {
    // Any functions or useState go here

    // return what should be rendered (displayed)
    return (
        <header>
            {/* Inline styling */}
            <h1 style={{backgroundColor: color}}> 
                Hello Phrygian!</h1>
            <div>{color}</div>
        </header>
    )
}
export default Header;