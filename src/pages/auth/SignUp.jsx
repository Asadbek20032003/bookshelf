import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/auth/auth.thunk";
import { clearMessage } from "../../store/messages/messages.slice";

const SignUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initailState = { email: "", username: "", key: "", secret: "" };
  const [formData, setFormData] = useState(initailState);

  const handleSignup = async () => {
    try {
      const { username, email, key, secret } = formData;
      const data = { name: username, key, secret, email: email };

      dispatch(register(data))
        .unwrap()
        .then((res) => {
          console.log("res", res);
          setFormData(initailState);
        })
        .catch(() => {});
    } catch (error) {
      console.log(error);
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
          <div className="pt-[48px] pb-[48px] pl-[28px] pr-[28px] space-y-4">
            <div className="w-full flex justify-center">
              <h1 className="text-[36px] text-3xl font-bold mb-[36px] items-center">Sign up</h1>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSignup();
              }}
            >
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="username" className="text-[14px] mb-[4px]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border pt-[14px] shadow-inputshadow rounded-lg pl-[16px] pb-[14px] pr-[16px]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="username" className="text-[14px] mb-[4px]">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="border pt-[14px] shadow-inputshadow rounded-lg pl-[16px] pb-[14px] pr-[16px]"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="password" className="text-[14px] mb-[4px]">
                  Key
                </label>
                <input
                  type="password"
                  id="key"
                  name="key"
                  placeholder="Enter your key"
                  className="border pt-[14px] shadow-inputshadow rounded-lg pl-[16px] pb-[14px] pr-[16px]"
                  value={formData.key}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="confirmPassword" className="text-[14px] mb-[4px]">
                  SecretKey
                </label>
                <input
                  type="password"
                  id="secret"
                  name="secret"
                  placeholder="Enter your confirm secret"
                  className="border pt-[14px] shadow-inputshadow rounded-lg pl-[16px] pb-[14px] pr-[16px]"
                  value={formData.secret}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="w-full rounded-lg pt-[10px] pb-[10px] pl-[24px] pr-[24px] text-[#fff] mb-[12px] bg-blue-700">
                Submit
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already signed up?
                <a href="/signin" className="font-medium text-[#1B28BC] hover:underline dark:text-primary-500">
                  Go to sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

SignUp.propTypes = {
  onSignUpSuccess: Function,
};
