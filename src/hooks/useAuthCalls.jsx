import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../helpers/firebase";
import { useAuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthContext();

  const register = async (email, password, name, lastName) => {
    const displayName = name + " " + lastName;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName });
      setCurrentUser({ email, password, displayName });
      navigate("/");
      toast.success(`Successfully Registered`);
    } catch (error) {
      console.log(error.message);
      toast.error("Can not be Registered");
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toast.success(`Successfully Logged In`);
    } catch (error) {
      console.log(error.message);
      toast.error("Can not be Logged In");
    }
  };

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate("/");
        toast.success(`Successfully Signed In`);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Can not be Signed In");
      });
  };

  const logout = () => {
    signOut(auth);
    navigate("/login");
    toast.success("Successfully Logged Out");
  };

  return { login, register, logout, googleAuth };
};

export default useAuthCalls;
