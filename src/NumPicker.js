import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        var value = event.target.value;

        this.setState(function() {
            return {
                value: value
            }
        });
    }
    handleClick() {

    }
    render() {
        console.log(this.props);
        return (
            <form>
                <ul>
                    {
                        this.props.options.map(function(number, index) {
                            return (
                                <li 
                                key={number}
                                >
                                    { number }
                                </li>
                            )
                        })
                    }
                    <li>...</li>
                </ul>
            </form>
        );
    }
}

NumPicker.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default NumPicker;