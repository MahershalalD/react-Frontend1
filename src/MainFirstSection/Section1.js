import React from 'react';
import '../MainFirstSection/Section1.css';
import Section1Svg from '../Images/section-1.svg'
const Section1 = () =>{
    return(
        <div className="section-wrapper">
            <div className="section-wrapper2">
                 <div className="word-part">
                 <div className="bemore" style={{display:"inline-flex",alignItems:"center"}}>
                    <div>
                        <h1>Be</h1>
                    </div>
                        <div>
                            <h1>More</h1>
                        </div>
                    <div>
                        <h1 className="produc">Productive</h1>
                    </div> 
                 </div>
                <h1 className="word-sen2">Turn  your ideas into product and grow with others</h1>
                <button className="word-btn" type="button">GET STARTED</button>
                 </div>
                 <div className="svg-part">
                    <img className="svg-part-svg" src={Section1Svg} />
                 </div>
            </div>
        </div>
    )
}
export default Section1;