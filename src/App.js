import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="container-fluid csnav" >
      <div className="top">
        <Navbar/>
      </div>
      
      <h1>Hello World</h1>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
