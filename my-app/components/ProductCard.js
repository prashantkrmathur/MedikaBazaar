import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useRouter } from "next/router";
import Image from 'next/image';
import wishlist from "../public/wishlistSmall.svg"

const ProductCard = (props) => {
    const router = useRouter();
    const { name, image, price } = props;
    const [showDetail, setShowDetail] = useState(false);
    
    const handleClick = (event) => {
       event.preventDefault();
       router.push('/56')
    }
    return (
        <div style={{ width: "46%",margin:"5px" }} onClick={handleClick}>
            <Card>
                <Card.Body>
                    <div style={{ overflow: "hidden",position:"relative" }}>
                        <div style={{position:"absolute",zIndex:"9",right:"-10px",width:"50px"}} ><Image src={wishlist} alt='' width='60px' height="60px" /></div>
                        <div ><Image width="500" height="500" src={image} alt='image' /></div>
                    </div>
                    <div style={{ color:"#adb5bd"}}>{name}</div>
                    <div style={{fontWeight:"bold"}}>${price}</div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard