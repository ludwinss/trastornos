import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {mainContainerStyle as style} from '../../theme/index';

const useStyles=makeStyles(style);

export default function MainContainer(props){

  const classes=useStyles();

  return(
    <div className={classes.container}>
      {props.children}
    </div>
  );
}
