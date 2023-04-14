import { ChakraProvider } from '@chakra-ui/react'
import {
  RouterProvider,
} from "react-router-dom";
import './i18n';
import { useRouter } from './router';
function App() {
  const router = useRouter()

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
