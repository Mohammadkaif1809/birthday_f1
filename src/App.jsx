import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./assets/pages/nav";
import Footer from "./assets/pages/Footer";
import Partners from "./assets/pages/Partners";

/* PAGES */
import Home from "./assets/pages/Home";
import Schedule from "./assets/routes/Schedule";
import DriversPage from "./assets/routes/DriversPage";
import Teams from "./assets/routes/Teams";
import Gaming from "./assets/routes/FantasyGaming";
import F1MembersArea from "./assets/routes/F1MembersArea";

/* AUTH */
import AuthRoutes from "./assets/routes/Results/auth/AuthRoutes";


/* RESULTS */
import ResultsLayout from "./assets/routes/Results/ResultsLayout";
import RacesTable from "./assets/routes/Results/RacesTable";
import DriversTable from "./assets/routes/Results/Drivers";
import ResultsTeams from "./assets/routes/Results/Teams";
import Awards from "./assets/routes/Results/Awards";

const App = () => {
  const location = useLocation();

  // 👇 ONLY these pages hide navbar & footer
  const isAuthPage =
    location.pathname === "/signin" ||
    location.pathname === "/register";

  return (
    <>
      {/* NAVBAR (hidden on auth pages) */}
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />

        {/* RESULTS */}
        <Route path="/results" element={<ResultsLayout />}>
          <Route index element={<Navigate to="races" replace />} />
          <Route path="races" element={<RacesTable />} />
          <Route path="drivers" element={<DriversTable />} />
          <Route path="teams" element={<ResultsTeams />} />
          <Route path="awards" element={<Awards />} />
        </Route>

        {/* OTHER PAGES */}
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/members" element={<F1MembersArea />} />

        {/* AUTH ROUTES (USES AuthLayout) */}
        <Route path="/*" element={<AuthRoutes />} />
      </Routes>


      {/* FOOTER (hidden on auth pages) */}
      {!isAuthPage && (
        <>
          <Partners />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
