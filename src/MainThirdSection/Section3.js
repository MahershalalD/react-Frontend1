import React from 'react';
import '../MainThirdSection/Section3.css';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RestoreIcon from '@material-ui/icons/Restore';
import ChatIcon from '@material-ui/icons/Chat';

const Section3 = () =>{
    return(
        <div>
            <div className="section3-wrapper">
                <div style={{ fontFamily: "TaileBold", textAlign: "center", color:"#495464"}}><h1>THE FACILITIES PROVIDED</h1></div>
                <div className="section3-inside-wrapper">
                    <div className="include-flex">
                        <div className="inside-flex">
                            <i className="fa fa-file" style={{fontSize:"50px",color:"#495464"}}></i>
                            <h1>Browse portfolios</h1>
                        </div>
                        <h2>
                            Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.
                        </h2>
                    </div>
                    <div className="include-flex">
                        <div className="inside-flex">
                            <i className="fa fa-history" style={{ fontSize: "50px", color: "#495464" }}></i>
                            <h1>Track progress</h1>
                        </div>
                        <h2>
                            Keep up-to-date and on-the-go with our time tracker, and mobile app.
                        </h2>
                    </div>
                    <div className="include-flex">
                        <div className="inside-flex">
                            <i className="fa fa-comment-alt" style={{ fontSize: "50px", color: "#495464" }}></i>
                            <h1>Live chat</h1>
                        </div>
                        <h2>
                            You can live chat with your freelancers to get constant updates on the progress of your work.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;