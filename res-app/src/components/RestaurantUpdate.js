import React, { Component } from 'react';
import Navbarmenu from './Navbarmenu'
class RestaurantUpdate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null,
           id:null
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
              console.warn(result)
                this.setState({
                name:result.name,
                 email:result.email ,
                 rating:result.rating,
                address:result.address ,
                id:result.id
             }) 
            })
        })
    }
    update()
    {
        fetch("http://localhost:3000/restaurant/"+this.state.id ,{
            method:"Put",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                alert("restaurant has been updated")
            }
    
            )
        })
    }
    render() {
      
        return (
            <div>
                <Navbarmenu />
                <h1> RestaurantUpdate </h1>
                <div>
                    <input onChange={(e)=>{this.setState({name:e.target.value})}}
                     placeholder="restaurant name" value={this.state.name}/><br /><br/>
                      <input onChange={(e)=>{this.setState({email:e.target.value})}}
                     placeholder="restaurant email" value={this.state.email}/><br /><br/>
                      <input onChange={(e)=>{this.setState({rating:e.target.value})}}
                     placeholder="restaurant rating" value={this.state.rating}/><br /><br/>
                      <input onChange={(e)=>{this.setState({address:e.target.value})}}
                     placeholder="restaurant address" value={this.state.address}/><br /><br/>
                      <button onClick={()=>{this.update()}}>update restaurant</button>
                   </div>
            </div>
        );
    }
}

export default RestaurantUpdate;