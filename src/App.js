import './App.css';
import './styles/global.css'

import GlobalContext from './context/GlobalContext'
import Inicial from './pages/Inicial';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import theme from './temaConfig'
import { ThemeProvider } from '@material-ui/core';
import Filmes from './pages/Filmes';
import Admin from './pages/Admin';
import Sessao from './pages/Sessao';

function App() {
  return (
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <Switch>
            <Route path="/" exact component={Inicial} />
            <Route path={"/filmes"} component={Filmes} />
            <Route path={"/admin"} component={Admin} />
            <Route path={"/sessao"} component={Sessao} />
          </Switch>

        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext>
  );
}

export default App;
