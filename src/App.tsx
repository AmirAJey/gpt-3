import "./App.css";

import {
  Header,
  Footer,
  Blog,
  WhatGPT3,
  Features,
  Possibility,
} from "./containers";
import { Navbar, CTA, Brand } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
