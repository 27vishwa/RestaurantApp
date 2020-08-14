import React, { Component } from 'react';
import Navbarmenu from './Navbarmenu'
class Home extends Component {
    render() {
        return (
            <div>
                <Navbarmenu />
                <h1>Restaurant </h1>
                <div>
                    <ul>
                        <li>Restautant List </li>
                        <li>Restaurant Update </li>
                        <li>Restaurant Search</li>
                        <li>Rsetaurant Create </li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Home;