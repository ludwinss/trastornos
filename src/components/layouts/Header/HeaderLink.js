import React from 'react';

import {
  Button,
  List,
  ListItem,
  IconButton,
  Divider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {makeStyles} from '@material-ui/core/styles';

import {headerLinkStyle} from '../../../theme/index';

const useStyles=makeStyles(headerLinkStyle);

export default function HeaderLink(){
  const classes=useStyles();
  return(
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          startIcon={<HomeIcon/>}
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          startIcon={<InfoIcon/>}
        >
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          startIcon={<ContactsIcon/>}
        >Contact Us</Button>
      </ListItem>
      <Divider orientation='vertical' flexItem='true'/>
      <ListItem className={classes.listItem}>
        <IconButton
          className={classes.navIcon}
          children={<MailOutlineIcon/>}>
        </IconButton>
        <IconButton
          className={classes.navIcon}
          children={<FacebookIcon/>}
        >
        </IconButton>
        <IconButton
          className={classes.navIcon}
          children={<InstagramIcon/>}
        >
        </IconButton>
      </ListItem>
     </List>
  );
}
