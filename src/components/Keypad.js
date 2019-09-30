import React, { Component } from 'react';

const keysToAccept = [
    "Backspace", "/", "*", "-", "+", "Enter", ".",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
] 

export default class Keypad extends Component {

    state = {
        valPrimary: '',
        valSecondary: '',
        action: '',
        result: ''
    }


    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    emitClick = (e) => {
        e.persist();
        const key = e.target.getAttribute('data-key');
        this.props.keyClicked(key)
    }

    handleKeyPress = ({key}) => {
        if(keysToAccept.indexOf(key) > -1) {
            this.props.keyClicked(key);
        }
    }


    render() {
        return (
            <div className="calcKeypad">
                <div className="keyRow row1">
                    <button data-key="clear" onClick={(e) => this.emitClick(e) } className="clearBtn">Clear</button>
                    <button data-key="Backspace" onClick={(e) =>  this.emitClick(e) } className="actionBtn bkSpBtn">&#8592;</button>
                    <button data-key="/" onClick={(e) =>  this.emitClick(e) } className="divisionBtn actionBtn">&#247;</button>
                </div>
                <div className="keyRow row2">
                    <button data-key="7" onClick={(e) =>  this.emitClick(e) }>7</button>
                    <button data-key="8" onClick={(e) =>  this.emitClick(e) }>8</button>
                    <button data-key="9" onClick={(e) =>  this.emitClick(e) }>9</button>
                    <button data-key="*" onClick={(e) =>  this.emitClick(e) } className="actionBtn">&#215;</button>
                </div>
                <div className="keyRow row3">
                    <button data-key="4" onClick={(e) =>  this.emitClick(e) }>4</button>
                    <button data-key="5" onClick={(e) =>  this.emitClick(e) }>5</button>
                    <button data-key="6" onClick={(e) =>  this.emitClick(e) }>6</button>
                    <button data-key="-" onClick={(e) =>  this.emitClick(e) } className="actionBtn">&#45;</button>
                </div>
                <div className="keyRow row4">
                    <button data-key="1" onClick={(e) =>  this.emitClick(e) }>1</button>
                    <button data-key="2" onClick={(e) =>  this.emitClick(e) }>2</button>
                    <button data-key="3" onClick={(e) =>  this.emitClick(e) }>3</button>
                    <button data-key="+" onClick={(e) =>  this.emitClick(e) } className="actionBtn">&#43;</button>
                </div>
                <div className="keyRow row5">
                    <button data-key="0" onClick={(e) =>  this.emitClick(e) } className="zeroBtn">0</button>
                    <button data-key="Enter" onClick={(e) =>  this.emitClick(e) } className="equalBtn actionBtn">&#61;</button>
                </div>
            </div>
        )
    }
}
