import { ThemeProvider } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar.jsx";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Accaunt from "./routes/Accaunt";
import CoinPage from './routes/CoinPage'
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";

    useEffect(()=>{
      axios.get(url).then((response)=>{
        setCoins(response.data)
        // console.log(response.data);
      })
    },[url])
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins}/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/accaunt" element={<Accaunt />} />
        <Route path="/coin/:coinId"  element={<CoinPage/>}>
          <Route path=":coinId"/>
        </Route>
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
