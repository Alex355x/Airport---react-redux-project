import React, { useState } from "react";


const SearchForm = () => {
    return (
        <>
            <h2 className="search-flights__title">SEARCH FLIGHT</h2>
            <form className="search-flights__form" >
                <i className='fa fa-search' ></i>

                <input 
                    className="search-flights__input" 
                    name='search' 
                    type="text" 
                    placeholder="Airline, destination or fligth #"
                    
                />
                <button className="search-flights__btn" 
                onSubmit={(e) => {e.preventDefault()}}
                >SEARCH</button>
            </form>
        </>
    )
}

export default SearchForm;





// import { useHistory, useParams, useLocation } from "react-router-dom";
// onChange={({target}) => setInput(target.value)}
                    // value={input.value}

                    // onSubmit={(e) => {e.preventDefault()}}


 // const [input, setInput] = useState("");
    // const  { search }  = useLocation();
    // const history = useHistory();
    
    // console.log(search)