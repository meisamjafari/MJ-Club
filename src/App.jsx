import routes from "./Routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./component/TopBar";
import NavBar from "./component/NavBar";
import Landing from "./component/Landing";
function App() {
  const router = useRoutes(routes);
  return (
    <>
      
        <TopBar />
        <NavBar />
        <Landing/>
        {router}
    
    </>
  );
}

export default App;
