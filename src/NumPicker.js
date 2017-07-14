import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';

class NumPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick() {
        this.setState(function() {
            return {
                input: true
            }
        })
    }

    handleInputChange(event) {
        if(event.key === 'Enter') {
            event.preventDefault();
            const { options, playersChange } = this.props;
            const players = options.slice();
            const inputValue = parseInt(event.target.value)
            players.push(inputValue);
            playersChange(players, inputValue);
            this.setState({ input: false });
        }
    }

    componentDidUpdate() {
        if(this.state.input) {
           this.refs.myInput.focus();
        }
    }
    
    render() {
        const { options, onChange, value, playersChange } = this.props;
        const { input } = this.state;

        return (
            <form>
                {input ? 

                <TextField
                    hintText="Enter players number"
                    type='number'
                    onKeyPress={this.handleInputChange}
                    ref='myInput'
                    inputStyle={{color: 'white'}}
                />
                
                : 
                
                <ul className='numbers-list'>
                    {
                        options.map((number, index) => {
                            return (
                                <li
                                className='numbers-item'
                                style={number === value ? {backgroundColor: 'purple'} : null}
                                onClick={() => onChange(number)}
                                key={number}                               
                                >
                                    { number }
                                </li>
                            )
                        })
                    }
                    <li
                        className='numbers-item'
                        onClick={this.handleClick}
                    >...</li>
                </ul>
                }
            </form>
        );
    }
}

NumPicker.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    playersChange: PropTypes.func.isRequired
}

export default NumPicker;