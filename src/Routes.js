import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login/Login";
import CompanySection from "./Pages/CompanySection/CompanySection";
import Results from "./Pages/Results/Results";import Home from './Pages/Home/Home';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';

export const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path='/results' element={<PrivateRoute/>}>
          <Route exact path='/results' element={<Results/>}/>
        </Route>
        <Route exact path='/company-list' element={<PrivateRoute/>}>
          <Route exact path='/company-list' element={<CompanySection/>}/>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};
