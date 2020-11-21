import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {
  Grid,
  Hidden
} from '@material-ui/core';

import {jumbotronStyle} from '../../theme/index';

const useStyles=makeStyles(jumbotronStyle);

export default function Jumbotron(props){
  const classes=useStyles()
  const {title,subtitle,fondo,brain}=props;
  return(
    <div style={{
      ...jumbotronStyle.background,
      backgroundImage:'url('+fondo+')',
      }} >
     <Grid container={true} className={classes.container}>
       <Grid item className={classes.item} >
         <h1>{title}</h1>
         <h3>{subtitle}</h3>
       </Grid>
       <Hidden smDown>
         <Grid item className={classes.item}>
           <img src={brain} alt='Fondo Home Page' className={classes.logo}/>
         </Grid>
       </Hidden>
      </Grid>
    </div>
  );
}
