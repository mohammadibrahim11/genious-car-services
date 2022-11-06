import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Checkout from "./components/CheckOut/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Privateroute from "./components/Privateroute/Privateroute";
import Root from "./components/Root/Root";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        },

        // {
        //   path:'/checkout/',
        //   element:<Checkout></Checkout>,
        //   // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        // },

        {
          path:'/checkout/:id',
          element:<Checkout></Checkout>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<Privateroute><Orders></Orders></Privateroute>,
        
        },
  
       
      ],
    },

  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
