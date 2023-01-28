import Add from "../pages/Add/Add";
import Main from "../pages/Main/Main";
import MainRoute from "../pages/MainRoute";

export const ROUTE = [
    {
      path: "",
      element: <MainRoute />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "add",
          element: <Add />,
        },
      
      ],
    },
  ];