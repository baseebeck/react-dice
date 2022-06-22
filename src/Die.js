import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
        return (
            <i className={` Die fa-solid fa-dice-${this.props.face} fa-6x`}></i>
        );
    }
}

export default Die;