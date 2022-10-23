import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

interface IFormInput {
  name: string;
  password: string;
}

const Login = () => {
  const history = useHistory();

  const schema = yup
    .object({
      name: yup.string().required("Name is required"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Z])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase"
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("data submit", data);
    localStorage.setItem("user", JSON.stringify(data.name));
    history.push("/user");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Enter your name..."
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
