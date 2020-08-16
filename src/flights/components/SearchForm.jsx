import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import  qs from 'qs';

const SearchForm = () => {
    const  { search }  = useLocation();
    const [value, setValue] = useState(filterText);
    const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;
   
    return (
        <>
            <h2 className="search-flights__title">SEARCH FLIGHT</h2>
            <form className="search-flights__form" onSubmit={()=> preventDefault()}>
                <i className='fa fa-search' ></i>
                <input 
                    className="search-flights__input"
                    value={value}
                    onChange={()=> setValue(event.target.value)}
                    name='search'
                    type="text" 
                    placeholder="Airline, destination or fligth #" 
                />
                <button 
                    className="search-flights__btn" 
                >
                    SEARCH
                </button>
            </form>
        </>
    )
}


export default SearchForm;















