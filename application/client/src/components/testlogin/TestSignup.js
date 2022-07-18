import React, { Component } from "react";
import testAPIService from "../../Services/testAPIservice";

export default class TestSignup extends Component {
	constructor(props) {
		super(props);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.newUser = this.newUser.bind(this);
		this.state = { 
			email: "",
			firstName: "",
			id: null,
			lastName: "",
			password: ""
		};
	}
	onChangeFirstName(event) {
			this.setState({
				firstName: event.target.value
			});
	}
	onChangeLastName(event){
			this.setState({
				lastName: event.target.value
			});
	}
	onChangePassword(event) {
			this.setState({
				password: event.target.value
			});
	}
	onChangeEmail(event){
			this.setState({
				email: event.target.value
			});
	}
	
	handleSubmit(event) {
			console.log(this.state);
			var data = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				password: this.state.password,
				email: this.state.email
			};
			event.preventDefault();
			testAPIService.saveUser(data).then(response => {
					alert('You submitted successfully! ' + data.firstName + ' User is created');
					this.setState({
						id: response.data.id,
						firstName: response.data.firstName,
						lastName: response.data.lastName,
						password: response.data.password,
						email: response.data.email
					});
					
					this.context.history.push('/login');
					
				}).catch(e => {
					console.log(e);
					alert('Something wrong with the input');
				});
	}
	newUser() { this.setState({
				email: "",
				firstName: "",
				id: null,
				lastName: "",
				password: ""
				
			});
	}
	// this is the part where we are calling the API
	// useEffect(() => {
	// 	fetch("http://localhost:5000/login").then(res=>res.json()).then((result)=>{setUsers(result);})});

	render() 
	{
		return (
		<div className="submit-form">
			<div className="form-group">
				<label htmlFor="firstName">First Name
				</label>
				<input
				type="text"
				className="form-control"
				id="firstName"
				required
				value={this.state.firstName}
				onChange={e => this.onChangeFirstName(e)}
				name="firstName"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="lastName">Last Name</label>
				<input
				type="text"
				className="form-control"
				id="lastName"
				required
				value={this.state.lastName}
				onChange={e => this.onChangeLastName(e)}
				name="lastName"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="age">Password</label>
				<input
					type="text"
					className="form-control"
					id="password"
					required
					value={this.state.password}
					onChange={e => this.onChangePassword(e)}
					name="password"	
				/>
			</div>
			<div className="form-group">
				<label htmlFor="address">email</label>
				<input
				type="text"
				className="form-control"
				id="address"
				required
				value={this.state.email}
				onChange={e => this.onChangeEmail(e)} name="address"/>
			</div>
				<button onClick={this.handleSubmit}className="btn btn-success">Submit</button>
			
			</div>
			
			   
		);
		
	}
}


