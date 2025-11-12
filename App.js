import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
