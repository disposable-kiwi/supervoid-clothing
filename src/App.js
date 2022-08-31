import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';
import Home from "./components/routes/home/home.component";
import "./categories.styles.scss";



const Shop = () => {
  return (
    <h1>Hi, this is the shop page</h1>
  );
};

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
