import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import FormContainer from "../styles/Form.css";

interface IFormInput {
  username: string;
  password: string;
}

const Login = () => {
  const history = useHistory();

  const schema = yup
    .object({
      username: yup.string().required("Name is required"),
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
    // console.log("login...");
    localStorage.setItem("user", JSON.stringify(data.username));
    history.push("/user");
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">User Name:</label>
        <input
          id="username"
          placeholder="Enter your user name..."
          {...register("username")}
        />
        <p className="error-container">{errors.username?.message}</p>

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password..."
          {...register("password")}
        />
        <p className="error-container">{errors.password?.message}</p>

        <button type="submit">Login</button>
      </form>
    </FormContainer>
  );
};

export default Login;
