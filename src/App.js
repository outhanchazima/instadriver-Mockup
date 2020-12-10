import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import ChatScreen from './components/layout/ChatScreen';


function App() {
  return (
    <div className="container" >
      <div className="container">
        <Navbar/>
        <Sidebar/>
        <ChatScreen/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
