import React from 'react'
import './Backdrop.css'

function Backdrop({showUp,showIn,clickevent}) {
    return (
        
          <div className={showUp||showIn?"backdrop show":"backdrop"} onClick={clickevent}></div>   
        
    )
}

export default Backdrop
