import {RecoilRoot} from 'recoil'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/UI/Header'
import Firstpage from './components/Firstpage'
import Secondpage from './components/Secondpage'
import background from './resources/background.jpg'

function App() {

  return (
    <Router>
      <RecoilRoot>
        <div className="App" style={containerStyle}>
          <Header text="صدور بیمه‌نامه عمر"/>
          <Switch>
            <Route exact path="/">
              <Firstpage />
            </Route>
            <Route path="/second">
              <Secondpage />
            </Route>
          </Switch>
        </div>
      </RecoilRoot>
    </Router>
  )
}

const containerStyle = {
    backgroundColor: 'black',
    fontFamily: 'Roya',
    padding: '20px',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}

export default App;

