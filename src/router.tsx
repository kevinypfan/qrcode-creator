import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const useRouter = () => {
  return createBrowserRouter([{
    path: '/',
    element: <HomePage />
  }]);
}