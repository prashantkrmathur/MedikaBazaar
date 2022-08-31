import React from 'react'
import classes from "./Homepage.module.css";
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import bell from "../public/bell-icon.svg"
import arrow from "../public/arrow.svg"
import home from "../public/home.svg"
import chat from "../public/chat.svg"
import cart from "../public/cart.svg"
import wishlist from "../public/wishlist.svg"
import profile from "../public/profile.svg";

import ProductCard from './ProductCard';
import StatusBar from './StatusBar';

const products = [
    {
        id: 1,
        name: 'Ivoclar Vivadent',
        amount: 599,
        image: 'https://raw.githubusercontent.com/prashantkrmathur/images/main/svgtopng/item_1.png'
    },
    {
        id: 2,
        name: 'Wall mount X Ray',
        amount: 999,
        image: `https://raw.githubusercontent.com/prashantkrmathur/images/main/svgtopng/item_2.png`
    },
    {
        id: 3,
        name: 'Wall mount X Ray',
        amount: 999,
        image: `https://raw.githubusercontent.com/prashantkrmathur/images/main/svgtopng/item_2.png`
    },
    {
        id: 4,
        name: 'Being Foshan Contra...',
        amount: 599,
        image: `https://raw.githubusercontent.com/prashantkrmathur/images/main/svgtopng/item_4.png`
    },

]

const Homepage = () => {
    return (
        <div style={{ margin: "20px" }}>
            <StatusBar/>
            <div className={classes.status}>
                <h2 style={{ fontWeight: "bold" }}>Explore What <br /> Your Hospital Needs</h2>
                <span className={classes.bell}><Image src={bell} /></span>
            </div>
            <div>
                <InputGroup className={classes.input}>
                    <Form.Control placeholder='Syringe, Centrifuge, Ventilator' />
                </InputGroup>
            </div>
            <div className={classes.category}>
                <h3 style={{ fontWeight: "bold" }} >Categories</h3>
                <h6 style={{ color: "blue", marginTop: "8px" }}>See all <span><Image src={arrow} /></span></h6>
            </div>
            <div className={classes.category}>
                <Card style={{ width: "45%" }}>
                    <Card.Body><span>Equipments</span></Card.Body>
                </Card>
                <Card style={{ width: "45%" }}>
                    <Card.Body>Consumable</Card.Body>
                </Card>
            </div>
            <div className={classes.category}>
                <h3 style={{ fontWeight: "bold" }} >Products</h3>
                <h6 style={{ color: "blue", marginTop: "8px" }}>See all <span><Image src={arrow} /></span></h6>
            </div>
            <div className={classes.products}>
                {products.map((item) => {
                    return (
                        <ProductCard
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.amount}
                        />
                    )
                })}
            </div>
            <Navbar fixed='bottom' className={classes.bottom}>
                <Container >
                    <Image src={home} />
                    <Image src={chat} />
                    <Image src={cart} />
                    <Image src={wishlist} />
                    <Image src={profile} />
                </Container>
            </Navbar>

        </div>
    )
}

export default Homepage