import React, { useState } from 'react';
import iic_logo from '../Images/iicwork_blue.png'
import '../Navbar/Navbar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [accclick, setaccClick] = useState(false);
    const [link1,setlink1] = useState(false);
    const [link2,setlink2] = useState(false);
    const [link3,setlink3] = useState(false);

    const handlelink1 =() =>{
        setlink1(!link1)
        setlink2(link1)
        setlink3(link1)
    }
    const handlelink2 = () => {
        setlink2(!link2)
        setlink1(link2)
        setlink3(link2)
    }
    const handlelink3 = () => {
        setlink3(!link3)
        setlink2(link3)
        setlink1(link3)
    }


    const handleOnaccclick = () => {
        setaccClick(!accclick);
    }

    const handleOnclick = () =>{
        setClick(!click);
    }

    return(
        <div className="nav-bar" style={{ maxHeight: click ? "500px" : null}}>
            <div className="nav-logo">
            <div className="nav-logo-1">
                    <div className="nav-logo-2" onClick={handleOnclick}>
                        <div className="line1" style={{ backgroundColor: click ? "#CC0E74" :"#495464" }}></div>
                        <div className="line2" style={{ backgroundColor: click ? "#CC0E74" :"#495464" }}></div>
                        <div className="line3" style={{ backgroundColor: click ? "#CC0E74" :"#495464" }}></div>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <img src={iic_logo} className="logo-nav"/>
                <h1 className="logo-text">KEC WORK</h1>
                    </div>
                
                </div> 
            <div className="acc-icon">
                    <AccountCircleIcon className="acc-icon-color"
                        style={{ color: accclick ?"#CC0E74" :"#495464" }}
                     onClick={handleOnaccclick}  fontSize="large" />
            </div>
            
            
                
            </div>
            <div className="nav-link" style={{ display: click  ? "flex" : null, animation: click ? "fade_in_show 0.5s" : "fade_out_show 0.5s"}}>
                <div className="text-link">
                    <ul>
                        <li>
                            <a onClick={handlelink1} style={{ fontWeight: link1  ? "bolder" : "normal" }}  href="#">HIRE FOR A JOB</a>
                        </li>
                        <li>
                            <a onClick={handlelink2} style={{fontWeight: link2 ? "bolder" : "normal"}} href="#">WORK FOR A JOB</a>
                        </li>
                        <li>
                            <a onClick={handlelink3} style={{ fontWeight: link3 ? "bolder" : 'normal' }} href="#">ABOUT</a>
                        </li>
                    </ul>
                </div>
                <div className="btn-link">
                    <button className="nav-btn" type="button" >LOG IN</button>
                    <button className="nav-btn-out" type="button" >SIGN IN</button>
                </div>

            </div>
            <div className="acc-box" style={{ display: accclick ?"block":"none"}}>
                <ul>
                    <li><PermIdentityIcon style={{marginRight:"5px"}} />  MAHER SHALAL</li>
                    <li><LiveHelpIcon style={{  marginRight: "5px" }}/>  HELP</li>
                    <li><ExitToAppIcon style={{  marginRight: "5px" }}/>  LOG OUT</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar;