import {container} from '../default';
const sectionStyle={
  container:{
    padding:'3rem 0',
    width:'100%',
    backgroundColor:''
  },
  item:{
    '& img':{
      width:'100%',
      borderRadius:'16px',
    },
    '& h2':{
      fontSize:'2em',
      fontWeight:'350'
    },
    '& p':{
      fontWeight:'300',
      lineHeight:'1.7em'
    },
    textAlign:'justify',
    padding:'0 1rem',
    minHeight:'60vh',
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    flexDirection:'column',
  },
  root:{
    margin:0,
    padding:0,
    display:'block'
  }

}

export default sectionStyle;
