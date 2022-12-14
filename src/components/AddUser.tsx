import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormContainer from "../styles/Form.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { schema } from "../common/schema";
import { IFormUserInput } from "../common/IFormInput";

const AddUser = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormUserInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormUserInput> = (data) => {
    const formData = {
      id: uuidv4(),
      username: data.username,
      age: data.age,
      gender: data.gender,
      country: data.country,
      otherCountry: data.otherCountry,
      project: [
        {
          name: data.projectName,
          size: data.projectSize,
          role: data.projectRole,
          position: data.projectPosition,
        },
      ],
    };
    console.log("form data:", formData);
    try {
      let userData: any = localStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        userData.push(JSON.stringify(formData));
      } else {
        userData = [];
        userData.push(JSON.stringify(formData));
      }
      localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      localStorage.removeItem("userData");
    }
    // reset data
    reset();
  };

  const country = watch("country");
  const size = watch("projectSize");

  return (
    <FormContainer>
      <h1>Add User Page</h1>
      <Link to="/user">Back to User Page</Link>
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
          <option value="Viet Nam">Viet Nam</option>
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
          <input id="projectPosition" {...register("projectPosition")} />
        ) : (
          <input id="projectPosition" {...register("projectPosition")} />
        )}
        <p className="error-container">{errors.projectPosition?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
};

export default AddUser;
