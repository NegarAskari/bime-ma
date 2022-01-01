import Header from './components/UI/Header'
import Firstpage from './components/Firstpage'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RecoilRoot} from 'recoil'
import background from './resources/background.jpg'

function App() {

  return (
    <RecoilRoot>
      <div className="App" style={containerStyle}>
        <Header />
        <Firstpage />
      </div>
    </RecoilRoot>
  );
}

const containerStyle = {
    backgroundColor: 'black',
    fontFamily: 'Roya',
    padding: '20px',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center'
}

export default App;

