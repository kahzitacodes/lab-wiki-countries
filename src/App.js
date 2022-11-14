import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SideMenu } from './components/SideMenu';
import { CountryPage } from './pages/CountryPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <SideMenu />

          <Routes>
            <Route path="/:countryCode" element={<CountryPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

// Link > to
// ROute  > Path
