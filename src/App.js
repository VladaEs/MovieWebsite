
import './App.css';
import FirstPageWrapper from './components/FirstPage/PageWrapper/PageWrapper';
import {Route, Routes} from 'react-router-dom'
import Header from './components/FirstPage/Header/Header';
import PageWrapper from './components/Second page/CollectionPage/PageWrapper/PageWrapper';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<FirstPageWrapper/>}/>
      <Route path='/collection' element={<PageWrapper />}/>
      <Route path='/activation' element={<h1>Activation page</h1>}/>
    </Routes>
    </>
    
  );
}

export default App;
