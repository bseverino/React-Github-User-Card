import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardActions, IconButton, Collapse, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      minHeight: 600,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    avatar: {
        width: '100%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));

function UserCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Card className={classes.card}>
                <CardContent>
                    <img className={classes.avatar} src={props.user.avatar_url} alt={`${props.user.login}'s avatar`} />
                    <Typography variant='h5' component='h2'>
                        {props.user.name}
                    </Typography>
                    <Typography variant='h6' component='h3'>
                        {props.user.login}
                    </Typography>
                    <Typography paragraph>
                        {props.user.bio}
                    </Typography>
                </CardContent>
                <div>
                    <CardActions disableSpacing>
                        <Typography variant='subtitle2'>
                            More info
                        </Typography>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <CardContent>
                            <Typography variant='body2'>
                                Location: {props.user.location ? props.user.location : 'No location given'}
                            </Typography>
                            <Typography variant='body2'>
                                Followers: {props.user.followers}
                            </Typography>
                            <Typography variant='body2'>
                                Following: {props.user.following}
                            </Typography>
                            <Typography variant='body2'>
                                Website: {props.user.blog ? <a href={props.user.blog}>{props.user.blog}</a> : 'No website given'}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </div>
            </Card>
        </Grid>
    );
};

export default UserCard;