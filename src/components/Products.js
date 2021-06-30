import React, { useContext } from 'react';
import { DataContext } from './DataProvider';
import { Link } from 'react-router-dom';
import { Button, Card, Badge, Alert } from 'react-bootstrap';


export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart
  // console.log(products);

  //console.log(useContext(DataContext).products)

  return (
    <div>
      <div style={{ marginRight: '0%', marginBottom: '0%', marginLeft: '-30%' }}>
        <Card style={{ width: '70rem' }}>
          <Card.Img variant="top" src="https://www.titan.co.in/wps/wcm/connect/titan/44abece3-d4c0-4547-a9e2-16ad124ac2e0/desktop/TI_NoCostEMI_1000x200.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-44abece3-d4c0-4547-a9e2-16ad124ac2e0-desktop-nn0cm2O" />
         
        </Card>
      </div>
      <div className="products">
        {
          products.map(product => (
            <div className="card" key={product._id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.images[0]} alt="" />
              </Link>
              <div className="box">
                <center>
                <p><b>{product.description}</b></p>
                
                <h4>${product.price}</h4>
                
                <h6 title={product.title}>
                  <Link to={`/products/${product._id}`}>{product.title}</Link>
                </h6>
                
                <Alert variant="success" style={{ height: '65px' }}>{product.content}</Alert>
                </center>
                {/* <p>{product.content}</p> */}
                {/* <p>{product.description}</p>
                <h4>${product.price}</h4> */}
                {/* <Button variant="dark" onClick={() => addCart(product._id)}>Add to cart</Button> */}
              </div>


              {/* // <Card style={{ width: '22rem' }}>
          //   <Card.Img variant="top" src={product.images[0]} />
          //   <Card.Body>
          //     <Card.Title>{product.title}</Card.Title>
          //     <Link to={`/products/${product._id}`}>{product.title}</Link>
          //     <Card.Text>
          //       <p>{product.description}</p>
          //       <h4>{product.price}</h4>
          //     </Card.Text>
          //   </Card.Body>

          //   <Card.Body>
          //     <Button variant="dark" block>Add to cart</Button>
          //   </Card.Body>
          // </Card> */}
            </div>

          ))
        }
      </div>
    </div>
  )
}