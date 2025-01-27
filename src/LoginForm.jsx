import React, { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({
    mobile: { data: "", isValid: false },
    password: { data: "", isValid: false },
  });
  return (
    <>
      <table className="border-separate border-spacing-10 border border-blue-900 bg-blue-300 hover:border-spacing-16 duration-200 m-auto text-center">
        <thead>
          <tr>
            <th>Login Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-blue-900">
              <label htmlFor="mobile">Mobile</label>
            </td>
            <td className="border border-blue-900">
              <input
                type="number"
                className="mobile"
                value={data.mobile.data}
                onChange={(e) => {
                  setData(() => {
                    if (e.target.value.length === 10) {
                      return {
                        ...data,
                        mobile: { data: e.target.value, isValid: true },
                      };
                    } else {
                      return {
                        ...data,
                        mobile: { data: e.target.value, isValid: false },
                      };
                    }
                  });
                }}
              />
            </td>
            {data.mobile.data && (
              <td>{data.mobile.isValid || "number is invalid"}</td>
            )}
          </tr>
          <tr>
            <td className="border border-blue-900">
              <label htmlFor="password">Password</label>
            </td>
            <td className="border border-blue-900">
              <input
                type="password"
                className="password"
                value={data.password.data}
                onChange={(e) => {
                  setData(() => {
                    if (e.target.value.length > 5) {
                      return {
                        ...data,
                        password: { data: e.target.value, isValid: true },
                      };
                    } else {
                      return {
                        ...data,
                        password: { data: e.target.value, isValid: false },
                      };
                    }
                  });
                }}
              />
            </td>
            {data.password.data && (
              <td>{data.password.isValid || "password is invalid"}</td>
            )}
          </tr>
          <tr>
            <td className="border border-blue-900 text-center" colSpan={3}>
              <button
                className="w-full"
                onClick={() => {
                  if (
                    data.mobile.data.length !== 10 ||
                    data.password.data.length < 6
                  ) {
                    alert("please enter valid information !");
                  } else {
                    alert("logined successfully!");
                  }
                }}
              >
                Login
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default LoginForm;