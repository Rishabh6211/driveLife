
import './App.css';
import { Grid } from '@mui/material';



function App() {
  return (
    <div>
      <header  style={{flex:1}}>
     
      <Grid container direction="row" className='App-header' md>
     
  <Grid xs={1} >
  <img alt="logo" className='App-logo' src='https://clipart-library.com/images/rcLonXkKi.png'  />
  </Grid>
  <Grid xs={4}/>
   
   
  <Grid xs={4} justifyContent={'center'} alignItems={'center'}>
   <h1 className='App-text'>DriveLife</h1>
  </Grid>
  <Grid xs={1.5}  >
   <button className='App-sigin'>Signin</button>
  </Grid>
  <Grid xs={1.5}  >
   <button className='App-sigUp'>SignUp</button>
  </Grid>
</Grid>

     
      </header>
      <div>
        <button>hello</button>
      </div>
      </div>
  );
}

export default App;
