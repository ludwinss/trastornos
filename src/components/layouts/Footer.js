import React from 'react';

import {Link} from 'react-router-dom';

import {
  List,
  ListItem,
  Button
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import {footerStyle as style} from '../../theme/index';

const useStyles=makeStyles(style);

export default function Footer(props){
  
  const classes=useStyles();

  return(
    <footer className={classes.footer}>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link>Home</Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link>Home</Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link>Home</Link>
        </ListItem>
      </List> 
      <Button className={classes.title}>
         &copy;{props.title}
      </Button>
    </footer>
  );
}
