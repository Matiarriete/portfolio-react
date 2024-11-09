import { Suspense, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import i18n from './i18n'
import LocaleContext from './LocaleContext';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return <div className="d-flex flex-column align-items-center justify-content-center" style={{width: 100 + 'vw', height: 100 + 'vh' }}><Spinner animation="grow"/></div>;
}

function App() {

  const [locale, setLocale] = useState(i18n.language)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language))

  return (
    <div>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
          <Dashboard />
        </Suspense>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
