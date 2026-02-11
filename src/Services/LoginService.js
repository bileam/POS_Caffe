import axios from "axios";

// export const Login = async (datas) => {
//   const response = await axios.post("", datas, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   return response.data;
// };

export const LoginService = (form) => {
  if (form.username === "bileam" && form.password === "admin123") {
    return { message: "berhasil login", status: true };
  }
  return { message: "gagal login", status: false };
};
