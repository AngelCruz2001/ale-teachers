import { useFormik } from "formik";
import Image from "next/image";
import logoAleNoText from "../../../public/images/logoAleNoText.png";
import * as Yup from "yup";
import Styles from "./Login.module.scss";
import { useAppDispatch } from "hooks/reduxHooks";
import { startLogIn } from "store/auth/thunks";
import { useSession, signIn, signOut } from "next-auth/react";
export const Login = () => {
  const dispatch = useAppDispatch();

  const { errors, handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      id: "ale222668",
      password: "ale222668",
    },

    onSubmit: (values) => {
      dispatch(startLogIn(values.id, values.password));
    },
    validationSchema: Yup.object({
      id: Yup.string().required("Requerido"),
      password: Yup.string().required("Requerido"),
    }),
  });

  return (
    <section className={Styles.container}>
      <div className={Styles.authLogin}>
        <div className={Styles.imageContainer}>
          <Image className={Styles.image} src={logoAleNoText} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder={"Usuario"}
            type="string"
            name="id"
            onChange={handleChange}
            value={values.id}
          />
          {errors.id && <p>{errors.id}</p>}
          <input
            placeholder="****************"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p>{errors.password}</p>}
          <button type="submit" className={Styles.submit}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
