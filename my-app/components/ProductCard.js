import React from 'react'
import Card from 'react-bootstrap/Card';

const ProductCard = (props) => {
    const { name, image, price } = props;
    console.log(image)
    return (
        <div style={{ width: "46%",margin:"5px" }}>
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