import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Formato invalido")
      .required("Este campo es obligatorio"),
    password: yup.string().required("Este campo es obligatorio"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      navigate("/");
    },
  });
  return { formik };
};
