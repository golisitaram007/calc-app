import React, { Component } from 'react';
import Result from './Result';
import Keypad from './Keypad';

export default class Calculator extends Component {
    
    state = {
        expression: '',
        result: '',
        prevChar: '',
    }


    updateExpression = e => {
        switch (e) {
            case 'clear':
                this.clearResult('');
                break;
            case 'Backspace':
                this.clearLastExp(this.state.expression);
                break;
            case 'Enter':
                this.calculateResult(this.state.expression);
                break;
            default:
                this.setExpression(e);
        }
    }

    clearResult = val => {
        this.setState({
            expression: val,
            result: val,
            prevChar: val
        })
    }

    updateResult = result => {
        this.setState({
            result
        }, () => {
            this.setState({
                expression: ''
            })
        })
    }

    setExpression = k => {
        let currentExp = this.state.expression;
        const prevChar = this.state.prevChar;
        if('+-*/'.indexOf(prevChar) > -1 && isNaN(k)) {
            // if() {
                currentExp = currentExp.replace(/.$/, k);
                this.setState({
                    expression: currentExp
                })
            // }else {
            //     this.setState({
            //         expression: currentExp + k
            //     })
            // }
        }else {
            this.setState({
                expression: currentExp + k
            })
        }
        this.setState({ prevChar: k })
    }

    clearExpression = val => {
        this.setState({
            expression: val
        })
    }

    clearLastExp = (currentExp) => {
        this.setState({
            expression: currentExp.slice(0, -1)
        }, () => {
            const currExp = this.state.expression;
            this.setState({
                prevChar: currExp.split('').pop()
            })
        })
    }

    calcStringExpression = expArr => {
        let [a, operator = '+', b = 0, ...rest] = expArr;
        b = isNaN(b) ? 0 : b;
        const calcVal = this.arthimeticOperations(operator)(a, b);
        return [calcVal, ...rest]
    }

    calculateResult = (expression) => {
        let result = [];
        const copy = expression;

        expression = expression.replace(/[0-9]+/g, "#");
        const numbers = copy.split(/[^0-9.]+/);
        const operators = expression.split("#").filter(n => n);

        for(let i = 0; i < numbers.length; i++){
             result.push(parseInt(numbers[i]));
             if (i < operators.length) result.push(operators[i]);
        }
        let resultLen = result.length;
        while(resultLen > 1) {
            let newCalcResult = this.calcStringExpression(result);
            resultLen = this.calcStringExpression(newCalcResult).length;
            result = newCalcResult;
        }
        const finalResult = this.calcStringExpression(result)[0];
        this.setState({
            result: finalResult,
            expression: ''
        })
    }

    arthimeticOperations(type) {
        const arthOps = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        }
        return arthOps[type]
    }

    render() {
        return (
            <div className="calculator">
                <Result expression={this.state.expression} result={this.state.result} />
                <Keypad keyClicked={(e) => this.updateExpression(e) }/>
            </div>
        )
    }
}
