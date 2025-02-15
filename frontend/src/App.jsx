import { useState } from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import UrlChecker from './UrlChecker';

function App() {
  const [page, setPage] = useState('welcome');

  const goToUrlChecker = () => setPage('linkCheck');

  return (
    <div className="app-background">
      {page === 'welcome' ? (
        <WelcomePage onStart={goToUrlChecker} />
      ) : (
        <UrlChecker />
      )}
    </div>
  );
}

export default App;
