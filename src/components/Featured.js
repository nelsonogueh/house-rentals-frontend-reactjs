import React from 'react'
import './Featured.css'
import Card from '../components/Card';
function Featured() {
    return (
        <div className="featured">
            <div className="header">
                <h4>Featured Rentals</h4>
                <img src="/assets/customercare.png" alt="" />
            </div>
            <div className="featured-card">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            

            
        </div>
    )
}

export default Featured
