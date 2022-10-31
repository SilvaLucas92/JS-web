import { FormControl, Textarea, FormLabel, Input, Button, FormErrorMessage } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import AlertMsg from './AlertMsg'
const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    text: ""
  });
  const [errors, setErrors] = useState({})
    const [alertOpen, setAlertOpen] = useState(false)
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formState.name) setErrors((prev) => ({...prev, name: 'Campo requerido'}));
    if(!formState.email) setErrors((prev) => ({...prev, email: 'Campo requerido'}));
    if(!formState.text) setErrors((prev) => ({...prev, text: 'Campo requerido'}));
    if(formState.name && formState.email && formState.text) {
            setAlertOpen(true)
            setFormState({
                name: "",
                email: "",
                text: ""
            })
    }
  };
  useEffect(() => {
    setErrors({})
  }, [formState.name, formState.email, formState.text])
  return (
        <form onSubmit={handleSubmit}>
        <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel  htmlFor="name" opacity="0.8">
            Nombre y apellido
            </FormLabel>
            <Input
            onChange={handleChange}
            size={{ base: "md", md: "lg" }}
            name="name"
            colorScheme="teal"
            variant="outline"
            value={formState.name}
            />
            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email"  opacity="0.8">
            Email
            </FormLabel>
            <Input
            onChange={handleChange}
            name="email"
            size={{ base: "md", md: "lg" }}
            colorScheme="teal"
            variant="outline"
            value={formState.email}
            />
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.text)}>
            <FormLabel  htmlFor="text" opacity="0.8">
            Ingrese su consulta
            </FormLabel>
            <Textarea
            onChange={handleChange}
            name="text"
            size={{ base: "md", md: "lg" }}
            colorScheme="teal"
            variant="outline"
            value={formState.text}
            />
                    {errors.text && <FormErrorMessage>{errors.text}</FormErrorMessage>}
        </FormControl>
        <Button     
            size='lg'    
            colorScheme="teal"
            variant="outline"
            type="submit"
            my={5}>
            Enviar
        </Button>
        {alertOpen && <AlertMsg alertOpen={alertOpen} setAlertOpen={setAlertOpen} />}
        </form>
  );
};

export default Form;
