import * as yup from "yup";

export const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    age: yup.number().transform((cv) => (isNaN(cv) ? undefined : cv)),
    gender: yup.boolean(),
    country: yup.string(),
    otherCountry: yup.string().when("country", {
      is: (country: string) => country === "Other",
      then: yup.string().required("Please enter your country"),
    }),
    projectName: yup.string().required("Project name is required"),
    projectSize: yup
      .number()
      .positive("Project size is positive")
      .integer("Project size is integer")
      .required("Project size is required")
      .transform((cv) => (isNaN(cv) ? undefined : cv)),
    projectRole: yup.string(),
    projectPosition: yup.string().when("projectSize", {
      is: (projectSize: number) => projectSize > 3,
      then: yup.string().required("Project position is required"),
    }),
  })
  .required();
