import React, { Component } from 'react'
import JobsList from '../components/JobsList'

class JobsPage extends Component {
	state = {
		error: null,
		jobs: null
	}


	componentDidMount() {
		// Asynchronous
		const username = this.props.username
		console.log(username)
		fetch("/driverjobs/"+username)
		.then(res => res.json())
		.then(jobs => {
			this.setState({jobs})
		})
		.catch(error => {
			this.setState({error})
		})
	}

	render() {
		const { error, jobs } = this.state
		return (
			<div>

				<h1>ALL JOBS</h1>
				{ !!error && <p>{ error.message }</p> }
				{
					!!jobs ? (
						<JobsList items={ jobs } />
					) : (
						'Loading Jobs...'
					)
				}


			</div>
		)
	}
}

export default JobsPage
