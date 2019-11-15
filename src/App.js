import React from 'react'
import About from './About'
import Nav from './Nav'
import Shop from './Shop'
import ShopItem from './ShopItem'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path ='/about' component = {About} />
            <Route exact path ='/shop' component = {Shop} />
            <Route exact path = '/shop/:postID' component = { ShopItem } />
          </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App