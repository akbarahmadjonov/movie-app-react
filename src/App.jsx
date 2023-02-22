import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";
import { SearchResult } from "./pages/searchResult/SearchResult";
import { Explore } from "./pages/explore/Explore";
import { pageNotFound } from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  const fetchApiConfig = () => {
    fetchDataFromAPI("/configuration").then((data) => {
      console.log(data);
      const url = {
        backdrop: data.images.secure_base_url + "original",
        poster: data.images.secure_base_url + "original",
        profile: data.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<pageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App