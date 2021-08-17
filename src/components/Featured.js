import {React,useState} from 'react'
import ReactPagenate from 'react-paginate'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import './Featured.css'
import Card from '../components/Card';

import properties from '../data'
function Featured() {
    const [property, setProperty] = useState(properties.slice(0, 100))
    const [pageNumber, setPageNumber] = useState(0)
    const propertyPerPage = 8;
    const pagesVisited = pageNumber * propertyPerPage;

    const displayProperties = property.slice(pagesVisited, pagesVisited + propertyPerPage).map((property) => {
        return <Card id={property.id} name={property.name} city={property.city} image={property.image} price={property.price} />
    })
    const pageCount = Math.ceil(property.length / propertyPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <div className="featured">
            <div className="header">
                <h4>Featured Rentals</h4>
                <img src="/assets/customercare.png" alt="" />
            </div>
            <div className="featured-card">
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
            <div className="horzontal-line"></div>
            <div className="download-pointer">
                <img src="/assets/black-img.png" alt="" />
                <div className="download">
                    <h2>Download our Mobile Application for free</h2>
                    <div>
                        <img src="/assets/google-play.png" alt="google play" />
                        <img src="/assets/apple-store.png" alt="apple store" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
