import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChromiumIcon, FacebookIcon, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import signup_image from "../assets/signup_img.svg"

const SignUp = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const openSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Left Side */}
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <img
          src={signup_image}
          className="h-full w-full object-cover"
          alt="image"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white p-10">
        <h1 className="text-4xl font-semibold mb-10">
          Welcome! Let's get you signed up
        </h1>

        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center justify-between w-[60%] gap-5 mt-5 "
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 pl-6 rounded-4xl "
            required
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 pl-6 rounded-4xl"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 pl-6 rounded-4xl"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-2 pl-6 rounded-4xl"
            required
          />

          <button className="bg-[#fb6505] text-white p-2 w-[45%] rounded-4xl mt-4 cursor-pointer">
            Sign Up
          </button>

          <div className="flex flex-col items-center ">
            <p className="text-sm mt-2 text-slate-500">or continue with</p>
            <div className="flex text-xl p-2 gap-4">
              <p className="p-2 bg-[#fb6505] rounded-full cursor-pointer">
                <FacebookIcon className="text-white h-6 w-6" />
              </p>
              <p className="p-2 bg-[#fb6505] rounded-full cursor-pointer ">
                <ChromiumIcon className="text-white h-6 w-6 " />
              </p>
              <p className="p-2 bg-[#fb6505] rounded-full cursor-pointer">
                <Linkedin className="text-white h-6 w-6 " />
              </p>
            </div>
          </div>
        </form>

        <p className="text-sm mt-2 text-slate-500">
          Already a member?
          <span className="text-[#d96d18] cursor-pointer" onClick={openSignIn}>
            {" "}
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
