import React from 'react';
import { NavBar } from './cmps/NavBar';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route component={Favorites} path="/favorites" />
          <Route component={Home} path="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
