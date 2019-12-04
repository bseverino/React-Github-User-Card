import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        width: 350,
        height: 50,
        padding: 20,
        margin: '0 auto 20px',
        background: '#FFF',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        borderRadius: 5
    }
});

function SearchForm(props) {
    const classes = useStyles();

    return (
        <form className={classes.form} onSubmit={props.changeUser}>
            <TextField value={props.searchTerm} id='searchTerm' label='Username' onChange={props.handleSearch} />
            <Button type='submit' variant='contained' color='primary'>Search User</Button>
        </form>
    );
};

export default SearchForm;