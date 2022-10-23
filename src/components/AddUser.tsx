import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddUserContainer from "../styles/AddUser.css";

interface IFormUserInput {
  username: string;
  age: number;
  gender: boolean;
  country: string;
  otherCountry: string;
  projectName: string;
  projectSize: number;
  projectRole: string;
  projectPosition: string;
}

const AddUser = () => {
  const schema = yup
    .object({
      username: yup.string().required("Username is required"),
      age: yup.number(),
      gender: yup.boolean(),
      country: yup.string(),
      otherCountry: yup.string().required("Please enter your country"),
      projectName: yup.string().required("Project name is required"),
      projectSize: yup.number().required("Project size is required"),
      projectRole: yup.string(),
      projectPosition: yup.string(),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormUserInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormUserInput> = (data) => {
    console.log("form data:", data.username);
  };

  const country = watch("country");
  const size = watch("projectSize");
  console.log("size", size);

  return (
    <AddUserContainer>
      <h1>Add User Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">UserName</label>
        <input id="username" {...register("username")} />
        <p className="error-container">{errors.username?.message}</p>

        <label htmlFor="age">Age</label>
        <input id="age" {...register("age")} />

        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option value={1}>Male</option>
          <option value={0}>Female</option>
        </select>

        <label htmlFor="country">Country</label>
        <select id="country" {...register("country")}>
          <option value="Viet Name">Viet Name</option>
          <option value="Other">Other</option>
        </select>
        {country === "Other" && (
          <>
            <input
              placeholder="Enter your country..."
              id="otherCountry"
              {...register("otherCountry")}
            />
            <p className="error-container">{errors.otherCountry?.message}</p>
          </>
        )}

        <label htmlFor="projectName">Project Name</label>
        <input id="projectName" {...register("projectName")} />
        <p className="error-container">{errors.projectName?.message}</p>

        <label htmlFor="projectSize">Project Size</label>
        <input
          id="projectSize"
          {...register("projectSize", { valueAsNumber: true })}
        />
        <p className="error-container">{errors.projectSize?.message}</p>

        <label htmlFor="projectRole">Project Role</label>
        <select id="projectRole" {...register("projectRole")}>
          <option value="Dev">Dev</option>
          <option value="QA">QA</option>
          <option value="PM">PM</option>
          {size > 5 && (
            <>
              <option value="Dev Lead">Dev Lead</option>
              <option value="QA Lead">QA Lead</option>
            </>
          )}
        </select>

        <label htmlFor="projectPosition">Project Position</label>
        {size > 3 ? (
          <input
            id="projectPosition"
            {...register("projectPosition", {
              required: "Position is required with size > 3",
            })}
          />
        ) : (
          <input id="projectPosition" {...register("projectPosition")} />
        )}
        <p className="error-container">{errors.projectPosition?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </AddUserContainer>
  );
};

export default AddUser;
