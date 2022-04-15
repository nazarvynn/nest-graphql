import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const createUserSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});
const initialState = {
  name: "",
  email: "",
};

export default function CreateUserFormV1({ onSubmit }: { onSubmit: any }) {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={createUserSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Field
            name="name"
            type="text"
            placeholder="User name"
            className="input input-bordered m-2"
          />
          <Field
            name="email"
            type="email"
            placeholder="User email"
            className="input input-bordered m-2"
          />
          <button type="submit" className="btn btn-secondary m-2">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
