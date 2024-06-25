import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ExampleOne from './ExampleOne/';
import './App.css'

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/example/1" exact element={<ExampleOne />} />
        <Route path="/example/2" exact element={<div>example two</div>} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App

