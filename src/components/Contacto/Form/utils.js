import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  text: Yup.string().required("Text is required"),
});
export const initialValue = {
  name: "",
  email: "",
  text: "",
};
