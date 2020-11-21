import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Hidden,
  IconButton,
  Drawer,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';

import {headerStyle} from '../../../theme/index';

import HeaderLink from './HeaderLink';

const useStyles=makeStyles(headerStyle);

export default function Header(props){
  const classes=useStyles();
  const {color,title,logo}=props;
  const [vistaMovil,setVistaMovil]=React.useState(false);
  const handlerToggler=()=>{
    setVistaMovil(!vistaMovil);
  }
  React.useEffect(()=>{
    const checkChange=()=>{
      if(window.pageYOffset>350){
        document.getElementsByTagName('header')[0]
          .classList.remove(classes[color])
        document.getElementsByTagName('header')[0]
          .classList.add(classes['primary'])
      }else{
        document.getElementsByTagName('header')[0]
          .classList.remove(classes['primary'])
        document.getElementsByTagName('header')[0]
          .classList.add(classes[color])
      }
    }
    checkChange();
    window.addEventListener('scroll',checkChange)

  })
  const appBarClasses=classNames({
    [classes.appBar]:true,
    [classes[props.color]]:props.color,
  });
  return(
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}> 
          <img src={logo} alt='logo'/>
          {title}
        </Button>
        <Hidden smDown >
          <HeaderLink/>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color='inherit'
            onClick={handlerToggler}
          >
            <Menu/>
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden implementation='js'>
        <Drawer
          open={vistaMovil}
          onClose={handlerToggler}
          anchor='right'
          classes={{paper:classes.navResponsive}}
        >
          <HeaderLink/>
        </Drawer> 
      </Hidden>
    </AppBar>
  );
}
Header.defaultProps={
  color:'transparent',
}
Header.propTypes={
  logo: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string
};
