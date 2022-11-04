import { useRef } from "react";
import {
  FormControl,
  Textarea,
  FormLabel,
  Input,
  Button,
  Text
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";
import AlertMsg from "./AlertMsg";
import { initialValue, validationSchema } from "./utils";
import emailjs from '@emailjs/browser';
const Form = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSubmit = (values) => {
    emailjs.send('service_3u9hnel', 'template_59uzbvv', values, 'u7ZL62Z2eyKix27aY')
    .then(res => {
      setAlertOpen(true)
      console.log(res)
    })
    .catch(e => console.log(e))
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValue}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleSubmit, touched, errors }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="name" opacity="0.8">
              Nombre y apellido
            </FormLabel>
            <Input
              size={{ base: "md", md: "lg" }}
              name="name"
              value={values.name}
              onChange={handleChange}
              isInvalid={touched.text? Boolean(errors.text) : false}
            />
            {touched.name && errors.name && <Text as='b' color='#E53E3E'>{errors.name}</Text>}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email" opacity="0.8">
              Email
            </FormLabel>
            <Input
              name="email"
              size={{ base: "md", md: "lg" }}
              onChange={handleChange}
              value={values.email}
              isInvalid={touched.text? Boolean(errors.text) : false}
            />
            {touched.email && errors.email && <Text as='b' color='#E53E3E'>{errors.email}</Text>}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="text" opacity="0.8">
              Ingrese su consulta
            </FormLabel>
            <Textarea
              onChange={handleChange}
              name="text"
              size={{ base: "md", md: "lg" }}
              value={values.text}
              isInvalid={touched.text? Boolean(errors.text) : false}
            />
            {touched.text && errors.text && <Text as='b' color='#E53E3E'>{errors.text}</Text>}
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
          {alertOpen && (
            <AlertMsg alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
          )}
        </form>
      )}
    </Formik>
  );
};

export default Form;
