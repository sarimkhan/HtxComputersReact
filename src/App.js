import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Product from "pages/LandingPages/Product";
import Checkout from "pages/LandingPages/Checkout";
import Tracking from "pages/LandingPages/Tracking";
import ForGaming from "pages/LandingPages/ForGaming";
import ForBusiness from "pages/ForBusiness";
import ProductDetails from "pages/LandingPages/ProductDetails";
import BuildPcWorkshop from "pages/LandingPages/BuildPcWorkshop";
import WebDevWorkshop from "pages/LandingPages/WebDevWorkshop";

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/trackMyOrder" element={<Tracking />}/>
        <Route path="/forGaming" element={<ForGaming />}/>
        <Route path="/forBusiness" element={<ForBusiness />}/>
        <Route path="/productDetails" element={<ProductDetails />}/>
        <Route path="/buildPcWorkshop" element={<BuildPcWorkshop />}/>
        <Route path="/webDevWorkshop" element={<WebDevWorkshop />}/>
      </Routes>
    </ThemeProvider>
  );
}
