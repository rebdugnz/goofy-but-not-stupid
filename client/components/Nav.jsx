import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/logout'

const Nav = (props) => (
    <div className='row'>
        <div className='twelve columns'>
            {props.auth.isAuthenticated 
                ? document.location == '/#/profile' 
                    ? <p className='centered'>Hi {props.auth.user.username} - 
                        <Link to='/'>home</Link>, <Link onClick={props.dispatch(logoutUser())}>logout</Link>
                    </p>
                    : <p className='centered'>Hi {props.auth.user.username} - 
                        <Link to='/profile'>edit profile</Link>, <Link onClick={props.dispatch(logoutUser())}>logout</Link>
                    </p>
                : <Redirect to='/login'/>
            }
        </div>
    </div>
)

const mapStateToProps = ({auth}) => {auth}
export default connect(mapStateToProps)(Nav)