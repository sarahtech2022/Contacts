import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ListContacts from './components/ListContacts'
// import Modal from './components/Modal';

function App() {

  return (
    <div className="App">
      <span id="title"> Contacts: </span>
      <img id="image" src="https://cdn-icons-png.flaticon.com/512/2343/2343694.png"></img>
    
      
      <ListContacts />
     {/* <div className="clipping-container"> <Modal/></div>  */}
    </div>
  )
}

export default App
