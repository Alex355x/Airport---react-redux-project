import React from "react";


const SearchForm = () => {
    return (
        <>
            <h2 className="search-flights__title">SEARCH FLIGHT</h2>
            <form className="search-flights__form">
                    <i className='fa fa-search' ></i>
                    <input className="search-flights__input" name='search' type="text" placeholder="Airline, destination or fligth #"/>
                    <button className="search-flights__btn" type="submit">SEARCH</button>
            </form>
        </>
    )
}
export default SearchForm;