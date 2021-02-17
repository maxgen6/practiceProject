import React, { Component } from 'react'
import axios from 'axios'
// import {connect} from 'react-redux'

class User extends Component {
    state = {
        user: []
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/users/1')  
            
            let user = [...this.state.user]
            if(response.data.length) {
                response.data.map(item => {
                    return user.push(item)
                })    
            } else {
                user.push(response.data)
            }            
            this.setState({ user: user })
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return ( this.state.user.map((user, index) => {
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

export default User
