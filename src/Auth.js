import React, {
  useEffect,
  useState
} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({
  children
}) => {
  const [
    currentUser,
    setCurrentUser
  ] = useState(null);
  const [
    pending,
    setPending
  ] = useState(true);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        setCurrentUser(user);
        setPending(false);
      });
  }, []);

  if (pending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <svg
          viewBox="0 0 1024 1024"
          focusable="false"
          data-icon="loading"
          width="4em"
          height="4em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
        </svg>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
