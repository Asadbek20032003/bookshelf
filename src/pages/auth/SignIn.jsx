import { useState } from "react";
import axios from "axios";

const SignIn = ({ onSignInSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSignin = async () => {
    try {
      const { username, password } = formData;

      const response = await axios.post("https://no23.lavina.tech/signin", {
        key: username,
        secret: password,
      });

      console.log("Login successful:", response.data);
      onSignInSuccess(); // Call the success callback
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login: " + (error.response?.data?.message || error.message));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#fefefe] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="pt-[48px] pb-[48px] pl-[28px] pr-[28px] space-y-4 flex flex-col">
            <div className="w-full flex justify-center">
              <h1 className="text-[36px] text-3xl font-bold mb-[36px] items-center">Sign in</h1>
            </div>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSignin();
              }}
            >
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="username" className="text-[14px] mb-[4px]">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="border pt-[14px] rounded-lg pl-[16px] pb-[14px] pr-[16px]"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col mb-[16px]">
                <label htmlFor="password" className="text-[14px] mb-[4px]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="border pt-[14px] rounded-lg pl-[16px] pb-[14px] pr-[16px]"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="w-full rounded-lg pt-[10px] pb-[10px] pl-[24px] pr-[24px] text-[#fff] mb-[12px] bg-blue-700">
                Submit
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don not have an account?
                <a href="/signup" className="font-medium text-[#1B28BC] hover:underline dark:text-primary-500">
                  Go to sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

SignIn.propTypes = {
  onSignInSuccess: Function,
};
