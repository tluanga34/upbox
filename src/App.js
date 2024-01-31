import { useState } from 'react';
import './App.css';
import "./assets/scss/scss_index.scss";
import "./assets/icomoon/style.css";
import "./assets/fonts/fonts_index.scss";
import { GlobalContextProvider } from './contexts/GlobalContext';
import { AuthContextProvider } from './contexts/AuthContext';
import NavBar from './components/organisms/navbar/NavBar';
import Footer from './components/organisms/footer/Footer';
import RootRoutes from './config/routes';

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
        <div className="App" app-theme={globalState.theme}>
          <NavBar></NavBar>
          <main>
            <RootRoutes />
          </main>
          <Footer></Footer>
        </div>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
