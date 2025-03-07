"use client";

import axios from "axios";
import { createContext, useState, ReactNode, useEffect } from "react";
import baseURL from "../url/baseUrl";

interface UserInfo {
  // Define your user info type based on your API response
  id: string;
  user_id: number;
  username: string;
  email: string;
  image: string;
  // Add other properties as needed
}

interface AuthState {
  checkAuth: boolean;
  todoToken?: string;
}

interface AuthContextType {
  isAuthenticated: AuthState;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<AuthState>>;
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<AuthState>({
    checkAuth: false,
    todoToken: undefined,
  });
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const logout = () => {
    setIsAuthenticated({
      checkAuth: false,
      todoToken: undefined,
    });
    window.localStorage.removeItem("todoToken");
  };

  useEffect(() => {
    const checkAuth = async () => {
      
     
      try {
        const response = await axios.get<{ userInfo: UserInfo }>(
          `${baseURL}/users/check-auth`,
          {
            headers: {
              Authorization: `todoToken ${window.localStorage.getItem("todoToken")}`,
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated({
            checkAuth: true,
            
          });
          setUserInfo(response.data.userInfo);
        }
      } catch (error) {
        console.error("Authentication check failed", error);
      }
    };

    checkAuth();
  }, []);

  // console.log(`isAuthenticated`, isAuthenticated);
  console.log(`userInfo`, userInfo);
  

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
