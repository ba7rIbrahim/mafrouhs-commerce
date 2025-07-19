import { RouterProvider } from "react-router";
import { router } from "./routes/route";
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
