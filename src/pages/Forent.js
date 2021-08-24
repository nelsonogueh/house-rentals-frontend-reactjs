import {React,useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import './Forent.css';
import ReactPagenate from 'react-paginate'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import properties from '../data'
import Card from '../components/Card'
function Forent() {
           const [property, setProperty] = useState(properties.slice(0, 100))
    const [pageNumber, setPageNumber] = useState(0)
    const propertyPerPage = 16;
    const pagesVisited = pageNumber * propertyPerPage;

    const displayProperties = property.slice(pagesVisited, pagesVisited + propertyPerPage).map((property) => {
        return <Card id={property.id} name={property.name} city={property.city} image={property.image} price={property.price} />
    })
    const pageCount = Math.ceil(property.length / propertyPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <div>
        
            <div className="forRent">
                <div className="search-bar">
                    <select name="" id="">
                        <option value="">Property Type</option>
                    </select>
                     <select name="" id="">
                        <option value="">Location</option>
                    </select>
                     <select name="" id="">
                        <option value="">No. of Bedrooms</option>
                    </select>
                     <select name="" id="">
                        <option value="">Amount Range</option>
                    </select>
                    
                    <input type="text" />
                <span id="search_logo2"><FiSearch /></span>
            
                 
                </div>
                
            </div>
            <div className="property_collection">
                {displayProperties}
                
            </div>
            <ReactPagenate
                    previousLabel={<span><IoIosArrowBack/></span>}
                    nextLabel={<span><IoIosArrowForward/></span>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                activeClassName={"paginationActive"} />
            <Footer />
        </div>
    )
}

export default Forent

