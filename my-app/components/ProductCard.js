import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useRouter } from "next/router";
import Image from 'next/image';

const ProductCard = (props) => {
    const router = useRouter();
    const { name, image, price } = props;
    const [showDetail, setShowDetail] = useState(false);
    
    const handleClick = (event) => {
       router.push('/56')
    }
    return (
        <div style={{ width: "46%",margin:"5px" }} onClick={handleClick}>
            <Card>
                <Card.Body>
                    <div style={{overflow:"hidden"}}><Image width="500" height="500" src={image} alt='image'/></div>
                    <p>{name}</p>
                    <p style={{fontWeight:"bold"}}>${price}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard