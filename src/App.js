import { useState } from 'react';
import './App.css';
import "./assets/scss/scss_index.scss";
import "./assets/fonts/fonts_index.scss";
import { GlobalContextProvider } from './contexts/GlobalContext';
import { AuthContextProvider } from './contexts/AuthContext';
import NavBar from './components/organisms/navbar/NavBar';
import Footer from './components/organisms/footer/Footer';
import RootRoutes from './config/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [globalState, setGlobalState] = useState({
    theme: "theme-light",
  });

  const [authState, setAuthState] = useState();

  const globalReducer = {
    setThemeInfo(themeName) {
      setGlobalState({ ...globalState, theme: themeName });
    }
  }

  const authReducer = {
    setUserInfo(userObj) {
      setAuthState({ ...authState, userInfo: userObj });
    },
    logUserOut() {
      localStorage.removeItem("userInfo");
      setAuthState();
    }
  }

  return (
    <GlobalContextProvider value={{
      globalState,
      globalReducer
    }}>
      <AuthContextProvider value={{
        authState,
        authReducer
      }}>
        <BrowserRouter>
          <div className="App" app-theme={globalState.theme}>
            <NavBar></NavBar>
            <main className='main-body'>
              <RootRoutes />
            </main>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
