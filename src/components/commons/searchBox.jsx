import React, { Component } from 'react';

class SearchBox extends Component {
    state = {  } 
    render() { 
        return ( 
            <form action="" className='form-inline d-inline' >
                <input className='form-control w-25' type="search" placeholder="Search..." />
                <button className='btn btn-outline-priamry border-primary text-primary'><i className='fas fa-search'></i> </button>
            </form>
        );
    }
}
 
export default SearchBox;