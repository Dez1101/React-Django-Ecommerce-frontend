import React, {useState, useEffect} from 'react'
import { Link, LInk } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function ProductScreen({match}) {

    const [product, setProduct] = useState([])

    useEffect (() => {

        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }

        fetchProduct()
        
    }, [])

    return (
        <div>
            <Link to ='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4>Description:  {product.description}</h4>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews}`} reviews color={'#f8e825'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4>R{product.price}</h4>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>R{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>


                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            
                        </ListGroup>
                        
                        
                    </Card>
                    <ListGroup>
                        <ListGroup.Item>
                                <Button disabled={product.countInStock === 0} className=' btn-block bg-dark w-100 btn-lg' type = 'button'>ADD TO CART</Button>
                            </ListGroup.Item>
                        </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
