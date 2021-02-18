import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    fetchUserInfo
} from "../../store/actions/user"


class User extends Component {
    componentDidMount() {
        this.props.fetchUserInfo()
    }

    render() {
        return ( this.props.user.map((user, index) => {
            return(
                <div key={index}>
                    <p><b>ID:</b> {user.id}</p>
                    <p><b>name:</b> {user.name}</p>
                    <p><b>email:</b> {user.email}</p>
                    <p><b>username:</b> {user.username}</p>
                    <p><b>website:</b> {user.website}</p>
                </div>
            )
        }))
        
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
      fetchUserInfo: () => dispatch(fetchUserInfo())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(User)
