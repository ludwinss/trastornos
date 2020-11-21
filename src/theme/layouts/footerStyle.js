import {container,defaultFont} from '../default';

const footerStyle=theme=>({
  footer:{
    width:'100%',
    backgroundColor:'white',
    boxShadow:'0px -1px 6px -1px rgba(0,0,0,0.75)',
    display:'flex',
    justifyContent:'space-around',
    [theme.breakpoints.down('sm')]:{
      display:'block'
    },
    padding:'12px 0'
  },
  title:{
    padding:'1rem 3rem 1.2rem 1rem',
    margin:0,
    width:'100%',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
      justifyContent:'center',
      padding:'.5rem .9rem',
      fontSize:'.75em'
    }
  },
  list:{
    ...defaultFont,
    ...container,
    float:'right',
    display:'flex',
    padding:'1rem 3rem 1.2rem 1rem',
    justifyContent:'flex-end',
    [theme.breakpoints.down('sm')]:{
      padding:0,
      justifyContent:'center',
      width:'100%',
      margin:'auto'
    }

  },
  listItem:{
    margin:0,
    width:'auto',
    fontSize:'.85em',
    fontWeight:300,
    textTransform:'uppercase',
    '& a':{
      textDecoration:'none',
      color:'#000',
    },
    '&:hover':{
      borderRadius:'4px',
      color:'white',
      backgroundColor:'#880e4f',
      '& a':{
        color:'white'
      }
    },
    [theme.breakpoints.down('sm')]:{
      padding:'.5rem .9rem'
    }
  }

})

export default footerStyle;
