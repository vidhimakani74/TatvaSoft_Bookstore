import * as Yup from "yup";
import { Formik } from "formik";
import classes from "./Register.module.css";
import { ErrorMsg } from "./ErrorMsg";

export const Register = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password must not exceed 10 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("Registered Successfully");
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            
            <form onSubmit={handleSubmit}>
                <h1 className='name'>Registration Form</h1>
                 <hr/>
              <div className={classes.row}>
                <div className="form-group">
                  <label className='n1'>Username: </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <ErrorMsg error={errors.username} />
                </div>
                <div className="form-group">
                  <label className='n1'>Email: </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <ErrorMsg error={errors.email} />
                </div>
                <div className="form-group">
                  <label className='n1'>Password: </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <ErrorMsg error={errors.password} />
                </div>
                <div className="form-group">
                  <label className='n1'>Confirm Password: </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <ErrorMsg error={errors.confirmPassword} />
                </div>
              </div>
              <button type="submit">Register</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
