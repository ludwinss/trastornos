import {defaultFont} from '../default';
const headerLinkStyle=theme=>({
   list:{
    display:'flex',
    position:'relative',
    margin:0,
    padding:0,
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    }
  },
  listItem:{
    padding:0,
    display:'flex',
    marginRight:'1.1em',
    marginLeft:'.75em',
    width:'auto',
    [theme.breakpoints.down('sm')]:{
      margin:'.75em 1.3em'
    }
  },
  navLink:{
    ...defaultFont,
    fontWeight:300,
    fontSize:'.75em',
    letterSpacing:'1px',
    color:'inherit',
    borderBottom:'2px solid #880e4f',
    width:'100%',
    display:'flex',
    justifyContent:'flex-start',
    '&:hover':{
      borderBottom:'2px solid white',
      borderRadius:0
    },
    [theme.breakpoints.down('sm')]:{
      padding:'16px 16px',
      margin:'0 auto',
      width:'98%'
    }
  },
  navIcon:{
    padding:0,
    margin:0,
    color:'inherit',
    marginRight:'8px'
  },
});
export default headerLinkStyle;
