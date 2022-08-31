import React, { Fragment } from 'react'
import StatusBar from './StatusBar'
import Image from 'next/image';

const ProductDetail = (props) => {
    const { image, name } = props;
  return (
    <Fragment>
      <StatusBar />
      <div>
        <img src='https://raw.githubusercontent.com/prashantkrmathur/images/main/image.png'></img>
      </div>
      </Fragment>
  )
}

export default ProductDetail