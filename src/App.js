
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import HomeScreen from "./components/HomeScreen/HomeScreen";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SignIn/>
      ),
    },
    {
      path: "signup",
      element: (<SignUp/>),
    },
    {
      path: "home",
      element: (<HomeScreen/>),
    },
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
