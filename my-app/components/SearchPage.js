import React, { useState } from 'react'
import StatusBar from './StatusBar'
import search from "../public/search.svg"
import Image from 'next/image'

const SearchPage = () => {
    const [prevSearch, setPrevSearch] = useState([]);
    const [topSearch, setTopSearch] = useState([]);
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
                        <input onInput={handleInput} value={text} style={{ border: "none", outline: "none", width: "115%" }} placeholder='Syringe, Centrifuge, Ventilator'></input>
                    </form>
                </div>
            </div>

                {prevSearch.length && <h6>Previous Search</h6>}
                {prevSearch.length && prevSearch.map((item,id)=> {
                    return <p key={id}>{item }</p>
                   })
                }

        </>
    )
}

export default SearchPage