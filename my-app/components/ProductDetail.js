import React, { Fragment, useState } from 'react'
import StatusBar from './StatusBar'
import Card from 'react-bootstrap/Card'
import minus from "../public/minus.svg"
import plus from "../public/plus.svg"
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import review from "../public/review.svg"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import wishlistIcon from "../public/wishlistIcon.svg"

const ProductDetail = (props) => {
  const { image, name } = props;
  const [counter, setCounter] = useState(1)
  const [color, setColor] = useState('Red');
  const [size, setSize] = useState('XL');
  const [intensity, setIntensity] = useState('40cd');
  const [selectDes, setSelectDes] = useState(true);
  const [selectMat, setSelectMat] = useState(false);
  const [selectItem, setSelectItem] = useState(false);

  const handleDescriptionBtn = (event) => {
    event.preventDefault();
    setSelectMat(false);
    setSelectDes(true)
  }
  const handleMaterialBtn = (event) => {
    event.preventDefault();
    setSelectDes(false)
    setSelectMat(true)
  }

  return (
    <Fragment>
      <StatusBar />
      <div>
        <img src='https://raw.githubusercontent.com/prashantkrmathur/images/main/image.png'></img>
      </div>
      <Card>
        <Card.Body>
          <h2>Ivoclar Vivadent Bluephase</h2>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <span style={{ fontWeight: "bold" }}>$599</span>
            <div style={{display:"flex"}}><div onClick={() => counter !=1 && setCounter(counter-1)}><Image src={minus} /></div> <div style={{marginLeft:"3px", marginRight:"3px"}}>{counter}</div> <div onClick={()=> setCounter(counter+1)}><Image src={plus } /></div></div>
          </div>
        </Card.Body>
        <h5 style={{ width: "93%", margin: "auto", marginBottom:"15px" }}>Choose Variant</h5>
        <Card.Body style={{width:"95%", margin:"auto", backgroundColor:"whitesmoke"}}>
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <div><span style={{ fontWeight: "bold" }}>Color : </span><span style={{ fontWeight: "bold",color:"blue" }}>{color}</span></div>
            <div><span style={{ fontWeight: "bold" }}>Size : </span><span style={{ fontWeight: "bold", color: "blue" }}>{size}</span></div>
            <div><span style={{ fontWeight: "bold" }}>Intensity : </span><span style={{ fontWeight: "bold", color: "blue" }}>{intensity}</span></div>
         </div>
        </Card.Body>
        <div style={{margin:"15px"}}>
          <Button style={{marginRight:"15px"}} variant={selectDes ? "primary" : "light"} onClick={handleDescriptionBtn}>Discription</Button>
          <Button variant={selectMat ? "primary" : "light"} onClick={handleMaterialBtn}>Material  </Button>
        </div>
        {selectDes && <p style={{width:"90%", color:"darkgrey", margin:"auto", marginBottom:"20px"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>}
        {selectMat && <p style={{ width: "90%", color: "darkgrey", margin: "auto", marginBottom:"20px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>}
        <div style={{paddingBottom:"50px", width:"90%", margin:"auto"}}><Image src={review}></Image></div>
      </Card>
      <Navbar fixed='bottom' style={{ width: "95%", margin: "auto",backgroundColor:"white", borderTop:"1px solid #adb5bd"}}>
        <Container >
          <Image src={wishlistIcon} />
          <Button style={{ width: "80%" }} variant={!selectItem ? "primary" : "secondary"} onClick={(event) => { event.preventDefault(); setSelectItem(!selectItem) }}>{!selectItem ? "Add to Bag" : "Added to the Bag" }</Button>
        </Container>
      </Navbar>


    </Fragment>
  )
}

export default ProductDetail