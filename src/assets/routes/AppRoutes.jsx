import { Routes, Route, Navigate } from "react-router-dom";

/* RESULTS */
import ResultsLayout from "../assets/routes/Results/ResultsLayout";
import RacesTable from "../assets/routes/Results/RacesTable";
import DriversTable from "../assets/routes/Results/Drivers";
import ResultTeams from "../assets/routes/Results/Teams";
import Awards from "../assets/routes/Results/Awards";
import FantasyGaming from "./FantasyGaming";

/* OTHER PAGES */
import Home from "../assets/pages/Home";
import Schedule from "./Schedule"
import Drivers from "./DriversPage";
import Teams from "./Teams";
import F1MembersArea from "./F1MembersArea";




const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/Drivers" element={<Drivers />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/FantasyGaming" element = {<FantasyGaming/>} />
      <Route path="/members" element={<F1MembersArea/>} />

      {/* RESULTS ROUTES */}
      <Route path="/results" element={<ResultsLayout />}>
        <Route index element={<Navigate to="races" replace />} />
        <Route path="races" element={<RacesTable />} />
        <Route path="drivers" element={<DriversTable />} />
        <Route path="teams" element={<ResultTeams />} />
        <Route path="awards" element={<Awards />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
