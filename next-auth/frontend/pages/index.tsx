import React, { useState } from "react";
import { useRouter } from "next/router";

const DEFAULT_LOGIN_DATA = {
  user: "omariosouto",
  password: "safepassword",
};

export default function HomeScreen() {
  const [loginData, setLoginDate] = useState(DEFAULT_LOGIN_DATA);

  const router = useRouter();

  const handleChange = (event) => {
    setLoginDate((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const onLoginPress = () => {
    router.push("/auth-page-ssr", loginData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onLoginPress();
        }}
      >
        <input
          placeholder="User"
          name="user"
          value={loginData.user}
          defaultValue={loginData.user}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={loginData.password}
          defaultValue={loginData.password}
          onChange={handleChange}
        />
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
