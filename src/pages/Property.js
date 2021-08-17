import {React,useState} from 'react'
import { GrLocation } from 'react-icons/gr'
import { ImPhone } from 'react-icons/im'
import { BsFillBookmarkFill } from 'react-icons/bs'
import {FiMessageCircle} from 'react-icons/fi'
import './Property.css'
import NavbarUser from '../components/NavbarUser'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

function Property() {
    const [isShowMore,setIsShowMore] = useState(false)
    return (
        <div >
            <NavBar />
            <div className="property">
               
                <div className="head">
                    <p>Semi-detached Duplex</p>
                    <p>N900,000</p>
                </div>
                <p><span><GrLocation/></span>Asaba</p>
                <div className="property-agent">
                    <img src="/assets/product-img1.jpg" alt="" />
                    <div>
                    <div className="user-card">
                        <p id="mark"><BsFillBookmarkFill /></p>
                        <div className="user-details">
                            <div>
                        <img src="/assets/user-image.jpg" alt="" />
                        <p id="user-name">Ifeanyi Arthur</p>
                                <p id="user-role">Real Estate Agent</p>
                                <div className="contact-agnt">
                                     <button><span><ImPhone /></span> Phone</button>
                                    <button><span><FiMessageCircle/></span> Message</button>
                                </div>
                       
                        </div>
                        </div>
                        
                    </div>
                    <div >
                        <button className="contact-btn" > Request Inspect</button>
                        <button className="contact-btn">Pay Now </button>
                        </div>
                        </div>
                </div>
                <div className="img-group">
                    <img src="/assets/img1.jpg" alt="" />
                    <img src="/assets/img2.jpg" alt="" />
                    <img src="/assets/img3.jpg" alt="" />
                </div>
                <div className="property-desc">
                    <p>General Information</p>
                    <div className="gen-description">
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius ut, modi harum repellendus tempore quia quibusdam soluta, atque pariatur adipisci officiis quaerat animi architecto? Officiis inventore itaque eos consequuntur!</p>
                    </div>
                    <div className="gen-description" >
                        <h3>The Neighborhood</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, dolorum ab ipsam quasi laborum maiores vitae blanditiis saepe quibusdam reprehenderit eligendi, doloribus consectetur repellendus exercitationem? Magnam dicta, reiciendis inventore, enim tempore nulla qui, dolore voluptate aliquid veritatis unde? Quam  dolore libero ex consequatur persplaflflas;farofsafklasflasfsalfalsfksdgasdgaiciatis maxime doloribus repellendus tempora aliquid obcaecati sit ducimus fuga vero, tempore eaque reprehenderit recusandae. Illo ullam deleniti necessitatibus repellendus laudantium dolorem incidunt.</p>

                    </div>
                </div>
                <div className="location-desc">
                    <p>Location Information</p>
                    <img src="/assets/map.jpg" alt="map" />
                </div>
           </div>
           
           <Footer /> 
        </div>
    )
}

export default Property
