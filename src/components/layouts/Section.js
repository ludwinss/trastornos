import React from 'react';

import {
  Grid
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {sectionStyle as style} from '../../theme/index';

const useStyles=makeStyles(style);
const img1=require('../../images/img1.jpg');
const img2=require('../../images/img3.jpg');
const img3=require('../../images/img2.jpg');
const objecto=[
  {
    title: 'Que hacemos',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque nec sodales lorem, id mattis tellus. Ut elit magna,
    tincidunt in lacinia vestibulum, maximus non erat.
    Nulla nec imperdiet metus, ut lacinia magna. Nulla blandit urna at massa consectetur blandit. Sed eu elit quis 
    augue dapibus tempor. Nam porttitor odio id posuere interdum. Etiam eget enim quis risus molestie sagittis eu quis
    nunc. Integer accumsan est turpis,
    sit amet maximus eros pulvinar quis. Aliquam ut tempor erat.
    `,
    img:img1.default,
    color:'white',
    direction:'right'
  },
  {
    title: 'Como lo hacemos',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque nec sodales lorem, id mattis tellus. Ut elit magna,
    tincidunt in lacinia vestibulum, maximus non erat.
    Nulla nec imperdiet metus, ut lacinia magna. Nulla blandit urna at massa consectetur blandit. Sed eu elit quis 
    augue dapibus tempor. Nam porttitor odio id posuere interdum. Etiam eget enim quis risus molestie sagittis eu quis
    nunc. Integer accumsan est turpis,
    sit amet maximus eros pulvinar quis. Aliquam ut tempor erat.
    `,
    img:img2.default,
    color:'primary',
    direction:'left'
  },
  {
    title: 'La Solucion',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque nec sodales lorem, id mattis tellus. Ut elit magna,
    tincidunt in lacinia vestibulum, maximus non erat.
    Nulla nec imperdiet metus, ut lacinia magna. Nulla blandit urna at massa consectetur blandit. Sed eu elit quis 
    augue dapibus tempor. Nam porttitor odio id posuere interdum. Etiam eget enim quis risus molestie sagittis eu quis
    nunc. Integer accumsan est turpis,
    sit amet maximus eros pulvinar quis. Aliquam ut tempor erat.
    `,
    img:img3.default,
    color:'white',
    direction:'right'
  },
]

export default function Section(){
  const classes=useStyles();
  return(
      <div className={classes.root}>
      {objecto.map(value=>
    <Grid container className={classes.container}>
      <Grid item sm md={6} className={classes.item}>
        <h2>{value.title}</h2>
        <p>{value.content}</p>
      </Grid>
      <Grid item sm md={6} className={classes.item}>
        <img src={value.img} alt={value.title}/>
      </Grid> 
    </Grid>
      )}</div>
  );
}
