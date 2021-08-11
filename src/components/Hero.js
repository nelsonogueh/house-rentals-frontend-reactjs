import {React,useState} from 'react'
import { BiSearch } from 'react-icons/bi'
import Select from 'react-select'

import './Hero.css'




function Hero() {
    const [selected0, setSelected0] = useState('')
    const [selected1, setSelected1] = useState('')
    const [selected2, setSelected2] = useState('')
    const [value,setValue] = useState('')
    function handleChange0(e) {
        let { options, selectedIndex } = e.target
        setSelected0(options[selectedIndex].text)
        selectedIndex = 0;
    }
     function handleChange1(e) {
        let { options, selectedIndex } = e.target
        setSelected1(options[selectedIndex].text)
        selectedIndex = 0;
    }
     function handleChange2(e) {
        let { options, selectedIndex } = e.target
        setSelected2(options[selectedIndex].text)
        selectedIndex = 0;
    }
    return (
        <div className="hero">
                <img src="/assets/hero.jpg" alt="hero" />
            <div className="hero-search">
                <div className="search search-0">
                    <div className="search-selector">
                        <span>Location</span>
                      
                    <select name="" id="selector" value={value} onChange={handleChange0} >
                        <option selected disabled value=""></option>
                        <option value="">Asaba</option>
                        <option value="">Asaba</option>
                    </select>
                    </div>
                    <p>{ selected0}</p>
                </div>
                <div className="ver-line1"></div>
                   <div className="search search-1">
                    <div className="search-selector">
                     <span>Property Type</span>
                    <select name="" id="selector" value={value} onChange={handleChange1} >
                        <option selected disabled value=""></option>
                        <option value="">Bungalow</option>
                        <option value="">Duplex</option>
                    </select>
                    </div>
                    <p>{ selected1}</p>
                </div>
                <div className="ver-line2"></div>
                   <div className="search search-2">
                    <div className="search-selector">
                     <span>Max Price</span>
                        <select name="" id="selector" value={value} onChange={handleChange2} >
                           <option selected disabled value=""></option> 
                        <option value="">N 8,000,000</option>
                        <option value="">N 10,000,000</option>
                    </select>
                    </div>
                    <p>{ selected2}</p>
                    
                </div>
                <button ><BiSearch /></button>
            </div>
        </div>
    )
}

export default Hero
