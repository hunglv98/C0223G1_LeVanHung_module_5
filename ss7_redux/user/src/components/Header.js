import React from 'react';
import { Link } from "react-router-dom"

function Header(){
return(
    <>
    <h1 style={{textAlign:'center'}}>User List</h1>
    <Link to={`/users`}><button className='btn btn-primary'>Get Users</button></Link>
    <Link to={`/`}><button className='btn btn-primary'>Home</button></Link>
    </>
)
}
export default Header