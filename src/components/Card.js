import React from 'react'
import './Card.css';
import { GrLocation } from 'react-icons/gr'
import {FaHeart} from 'react-icons/fa'
import {FiShare2} from 'react-icons/fi'


function Card() {
    return (
        <div className="card">
            <img src="/assets/featured-img.jpg" alt="" />
            <div>
                <h3 className="title">Semi-Detached Duplex</h3>
                <div className="card-details"><span><GrLocation /></span>
                    <p className="location">Asaba</p>
                    <div className="vert-line"></div>
                  <p className="price">N900,000</p>  
                </div>
                <div className="engage-bar">
                    <span><FaHeart /></span>
                    <span><FiShare2 /></span>
                    <button>View</button>
                </div>
            </div>
        </div>
    )
}

export default Card
