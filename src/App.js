import React from 'react';
import './App.css';
import { Container } from "@material-ui/core";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import { store } from './Actions/store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store} >
      <div className="header">
        <Container maxWidth="lg">
          <Header />
        </Container>
      </div>

     <Body />

      <div className="footer">
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </div>
      </Provider>

  );
}

export default App;
