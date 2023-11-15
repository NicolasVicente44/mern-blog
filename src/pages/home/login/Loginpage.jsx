import React from "react";
import MainLayout from "../../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../services/index/users";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/reducers/userReducers";
import { useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Loginpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { mutate, isloading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    console.log(data);
    const { email, password } = data;
    mutate({ email, password }); // Pass an object with the data
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-black mb-8">
            Login
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="email" className="text-[#5a7184]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required ",
                  },
                })}
                placeholder="Enter Email"
                className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="password" className="text-[#5a7184]">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Password length must be at least 8 characters",
                  },
                })}
                placeholder="Enter Password"
                className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.password ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {errors.password?.message}
                </p>
              )}
            </div>

            <Link
              to="/forget-password"
              className="text-sm font-semibold text-black"
            >
              Forgot password?
            </Link>
            <button
              type="submit"
              disabled={!isValid || isloading}
              className="bg-black text-white font-bold py-4 px-8 my-6 w-full rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Do not have an account?{" "}
              <Link className="text-black font-bold" to="/register">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default Loginpage;
