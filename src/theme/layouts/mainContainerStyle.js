import {
  container,
  defaultFont
} from '../default';

const mainContainerStyle={
  container:{
    ...container,
    ...defaultFont,
    margin:'-3rem auto 5.2rem auto',
    display:'flex',
    borderRadius:'5px',
    boxShadow:' 4px 11px 22px -2px rgba(0,0,0,0.75)',
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
    padding:'1.2rem .5rem ',
    zIndex:3,
    backgroundColor:'white',
    minHeight:'50vh'
  }

}
export default mainContainerStyle;
