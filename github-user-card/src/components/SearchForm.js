import React from 'react';

function SearchForm(props) {
    return (
        <form onSubmit={props.changeUser}>
            <input type='text' value={props.searchTerm} name='searchTerm' onChange={props.handleSearch} />
            <button>Search User</button>
        </form>
    );
};

export default SearchForm;