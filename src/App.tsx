import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminHomepage from "./pages/AdminHomepage";
import AdminHomepage1 from "./pages/AdminHomepage1";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import LogIn from "./pages/LogIn";
import Setting from "./pages/Setting";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/users":
        title = "";
        metaDescription = "";
        break;
      case "/tasks":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/setting":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AdminHomepage />} />
      <Route path="/admin-homepage" element={<AdminHomepage1 />} />
      <Route path="/users" element={<Users />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}
export default App;
