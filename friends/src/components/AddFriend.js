import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {

    state = {
        newFriend: {
            name: "",
            age: "",
            email: "",
            id: ""
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state, newFriend: {
                ...this.state.newFriend, [event.target.name]: event.target.value}});
    }

    postFriend = event => {
        event.preventDefault();
        const addMe = {...this.state.newFriend, id: Date.now()}
        axiosWithAuth()
            .post("/api/friends", addMe)
            .then(res => {
                console.log(res);
                this.props.setFriends(res.data);
                this.setState({newFriend: {
                    name: "",
                    age: "",
                    email: "",
                    id: ""
                }})
            })
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <h2>Add a New Friend</h2>
                <form onSubmit={this.postFriend}>
                    <input name="name" id="name" type="text" placeholder="name" value={this.state.newFriend.name} onChange={this.handleChange}/>
                    <input name="age" id="age" type="text" placeholder="age" value={this.state.newFriend.age} onChange={this.handleChange}/>
                    <input name="email" id="email" type="text" placeholder="email" value={this.state.newFriend.email} onChange={this.handleChange} />
                    <button type="submit">add friend</button>
                </form>
            </div>
        )
    }

   
}

export default AddFriend;