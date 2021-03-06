import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/login'
import { Link } from 'react-router-dom'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.updateDetails = this.updateDetails.bind(this)
		this.submit = this.submit.bind(this)
	}

	updateDetails(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	submit(e) {
		e.preventDefault()
		let creds = this.state
		this.props.dispatch(loginUser(creds))
	}

	render() {
		const { auth } = this.props
		return (
			<div className='columns is-centered'>
				<div className='column is-5'>
					<form className='form'>
						<h1 className="title is-1 has-text-centered">LOGIN</h1>
						{auth.errorMessage
							&& <p className="has-text-centered">{auth.errorMessage}</p>}
						<hr />

						<label className='label'>Username
              				<input required className="input" placeholder="Username" type="text" name="username" onChange={this.updateDetails} />
						</label>

						<label className='label'>Password
              				<input required className="input" placeholder="Password" type="password" name="password" onChange={this.updateDetails} />
						</label>
						<p className='has-text-centered'>Don't have an account? <Link to='/register'>Create an account here</Link></p>

						<hr />
						<button className='button btn btn--stripe btn--radius centered is-fullwidth' onClick={this.submit}>LOGIN</button>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(Login)