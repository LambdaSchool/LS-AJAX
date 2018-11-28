import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
	width: 45%;
	border: 2px solid #cfc7d2;
	border-radius: 10px;
	background: #9e90a2;
	display: flex;
	flex-flow: column nowrap;
	padding: 2.5%;
	margin: 5% 33%;
	justify-content: space-around;
	align-items: space-between;
`;
const Input = styled.input`
	border: 1px solid black;
	border-radius: 5px;
	margin: 5% 5% 0;
	font-size: 1.5rem;
	width: 80%;
	text-align: center;
	align-self: center;
`;

const Label = styled.label`
	font-size: 1.8rem;
	margin: 1% 5% 2%;
	color: #272932;
	text-align: center;
`;

const Button = styled.button`
	border: 2px solid #cfc7d2;
	background: #272932;
	border-radius: 10px;
	padding: 1% 5%;
	margin: 1% 25%;
	width: 50%;
	color: #cfc7d2;
	font-weight: bold;
	:hover {
		background: #cfc7d2;
		color: #272932;
		font-weight: bold;
		border: 2px solid #272932;
	}
`;

class FriendForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameValue: '',
			ageValue: '',
			emailValue: ''
		};
	}

	handleChange(event) {
		event.preventDefault();
		return event.target.name === 'name'
			? this.setState({
					nameValue: event.target.value
			  })
			: event.target.name === 'age'
			? this.setState({
					ageValue: event.target.value
			  })
			: event.target.name === 'email'
			? this.setState({
					emailValue: event.target.value
			  })
			: null;
    }
    
    addFriend(event){
        event.preventDefault();
        this.props.addFriend(this.state.nameValue, this.state.ageValue, this.state.emailValue);
    }
	render() {
		return (
			<Form onSubmit={this.addFriend}>
				<Label>
					Name
					<Input
						type="text"
						name="name"
						value={this.state.nameValue}
						placeholder="Please Enter Your Name..."
						onChange={(event) => {
							this.handleChange(event);
						}}
					/>
				</Label>
				<Label>
					Age
					<Input
						type="text"
						name="age"
						value={this.state.ageValue}
						placeholder="Please Enter Your Age..."
						onChange={(event) => {
							this.handleChange(event);
						}}
					/>
				</Label>
				<Label>
					Email
					<Input
						type="text"
						name="email"
						value={this.state.emailValue}
						placeholder="Please Enter Your Email..."
						onChange={(event) => {
							this.handleChange(event);
						}}
					/>
				</Label>
				<Button type='submit'>Submit</Button>
			</Form>
		);
	}
}
export default FriendForm;

FriendForm.propTypes = {
    nameValue: PropTypes.string,
    ageValue: PropTypes.string,
    emailValue: PropTypes.string,
	handleChange: PropTypes.func,
	addFriend: PropTypes.func
};
