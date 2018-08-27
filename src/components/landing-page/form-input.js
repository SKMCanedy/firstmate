import React from 'react';
import styled from "styled-components";

const FormInput = styled.div`
    font-size: 1.25rem;

    & label {
        font-weight: bold;
    }

    & input {
        padding: .5rem;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
    }

    @media (min-width: 600px) {
        & input {
            padding: .5rem;
            width: 50%;
            margin: 1rem;
            font-size: 1rem;
            border-radius: 5px;
            border: none;
        }
    
    @media (min-width: 1080px) {
        font-size: 1.5rem;

        & input {
            padding: .5rem;
            width: 25%;
            margin: 1rem;
            font-size: 1.25rem;
            border-radius: 5px;
            border: none;
        }
    }

`
const Warning = styled.div`
    display:inline-block;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 900;
    color: orange;
    // text-align: right;
`

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }
    render() {
        const Element = this.props.element || 'input';

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <Warning>{this.props.meta.error}</Warning>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <Warning>{this.props.meta.warning}</Warning>
            );
        }

        return (
            <FormInput>
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                <Element
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
                {error}
                {warning}
            </FormInput>
        );
    }
}