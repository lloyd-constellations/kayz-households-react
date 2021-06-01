import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../common/MyTextInput";
import MySelect from "../common/MySelect";

const Checkout = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className="form-container">
      <h2>Checkout</h2>
      <h4>1/2. Address Details</h4>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          deliveryAddress: "",
          region: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          phone: Yup.string()
            .required("Required")
            .matches(phoneRegExp, "Phone number is not valid"),
          deliveryAddress: Yup.string()
            .required("Required")
            .min(4, "Must be 4 characters or more"),
          region: Yup.string()
            .oneOf(["nairobi", "nakuru", "nyeri", "other"], "Invalid Region")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="+254 700000000"
          />

          <MyTextInput
            label="Delivery Address"
            name="deliveryAddress"
            type="text"
            placeholder="Street Name / Building / Apartment No. / Floor"
          />
          <MySelect label="Region" name="region">
            <option value="">Select Region</option>
            <option value="nairobi">Nairobi</option>
            <option value="nakuru">Nakuru</option>
            <option value="nyeri">Nyeri</option>
            <option value="other">Other</option>
          </MySelect>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;
