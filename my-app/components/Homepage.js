import React from 'react'
import classes from "./Homepage.module.css";
import Image from 'next/image'
import { useRouter } from "next/router";
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
import search from "../public/search.svg"
import equipment from "../public/equipment.svg"
import consumable from "../public/consumable.svg"

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
    const router =  useRouter()
    const handleSearch = (event) => {
        event.preventDefault();
        router.push('/search')

    }
    return (<>
        <div style={{ margin: "20px" }}>
            <StatusBar />
            <div className={classes.status}>
                <h2 style={{ fontWeight: "bold" }}>Explore What <br /> Your Hospital Needs</h2>
                <span className={classes.bell}><Image src={bell} alt="image" /></span>
            </div>
            <div style={{ display: "flex", border: "1px solid darkgrey", alignItems:"center", borderRadius:"6px",height:"40px" }}>
                 <div style={{marginTop:"5px",marginLeft:"10px", marginRight:"15px"}}><Image src={search} alt='search-logo'></Image></div> 
                <div><input style={{ border: "none",outline:"none",fill:"none",background:"transparent", width:"115%" }}  onClick={handleSearch} placeholder='Syringe, Centrifuge, Ventilator'></input></div> 
            </div>
            <div className={classes.category}>
                <h3 style={{ fontWeight: "bold" }} >Categories</h3>
                <h6 style={{ color: "blue", marginTop: "8px" }}>See all <span><Image src={arrow} alt="image" /></span></h6>
            </div>
            <div className={classes.category}>
                <div style={{ width: "46%", border: "1px solid lightgrey", borderRadius: "5px" }}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "8px" }}>
                        <span>Equipments</span>
                        <div ><Image src={equipment} alt='image' /></div>
                    </div>
                </div>
                <div style={{ width: "46%", border: "1px solid lightgrey", borderRadius: "5px" }}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "8px" }}>
                        <span>Consumable</span>
                        <div><Image src={consumable} alt='image' /></div>
                    </div>
                </div>
            </div>
            <div className={classes.category}>
                <h3 style={{ fontWeight: "bold" }} >Products</h3>
                <h6 style={{ color: "blue", marginTop: "8px" }}>See all <span><Image src={arrow} alt="image" /></span></h6>
            </div>
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
                    <Image src={home} alt="image" />
                    <Image src={chat} alt="image" />
                    <Image src={cart} alt="image" />
                    <Image src={wishlist} alt="image" />
                    <Image src={profile} alt="image" />
                </Container>
            </Navbar>
     </>
    )
}

export default Homepage