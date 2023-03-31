import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ListContacts from './components/ListContacts'
// import Modal from './components/Modal';

function App() {

  return (
    <div className="App">
      <span id="title"> Contacts: </span>
      <ListContacts />
     {/* <div className="clipping-container"> <Modal/></div>  */}
    </div>
  )
}

export default App
