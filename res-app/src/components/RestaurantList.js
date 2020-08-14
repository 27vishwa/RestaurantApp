import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage, faEdit ,faTrash} from '@fortawesome/free-solid-svg-icons'
import Navbarmenu from './Navbarmenu'
class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getdata()
       
    }
    getdata()
    {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {

                this.setState({ list: result })
            })
        })
    }
    delete(id)
    {
        fetch("http://localhost:3000/restaurant/"+id ,{
            method:"DELETE",
          
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                alert("restaurant has been Deleted")
                this.getdata()
            }
    
            )
        })
    }
    render() {

        return (
            <div>
                <Navbarmenu />
                <h1>  RestaurantList </h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>S-No</th>
                                        <th> Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr key={i}>
                                                <td>{i}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <Link to={"/Update/" + item.id}><FontAwesomeIcon icon={faEdit} /></Link>

                                                    <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p> please wait .....</p>
                }
            </div>
        );
    }
}

export default RestaurantList;