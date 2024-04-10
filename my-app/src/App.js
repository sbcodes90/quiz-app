//pages
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";

//layout
import Layout from "./components/Layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='quiz' element={<Quiz />} />
    </Route>
  )
)
function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
