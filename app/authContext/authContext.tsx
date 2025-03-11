"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import api from "../url/baseUrl";

type AuthContextType = {
  // isAuthenticated: boolean;

  user: null | { id: number; email: string; user_id: number; image: string };
  isLoading: boolean;

  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  // isAuthenticated: false,
  user: null,
  isLoading: true,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<null | {
    id: number;
    email: string;
    user_id: number;
    image: string;
  }>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const response = await api.get("users/check-auth", {
          headers: { Authorization: `authToken ${token}` },
        });

        if (response.status === 200) {
          setUser(response.data.userInfo);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setUser(null);
        }
 
      } catch {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
