import React, { Fragment } from 'react';
import { Carousel, Jumbotron, Row, Col } from 'react-bootstrap'

function Clock() {
    return (
        <Fragment>
            <div style={{ marginRight: '0%', marginBottom: '0%', marginLeft: '0%', }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyaoklHnG6haT57o2YqhVPbMqGz-nZbFbw8EMRLiVePiZWbfcq0oDMWAmxecwtbVL084&usqp=CAU" height="400px"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div style={{ textAlign: 'center', color: 'black'}}>

                                <h4><b>Introducing</b></h4>
                                <h1><b>TITAN</b></h1>
                                <h2><b>Clocks</b></h2>
                                <h3>Clocks For Every <br /> Momemt</h3>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://catinean.com/content/images/2016/03/time-wallpaper-23.jpg" height="400"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div style={{ textAlign: 'center' }}>

                                <h4><b>Introducing</b></h4>
                                <h1><b>TITAN</b></h1>
                                <h2><b>Clocks</b></h2>
                                <h3>Clocks For Every <br /> Momemt</h3>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwCGu4jDkJhqAN4H9rsQy-JfreDRKJsWoj0ZYG6p5fqgKK451smCGdxj-v3wMl5CaEZ8&usqp=CAU" height="400"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div style={{ textAlign: 'center', color: 'black'}}>

                                <h4><b>Introducing</b></h4>
                                <h1><b>TITAN</b></h1>
                                <h2><b>Clocks</b></h2>
                                <h3>Clocks For Every <br /> Momemt</h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Jumbotron style={{ backgroundColor: 'sandybrown', }}>
                <h3 style={{ textAlign: 'center', fontFamily: 'serif' }}><b>What Makes A Titan Clock</b></h3><br /><br />
                <Row>
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://www.titan.co.in/wps/wcm/connect/titan/f9468b01-69fe-4a40-9651-83ab7891b039/img%252Ficon-design.png?MOD=AJPERES&CVID=" />
                            <br /><br />

                            <h5><b>Design</b></h5>
                            <p>Modern or Classic, we have designs that add<br /> style to any space.</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://www.titan.co.in/wps/wcm/connect/titan/9f450d5b-bca8-4bf0-9566-01ece6eab97b/img%252Ficon-trust.png?MOD=AJPERES&CVID=" />
                            <br /><br />

                            <h5><b>Trust</b></h5>
                            <p>Our clocks are made with top-grade materials<br />and backed by a one year warranty</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://www.titan.co.in/wps/wcm/connect/titan/3ce5b48f-0587-4645-9045-8e3e19d36779/img%252Ficon-innovation.png?MOD=AJPERES&CVID=" />
                            <br /><br />

                            <h5><b>Innovation</b></h5>
                            <p>Our silent sweep tecnology puts a stop to non-<br />stop ticking</p>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron style={{ backgroundColor: 'black', color: 'white'}}>
                <Row>
                    <Col>
                        <h5>CUSTOMER SERVICE</h5>
                        <ul>
                            <li>Payment Options</li>
                            <li>Track Order</li><br/>
                            <li>Encircle program</li>

                        </ul>
                    </Col>
                    <Col>
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>1800-266-0123</li>
                            <li>customercare@titan.co.in</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>POLICIES</h5>
                        <ul>
                            <li>Returns & EXchanges</li>
                            <li>Cancellation</li><br/>
                            <li>Shipping</li>
                            <li>Delivery Information</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>ABOUT TITAN</h5>
                        <ul>
                            <li>Corporate</li><br/>
                            <li>Carrers</li>
                        </ul>
                    </Col>
                    {/* <Col></Col> */}
                </Row>
            </Jumbotron>
        </Fragment>
    )
}
export default Clock;