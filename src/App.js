import Navigation from "./Components/Navigation";
import PhotoGallery from "./Components/PhotoGallery";
import Buttom from "./Components/Buttom";
import './css/app.css'
import './css/buttom.css'

function App() {
  return (
    <>

      <div className="fixed-content">
        <Navigation />

      </div>

      <div className="image-content"> 
        <PhotoGallery />
      </div>

      <div >
        <Buttom />
      </div>
      
    </>
  );
}

export default App;
