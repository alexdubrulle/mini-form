import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "yup-phone";
import "./SignUpForm.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      dateOfBirth: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email addres").required("Required"),
      dateOfBirth: Yup.date()
        .max(
          new Date(Date.now() - 567648000000),
          "You must be at least 18 years"
        )
        .required("Required"),

      phone: Yup.string().matches(/^[0-9]\d{9}$/, {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      }),
      password: Yup.string().matches(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,20}$/,
        {
          message: "enter a valid password",
          excludeEmptyString: false,
        }
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      if (formik.isValid) {
        toast.success("Inscription enregistrée avec succès", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        resetForm();
      }
    },
  });

  return (
    <>
      <form className="Formulaire" onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName" className="firstnamelabel">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <label htmlFor="pass">Password </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <label htmlFor="phone">Phone Number </label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
        <label htmlFor="date">Date Of Birth </label>
        <input
          id="DateOfBirth"
          name="DateOfBirth"
          type="DateOfBirth"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.DateOfBirth}
        />
        {formik.touched.DateOfBirth && formik.errors.DateOfBirth ? (
          <div>{formik.errors.DateOfBirth}</div>
        ) : null}
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default SignupForm;
