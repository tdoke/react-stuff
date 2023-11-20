import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
              path: "contacts/:contactId",
              element: <div>contactId--------------------------------------------</div>,
            },
          ],      
    },
]);
