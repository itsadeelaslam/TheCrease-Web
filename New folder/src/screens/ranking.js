import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import HeaderComponent from '../components/Headers/header.compoent';
import Odi from '../screens/Odi';
import T20 from '../screens/T20';
import Test from '../screens/Test'
import Footer from '../components/Footer/footer.component'

const Ranking = (props) => {
    return (
        <div >
            <HeaderComponent />
            <Tabs defaultActiveKey="Odi" id="uncontrolled-tab-example">
                <Tab eventKey="Odi" title="Odi">
                    <Odi />
                </Tab>
                <Tab eventKey="T20" title="T20">
                    <T20 />
                </Tab>
                <Tab eventKey="Test" title="Test">
                    <Test />
                </Tab>
            </Tabs>
            <Footer />
        </div >
    );
}

export default Ranking