//pages
import HomePage from "./components/HomePage";
import OptionsPage from "./components/OptionsPage";

//layout
import Layout from "./components/Layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='options' element={<OptionsPage />} />
    </Route>
  )
)
function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
