import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {die1: 'one', die2: 'two', rolling: false }
        this.roll = this.roll.bind(this);
    }

    roll() {
        let roll1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let roll2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        this.setState({ die1: roll1, die2: roll2, rolling: true })

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 800);
        
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-conatiner">
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll the Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;