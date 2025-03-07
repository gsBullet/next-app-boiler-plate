"use client";
import { AuthContext } from "@/app/authContext/authContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);

  console.log(`context`, isAuthenticated);
  return (
    <>
      {isAuthenticated.checkAuth ? (
        <h1>Welcome to the Dashboard!</h1>
      ) : (
        router.push("/")
      )}
    </>
  );
};

export default Dashboard;
