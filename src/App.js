import './App.css';
import Attribute from './Components/Attribute';
import Digital from './Components/Digital';
import Greeting from './Components/Greeting';
import Time from './Components/Time';
import Event from './Components/Event';
import Form from './Components/Form';
import Count from './Components/Count';
import Image from './Components/Image';
import Image1 from './Components/Image1';
import Props from './Components/Props';

function App() {
  return (
    <div >
      <Time/>
      <Digital/>
      <Greeting/>
      <Attribute/>
      <Event/>
      <Form/>
      <Count/>
      <Props/>
      {/* <Image/> */}
      {/* <Image1/> */}

    </div>
  );
}

export default App;
