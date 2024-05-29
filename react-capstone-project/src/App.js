import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout/Layout';
import Home from './pages/Home/Home';
import pages from "./utils/pages";

function App() {
  return (
    <div data-testid="app-component">
      <Router>
        <Layout>
          <Routes>
            <Route path={pages.get("home").path} element={<Home />} />
          </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
