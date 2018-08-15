import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers } from '../apiClient'

import User from './User'
import Intro from './Intro'
import Footer from './Footer'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }

        this.userClick = this.userClick.bind(this);
    }

    componentDidMount() {
        getUsers(this.props.auth.user.id)
            .then((res) => {
                this.setState({
                    users: res.users
                })
            })
        // err catching?
    }

    userClick(user) {
        this.setState({
            activeUser: user
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className='row first'>
                    <div className='twelve columns'>
                        <Link to='/teams'><button className="btn btn--stripe btn--radius centered"><h1>GENERATE TEAMS</h1></button></Link>
                    </div>
                </div>

                <hr />

                <div className='row'>
                    <div className='three columns'>
                        <ul>
                            {this.state.users.map((user) => {
                                return <li key={user.id} onClick={() => this.userClick(user)}><a href="#">{user.name}</a></li>
                            })}
                        </ul>
                    </div>

                    {
                        !this.state.activeUser &&
                        <div className='nine columns'>
                            <img className='centered gif' src='https://media.giphy.com/media/3eP9HDIMwJVvGTdmNA/giphy.gif' />
                        </div>
                    }

                    {
                        this.state.activeUser &&
                        <User user={this.state.activeUser} />
                    }


                </div>
                <hr />
                <Intro />
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ auth }) => { auth }

export default connect(mapStateToProps)(Home)
