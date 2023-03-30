import Home from './routes/home/home.component';
import Shop from "./routes/shop/shop.component";
import { Routes, Route } from 'react-router-dom';





const App = () => {
  return (
    <Routes>
      {/* each indivisual routes has a path which is exactly like url and some element componet pointing to the element */}
      <Route path="/home" element={<Home/>}  >
        {/* <Route path = "/shop" element={<Shop/>} />     */}
      </Route>
    </Routes>
  );
};

export default App;