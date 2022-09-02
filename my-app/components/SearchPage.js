import React, { useState } from 'react'
import StatusBar from './StatusBar'
import search from "../public/search.svg"
import Image from 'next/image'
import historyLogo from "../public/history-logo.svg"

const SearchPage = () => {
    const [prevSearch, setPrevSearch] = useState(["Surgical tape", 'Dialyzer','Ryles tube']);
    const [topSearch, setTopSearch] = useState(["Surgical tape", 'Dialyzer', 'Ryles tube']);
    const [text, setText] = useState('');

    const handleInput = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() != "") {
            setPrevSearch([...prevSearch, text.trim()])
            setText('')
        }
        
    }
    return (
        <>
            <StatusBar />
            <div style={{ display: "flex", border: "1px solid darkgrey", alignItems: "center", borderRadius: "6px", height: "40px", width: "90%", margin: "auto", marginTop: "80px", }}>
                <div style={{ marginTop: "5px", marginLeft: "10px", marginRight: "15px" }}>
                    <Image src={search} alt='search-logo'></Image></div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input onInput={handleInput} value={text} style={{ border: "none", outline: "none", width: "115%", fill: "none", background: "transparent", }} placeholder='Syringe, Centrifuge, Ventilator'></input>
                    </form>
                </div>
            </div>
            {prevSearch.length !=0 && <h6 style={{marginTop:"20px", marginLeft:"18px"}}>Previous Search</h6>}
            {prevSearch.length !=0 && prevSearch.map((item, id) => {
                return (
                    <div key={id} style={{marginLeft:"17px",display:"flex" }}><div style={{marginTop:"3px",marginRight:"5px"}}><Image src={historyLogo} alt="logo"></Image></div>{item }</div>
                )
            })
            }
            {topSearch.length != 0 && <h6 style={{ marginTop: "20px", marginLeft: "18px" }}>Top Search</h6>}
            {topSearch.length != 0 && topSearch.map((item, id) => {
                return (
                    <div key={id} style={{ marginLeft: "17px", display: "flex" }}><div style={{ marginTop: "3px", marginRight: "5px",fontWeight:"bold" }}></div>{item}</div>
                )
            })
            }
               

        </>
    )
}

export default SearchPage