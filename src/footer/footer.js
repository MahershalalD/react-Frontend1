import React from 'react'
import './footer.css'
import IIC from '../Images/iicwork_white.png'
export default function Footer() {
    return (
        <div>
          <div className="footer_wrapper">
            <div className="footer_wrapper_inside">
                <div className="logo_wrapper">
                    <img src={IIC} className="logo_wrap" />
                    <h1 style={{fontSize:"35px"}}>IIC WORK</h1>
                </div>
                <p>
                        Whatever your needs, there will be a 
                        freelancer to get it done: from web 
                        design, mobile app development, virtual 
                        assistants, product manufacturing, and 
                        graphic design
                </p>
            <hr style={{marginTop:"20px",width:"80%"}}></hr>
            <div className="last-line">
                        <div className="last-line1">
                    <h3>Registered Users</h3>
                            <h3 style={{ letterSpacing: "5px" }}>000000000</h3>
                </div>
                        <div className="last-line1">
                    <h3>Total Works</h3>
                    <h3 style={{letterSpacing:"5px"}}>000000000</h3>
                </div>
            </div>
            </div>
                <div className="footer_wrapper_inside">
                    <div className="logo_wrapper">
                        <h1 style={{ fontFamily:"TaileBold"}}>CONTACT</h1>
                    </div>
                    <table className="footer_wrapper_inside_table">
                        <tr className="footer_wrapper_inside_tr">
                           <th>
                           <h3>
                               Tele_phone
                           </h3>
                               
                           </th>
                            <th>
                            <h3>
                                +91 9658959586
                            </h3> 
                           </th>
                       </tr>
                        <tr className="footer_wrapper_inside_tr" >
                            <th>
                                <h3>
                                    Mail Id
                           </h3>

                            </th>
                            <th>
                                <h3>
                                    kecwor@gmail.com
                            </h3>
                            </th>
                        </tr>
                        <tr className="footer_wrapper_inside_tr">
                            <th>
                                <h3>
                                    Address
                           </h3>

                            </th>
                            <th>
                                <h3>
                                    Erode,TN,IND
                            </h3>
                            </th>
                        </tr>
                   </table>
                </div>

                <div className="footer_wrapper_inside">
                    <div className="logo_wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        <h1 style={{ fontFamily: "TaileBold" }}>NEWSLETTER</h1>
                        <br />
                        <h3 style={{ color:"#E8E8E8"}}>Subscribe to our newsletter</h3>
                    </div>
                    <input type="text" className="footer_input" placeholder="Enter Your Mail Id" />
                    <button type="submit" className="footer_btn">SUBMIT</button>
                </div>

        </div>  
        </div>
        
    )
}
