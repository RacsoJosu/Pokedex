import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import ListItems from "./ListItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ListItems />,
       
    
        },
    ],
  },
]);