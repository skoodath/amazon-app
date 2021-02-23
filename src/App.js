import Header from "./components/header/header";
import Home from "./components/home/home";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from "./components/checkout/checkout";
import Footer from "./components/footer/footer";



const App = () => {
return(
  <Router>

    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" exact component={Checkout} />
    </Switch>
    <Footer />
    <GlobalStyle />
  </Router>
  )
}
export default App;
