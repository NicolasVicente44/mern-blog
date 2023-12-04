import React from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../../services/users";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AdminLayout = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryKey: ["profile"],

    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    onSuccess: (data) => {
      if (!data?.admin) {
        navigate("/");
        toast.error("You are not authorized to access admin controls.");
      }
    },
    onError: (err) => {
      console.log(err);
      navigate("/");
      toast.error("You are not authorized to access admin controls.");
    },
  });

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-2xl text-slate-700">Admin Panel Loading...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Header />
      <main className="bg-[#f9f9f9] flex-1 p-4 lg:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
