import {
  container,
  defaultFont
} from '../default';
const headerStyle=(theme)=>({
  appBar:{
    display:'flex',
    position:'fixed',
    alignItems:'center',
    width:'100%',
  },
  container:{
    ...container,
    display:'flex',
    justifyContent:'space-between',
    textTransform:'uppercase',
  },
  title:{
    '& img':{
      width:'24px',
      height:'24px',
      padding:'0px 8px'
    },
    ...defaultFont,
    fontFamily:'Oswald',
    fontWeight:300,
    color:'white',
    letterSpacing:'1px',
    fontSize:'1.1em',
    textTransform:'none'
  },
  navResponsive:{
    width:'70%',
  },
  transparent:{
    backgroundColor:'transparent !important',
    boxShadow:'none',
  },
  primary:{
    backgroundColor:'#880e4f',
    boxShadow:' 4px 11px 22px -2px rgba(0,0,0,0.75)',
  }
});

export default headerStyle;
