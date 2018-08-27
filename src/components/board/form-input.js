import React from 'react';
import styled from "styled-components";

const FormInput = styled.div`
    font-size: 1.5rem;

    & label {
        font-weight: bold;
    }

    & input {
        padding: .5rem;
        width: 80%;
        margin-top: 1rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
    }

`

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        return (
            <FormInput>
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
            </FormInput>
        );
    }
}