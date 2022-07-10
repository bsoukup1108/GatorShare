
import testAPIService from "../../Services/testAPIservice";
import React, { Component, useEffect, useState } from 'react';

export default function Testlogin()
{
	const[users,setUsers]= useState({
		email: '',
		password: '',
	});
	const {email,password}= users;

	const onChange = (e) =>
		setUsers({
			...users,
			[e.target.email]: e.target.email,
			[e.target.password]: e.target.password,
		});
		const onSubmit = (e) => {
			e.preventDefault();
			useEffect(()=>{
				fetch("http://localhost:5000/api/login")
				.then(res=>res.json())
				.then((result)=>{
				  setUsers(result);
				//   console.log(result);
				}
			  )
			  },[])
			alert(
				`Login will be implemented! You entered: \n${users.email} \n${users.password}`
			);
			
		};
	
	
	
	
	return (
		<div className="submit-form">
			<h1>Students</h1>

				{/* <form elevation={3}>

  					{users.map(user=>(
						<form elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}}>
							Id:{user.id}<br/>
							Name:{user.email}<br/>
							password:{user.password}<br/>
							

						</form>))}
				</form> */}
			<div>
				<form class="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label >Email
					</label>
					<input
					type="text"
					className="form-control"
					id="Email"
					value={email}
					onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
						<label>Password</label>
						
						<input
						
						type="text"
						className="form-control"
						id="password"
						value={password}
						onChange={(e) => onChange(e)}
						/>
				</div>
				<div className="button">
				<button className="btn btn-success">Submit</button>
				
			</div>

				</form>			
			</div>	
			
			

		</div>
		
		
	);
}

// constructor(props) {
//     super(props);
//     this.state = {
//       emailOrUsername: "",
//       password: "",
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     testAPIService.getAllUsers()({
//       method: "password",
//       emailOrUsername: this.state.emailOrUsername,
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Email or username
//             <input
//               name="emailOrUsername"
//               type="text"
//               value={this.state.emailOrUsername}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             Password
//             <input
//               name="password"
//               type="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <button type="submit">Log in</button>
//         </form>
//       </div>
//     );
//   }

