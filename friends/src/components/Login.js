import React from 'react';



import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {

    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = event => {
        this.setState({
            ...this.state, credentials: {...this.state.credentials, [event.target.name]: event.target.value}
        });
    }

    login = event => {

        event.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            console.log(res);
            window.localStorage.setItem('token', res.data.payload);  
            this.props.history.push('/protected'); 
        
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
            <form onSubmit={this.login}>
                <label htmlFor='username'>
                <input name='username' id='username' type='text' placeholder='username' value={this.state.credentials.username} onChange={this.handleChange}/>
                </label>
    
                <label htmlFor='password'>
                <input name='password' id='password' type='text' placeholder='password' value={this.state.credentials.password} onChange={this.handleChange} />
                </label>
                <button type='submit'>submit</button>
            </form>
            </div>
        )
    }
    
}

export default Login;