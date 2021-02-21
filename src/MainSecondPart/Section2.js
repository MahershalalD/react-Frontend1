import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import '../MainSecondPart/Section2..css';
import HowToRegIcon from '@material-ui/icons/HowToReg';

const Section2 = () =>{
    return(
        <div>
            
        <div className="section2-wrapper">
        <div className="triangle"></div>
        <h1 className="pickyou">PICK YOUR NEED</h1>
            <div className="setion_inside-wrapper">
                <div className="part1">
                <div className="part1-flex">
            <h2 style={{fontFamily: 'TaileBold'}}>WORK</h2>
                <i  className="emoji1 fas fa-user-cog"></i>
                </div>
                    <h3>
                        Showcase your skills and get hired
                    </h3>
                    <button className="part1-btn" type="button">START</button>
                </div>
                    <div className="part2">
                        <div className="part2-flex">
                            <h2 style={{ fontFamily: 'TaileBold' }}>HIRE</h2>
                            <i  className="emoji2 fas fa-user-tie"></i>
                        </div>
                        <h3>
                            Showcase your skills and get hired
                    </h3>
                        <button className="part1-btn" type="button">START</button>
                    </div>
            </div>
        </div>
        </div> 
    )
}

export default Section2;