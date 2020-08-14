import React, { Component } from 'react';
import Navbarmenu from './Navbarmenu'
import { Button } from 'react-bootstrap'
class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
    }
    login()
    {
        console.warn(this.state)
      
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((res) => {
                console.warn("res", res)
                if (res.length > 0)
                {
                    localStorage.setItem('login',JSON.stringify(res))
                
                }
                else
                {
                    alert("please check username or password")
                }
            })
        })
    }
    render() {
        return (
            <div>
                <Navbarmenu />
                <input type="text" placeholder="Name" name="user" onChange={(e)=>{this.setState({name:e.target.value})}} />
                <br /><br />
                <input type="password" placeholder="Password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}} />
                <br /> <br />
                <Button onClick={()=>{this.login()}}>Login</Button>
            </div>
        );
    }
}

export default Login;