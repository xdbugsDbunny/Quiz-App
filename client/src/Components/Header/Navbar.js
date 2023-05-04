import { Button, Typography } from '@mui/material'
import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import Login from '../Login'
import { DataContext } from '../DataContext'


const Navbar = () => {
    const [open,setOpen]=useState(false);

    const { user}=useContext(DataContext);
    // const

    const openDialog = () =>{
        setOpen(true);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>CareerGuide</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/about'>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/contact'>Contact Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/table'>Leaderboard</Link>
                        </li>
                    </ul>
                    {
                        user ? <Button variant="contained">{user}</Button>
                        :
                        <Button variant="contained" onClick={()=>openDialog()}>Login</Button>

                    }
                </div>
            </div>
            <Login open={open} setOpen={setOpen}/>
        </nav>
    )
}

export default Navbar