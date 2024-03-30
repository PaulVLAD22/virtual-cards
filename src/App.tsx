import {
  ChakraProvider,
  theme
} from "@chakra-ui/react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import UserProfile from "./components/UserProfile";
import "./index.css";

export const App = () => (
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/user" Component={UserProfile}>
        </Route>
        {/* Other routes here */}
      </Routes>
    </Router>
  </ChakraProvider>
);
