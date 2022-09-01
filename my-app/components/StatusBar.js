import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Clock from 'react-live-clock';
import network from "../public/cellular-connection.svg"
import wifi from "../public/wifi.svg"
import battery from "../public/battery.svg"
import classes from "./StatusBar.module.css"
import Image from 'next/image'

const StatusBar = () => {
  return (
      <Navbar fixed='top' className={classes.bar}>
          <div style={{ fontWeight: "bold" }}>
              <Clock
              format={'h:mm'}
              style={{ fontSize: '1em' }}
                  ticking={true} />
          </div>
          <div>
              <span className={classes.spanMargin}><Image src={network} alt='date' /></span>
              <span className={classes.spanMargin}><Image src={wifi} alt='date' /></span>
              <span className={classes.spanMargin}><Image src={battery} alt='date' /></span>
          </div>
      </Navbar>
  )
}

export default StatusBar