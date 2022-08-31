import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

const ProductCard = (props) => {
    const { name, image, price } = props;
    const [showDetail, setShowDetail] = useState(false);
    
    const handleClick = (event) => {
        event.preventDefault();
        setShowDetail(true);
    }
    return (
        <div style={{ width: "46%",margin:"5px" }} onClick={handleClick}>
            <Card>
                <Card.Body>
                    <div style={{overflow:"hidden"}}><img src={image} alt='image'/></div>
                    <p>{name}</p>
                    <p style={{fontWeight:"bold"}}>${price}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard