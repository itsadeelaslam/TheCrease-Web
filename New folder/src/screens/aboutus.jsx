import React, { Component } from 'react';
import HeaderComponent from '../components/Headers/header.compoent';
import Footer from '../components/Footer/footer.component';
import { Modal, Button, Form } from "react-bootstrap";
class AboutUS extends Component {
    state = { 
        title: '',
        genre: '',
        numberInStock: '',
        dailyRentalRate: '',
        isOpen: false
        // pageSize = 4
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() { 
        return ( 
            <React.Fragment>
                
                <HeaderComponent />
                <div className="container" style={{textAlign: 'center'}}>
                    <center><h1>About us</h1></center>
                    <p> Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>

                    <Button className='btn btn-success btn-lg' onClick={this.openModal}>Contact Us</Button>
                </div>
                <Footer />

                <Modal show={this.state.isOpen} onHide={this.closeModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Property</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                            {/* onChange={this.titleHandler} */}
                                <Form.Control type="text" placeholder="Enter movie title"
                                    style={{ marginTop: '15px' }}
                                    name="title"
                                    // value={this.state.title}
                                    // onChange={(e)=>{this.setState({title : e.target.value})}}
                                    key="title"
                                />  
                                
                                <Form.Control
                                    type="text"
                                    placeholder="Enter movie genre"
                                    style={{ marginTop: '15px' }}
                                    name="genre"
                                    // value={this.state.genre}
                                    //onChange={(e)=>{this.setState({genre : e.target.value})}}
                                    key='genre'
                                />  
                                
                                <Form.Control
                                    type="text"
                                    placeholder="Enter available stock"
                                    style={{ marginTop: '15px' }} 
                                    name="stock"
                                    // value={this.state.numberInStock}
                                    // onChange={(e)=>{this.setState({numberInStock : e.target.value})}}
                                    key='stock'
                                /> 
                                
                                <Form.Control
                                    type="text"
                                    placeholder="Enter daily rental cost"
                                    style={{ marginTop: '15px' }}
                                    name="rate"
                                    // value={this.state.dailyRentalRate}
                                    // onChange={(e)=>{this.setState({dailyRentalRate : e.target.value})}}
                                    key='cost'
                                />
                                
                                <Button variant="secondary" type="submit" value="submit"
                                    // onClick={ this.handle }
                                    style={{ marginTop: '15px' }}>
                                    Save Changes
                                </Button>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
            </React.Fragment>
         );
    }
}
 
export default AboutUS;