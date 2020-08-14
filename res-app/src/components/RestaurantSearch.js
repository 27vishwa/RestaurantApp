import React, { Component } from 'react';
import { Table , Form , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit ,faTrash} from '@fortawesome/free-solid-svg-icons'
import Navbarmenu from './Navbarmenu'
class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData:false,
            lastkey : null,
        }
    }
    search(key) {
        console.warn(key)
        this.setState({lastkey:key})
        fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
            data.json().then((res) => {
                console.warn("res", res)
                if(res.length>0)
                {
                    this.setState({searchData:res,noData:false})
                }
                else{
                this.setState({noData : true , searchData:null })
                }
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
                this.search(this.state.lastkey)
            }
    
            )
        })
    }
    render() {
        return (
            <Container>
                <Navbarmenu />
                <h1>RestaurantSearch</h1>
                 <Form.Control type="text" onChange={(e) => this.search(e.target.value)} placeholder="Search Restaurant" />
                <div>
                    {
                    this.state.searchData?
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
                        this.state.searchData.map((item) =>
                        <tr>
                        <td>{item.id}</td>
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
                    :""
                    }
                    {
                        this.state.noData?<h3>No Data Found </h3> :""
                    }
                 </div>
            </Container>
        );
    }
}

export default RestaurantSearch;