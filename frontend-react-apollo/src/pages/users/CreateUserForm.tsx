import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const createUserSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

export default function CreateUserForm({ onSubmit }: { onSubmit: any }) {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={createUserSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" className="p-inputtext" placeholder="User name" />
          <Field
            name="email"
            className="p-inputtext"
            placeholder="User email"
          />
        </Form>
      )}
    </Formik>
  );
}
