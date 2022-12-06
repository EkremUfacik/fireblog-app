import AppRouter from "./router/AppRouter";
import AuthProvider from "./contexts/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
        <ToastContainer hideProgressBar={true} autoClose={3000} />
      </AuthProvider>
    </div>
  );
}

export default App;
