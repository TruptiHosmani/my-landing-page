// Example code for App.js
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllCountries from './components/countries/All.js';
import CountryDetails from './components/countries/CountryDetails.js';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.remove('dark');
    if (theme === 'dark') {
        document.body.classList.add('dark');
    }
  }, [theme]);
  return (
    <div className="">
      <header className={`shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto py-4">
          <Navbar />
        </div>
      </header>
      <main className="container m-4 mx-auto px-4 ">
      <a
              className="mt-2 hover:text-gray-800 float-right"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
              {theme === 'light' ?
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
                  :
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
              }
          </a>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<AllCountries theme={theme}/>} />
            <Route path="/country/:name" element={<CountryDetails theme={theme}/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
