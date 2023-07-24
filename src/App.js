
import './App.css';
import Header from './Header';

const data = [

]

function App() {
  return (
    <>
   <Header />
    {/* <header className='App-header'>
      <div className='Left-header'>
      <img alt="logo" className='App-logo' src='https://clipart-library.com/images/rcLonXkKi.png'  />
      <strong className='LeftHeader-text'>DriveLife</strong>
      </div>
      <div className='Mid-header'>
       <input className='App-search' type='text' placeholder='Search'/>
       <button className='Search-button'>
       <img className='Seach-icon' src={require('./assets/search-interface-symbol.png')}/>
       </button>
       
      </div>
      <div className='Right-header'>
        <div>
        <button className='App-sigin'>Signin</button>
        </div>
        <div>
        <button className='App-sigUp'>SignUp</button>
        </div>
      </div>
     
    
      <div>
       
      </div>
      </header> */}
      {/* <div className='App-bodySection'>
        <div className='grid1'> 
            <img className='Grid-image' src={require('./assets/photo-1505740420928-5e560c06d30e.jpeg')}/>
         </div>
        <div className='grid2'> 2 </div>
        <div className='grid3'> 3 </div>
        <div className='grid1'> 4 </div>
        <div className='grid2'> 5 </div>
        <div className='grid3'> 6 </div>
      </div> */}
      <main className="main-content">
      <div className="grid-container">
      <a href="link_to_image_1_page" className="grid-item">
          <img src={require('./assets/photo-1505740420928-5e560c06d30e.jpeg')} alt="Image 1" />
          <p>Text for Image 1</p>
        </a>
        <a href="link_to_image_1_page" className="grid-item">
          <img src={require('./assets/photo-1505740420928-5e560c06d30e.jpeg')} alt="Image 2" />
          <p>Text for Image 2</p>
          </a>
        <a href="link_to_image_1_page" className="grid-item">
          <img src={require('./assets/photo-1505740420928-5e560c06d30e.jpeg')} alt="Image 3" />
          <p>Text for Image 3</p>
          </a>
        <a href="link_to_image_1_page" className="grid-item">
          <img src={require('./assets/photo-1505740420928-5e560c06d30e.jpeg')} alt="Image 4" />
          <p>Text for Image 4</p>
          </a>
        <a href="link_to_image_1_page" className="grid-item">
          <img src={require('./assets/photo-1505740420928-5e560c06d30e.jpeg')}alt="Image 5" />
          <p>Text for Image 5</p>
          </a>
        <a href="link_to_image_1_page" className="grid-item">
          <img src={require('./assets/photo-1505740420928-5e560c06d30e.jpeg')} alt="Image 6" />
          <p>Text for Image 6</p>
          </a>
      </div>
    </main>
      </>
  );
}

export default App;
