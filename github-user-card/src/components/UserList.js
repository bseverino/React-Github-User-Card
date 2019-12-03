import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import UserCard from './UserCard';

const useStyles = makeStyles({
    userList: {
        display: 'flex',
        alignItems: 'stretch'
    }
});

function UserList(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.userList} container spacing={3}>
            {props.users.map(user => (
                <UserCard {...props} key={user.id} user={user} />
            ))}
        </Grid>
    );
};

export default UserList;