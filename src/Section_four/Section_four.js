import React from 'react'
import './Section_four.css'
import webPro from '../Images/web-programming.svg'
import webdes from '../Images/web-design.svg'
import appdev from '../Images/app-development.svg';
import backend from '../Images/backend.svg';
import chip from '../Images/chip.svg'
import iic_logo from '../Images/iicwork_blue.png'

export default function Section_four() {
    return (
        <div className="section_main">
        <div className="phase1">
                <div className="section_main_heading">
                   <h2>Top Picks ....</h2>
                </div>
                <div className="section_main_list">
                    <div className="section_main_picks">
                        <img src={webPro} ></img>
                       <a href="#"><h2>WEB DEVELOPMENT</h2></a> 
                    </div>
                    <div className="section_main_picks">
                        <img src={webdes} ></img>
                        <a href="#"><h2>UI/UX DESIGN</h2></a> 
                    </div>
                    <div className="section_main_picks">
                        <img src={appdev} ></img>
                        <a href="#"><h2>APP DEVELOPMENT</h2></a> 
                    </div>
                    <div className="section_main_picks">
                        <img src={backend} ></img>
                        <a href="#"><h2>BACKEND DEVELOPMENT</h2></a> 
                    </div>
                    <div className="section_main_picks">
                        <img src={chip} ></img>
                        <a href="#"><h2>HARDWARE WORK</h2></a> 
                    </div>
        </div>
            </div>
            <div className="phase2">
               <img src={iic_logo} /> 
            </div>
        </div>
    )
}
