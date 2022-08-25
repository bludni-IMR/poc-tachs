import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PdfButton from './components/PdfButton';
import { createPdfLink } from './utils/links';

axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  const [pdfs, setPdfs] = useState([]);
  const [appPrefs, setAppPrefs] = useState();

  const getAppPrefs = async () => {
    try {
      const { data } = await axios.get('/api/ApplicationPreferences');
      setAppPrefs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppPrefs();
  }, []);

  return (
    <div className='App'>
      <h1>PROOF OF CONCEPT</h1>
      <div>
        <div className='ContentBox'>
          <div>
            <div className='Header'>
              <h2>PDF NAMES</h2>
              <PdfButton setPdfs={setPdfs} />
            </div>
            {pdfs.length > 0 ? (
              <div className='Content'>
                {pdfs.map((pdf, index) => {
                  return (
                    <p key={index}>
                      <a href={createPdfLink(pdf)}>{pdf}</a>
                    </p>
                  );
                })}
              </div>
            ) : (
              <div className='ImageBox'>
                <img src='logo512.png' />
              </div>
            )}
          </div>

          <div>
            <div className='Header'>
              <h2>APP PREFERENCES</h2>
            </div>
            {appPrefs ? (
              <div className='AppPrefsContent'>
                {Object.keys(appPrefs).map((key: string, i) => {
                  return (
                    <div key={i} className='AppPrefs'>
                      <p>{key}</p>
                      <p>{appPrefs[key]}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className='ImageBox'>
                <img src='logo512.png' />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
