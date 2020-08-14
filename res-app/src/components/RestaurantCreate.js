import React, { Component } from 'react';
import Navbarmenu from './Navbarmenu'
class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null
        }
    }
    create()
    {
       fetch("http://localhost:3000/restaurant",{
        method:"Post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((response)=>{
            alert("restaurant has been added")
        }

        )
    })
    }
    render() {
        return (
            <div>
                <Navbarmenu />
               <h1> RestaurantCreate </h1> 
               <div>
                    <input onChange={(e)=>{this.setState({name:e.target.value})}}
                     placeholder="restaurant name"/><br /><br/>
                      <input onChange={(e)=>{this.setState({email:e.target.value})}}
                     placeholder="restaurant email"/><br /><br/>
                      <input onChange={(e)=>{this.setState({rating:e.target.value})}}
                     placeholder="restaurant rating"/><br /><br/>
                      <input onChange={(e)=>{this.setState({address:e.target.value})}}
                     placeholder="restaurant address"/><br /><br/>
                      <button onClick={()=>{this.create()}}>Add restaurant</button>
                   </div>
            </div>
        );
    }
}

export default RestaurantCreate;