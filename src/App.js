import React from 'react';
import Navbar from './Navbar/Navbar';
import Section1 from './MainFirstSection/Section1';
import Section2 from './MainSecondPart/Section2';
import Section3 from './MainThirdSection/Section3'
import Section4 from './Section_four/Section_four';
import Footer from './footer/footer'

const App = () => {
    return(
        <div>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        </div>
    )
}

export default App;