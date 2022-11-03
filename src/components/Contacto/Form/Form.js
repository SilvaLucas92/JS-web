import {
  FormControl,
  Textarea,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import { Formik } from "formik";
import AlertMsg from "./AlertMsg";
import * as Yup from "yup";

const Form = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    text: Yup.string().required("Text is required"),
  });
  const initialValue = {
    name: "",
    email: "",
    text: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValue}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="name" opacity="0.8">
              Nombre y apellido
            </FormLabel>
            <Input
              size={{ base: "md", md: "lg" }}
              name="name"
              colorScheme="teal"
              variant="outline"
              value={values.name}
              onChange={handleChange}
              
            />
            {errors.name && <div>{errors.name}</div>}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email" opacity="0.8">
              Email
            </FormLabel>
            <Input
              name="email"
              size={{ base: "md", md: "lg" }}
              colorScheme="teal"
              variant="outline"
              onChange={handleChange}
              value={values.email}
              
            />
            {errors.email && <div>{errors.email}</div>}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="text" opacity="0.8">
              Ingrese su consulta
            </FormLabel>
            <Textarea
              onChange={handleChange}
              name="text"
              size={{ base: "md", md: "lg" }}
              colorScheme="teal"
              variant="outline"
              
              value={values.text}
            />
            {errors.text && <div>{errors.text}</div>}
          </FormControl>
          <Button
            size="lg"
            colorScheme="teal"
            variant="outline"
            type="submit"
            my={5}
          >
            Enviar
          </Button>
          {/* {alertOpen && <AlertMsg alertOpen={alertOpen} setAlertOpen={setAlertOpen} />} */}
        </form>
      )}
    </Formik>
  );
};

export default Form;
