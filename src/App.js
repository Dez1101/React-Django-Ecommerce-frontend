import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Header/>
        <main>
          <Container className="py-3">
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
          </Container> 
        </main>
        <Footer/>
      </header>
    </Router>
  );
}

export default App;
