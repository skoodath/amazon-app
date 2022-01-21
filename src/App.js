import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, SubHeader, Home, Checkout, Menu, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Menu />
      <Header />
      <SubHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </Router>
  );
};
export default App;
