import React from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Components
import Home from "./pages/Home";
import Company from "./pages/Company";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import NotFound from "./components/Common/NotFound";

// Layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='company' element={<Company />} />
      {/* <Route element={<ProtectedRoute role='user' redirectPath='auth' />}>
        <Route index element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='company' element={<Company />} />
      </Route> */}

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
