'use client';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FiAlertCircle } from 'react-icons/fi';
import css from './BookingForm.module.css';

const initialValues = {
  name: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Please enter your name.')
    .required('Please enter your name.'),
  email: Yup.string()
    .trim()
    .email('Please enter your email.')
    .required('Please enter your email.'),
});

const BookingForm = () => {
  return (
    <div className={css.booking}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        {({ values, errors, touched }) => {
          const nameError = touched.name && errors.name;
          const emailError = touched.email && errors.email;

          return (
            <Form className={css.form} noValidate>
              <div>
                <div
                  className={`${css.inputWrap} ${nameError ? css.invalid : ''}`}
                >
                  {(values.name || nameError) && (
                    <span className={css.floatLabel}>Name*</span>
                  )}
                  <Field
                    className={css.input}
                    type="text"
                    name="name"
                    placeholder="Name*"
                    aria-label="Name"
                  />
                  {nameError && <FiAlertCircle className={css.errorIcon} />}
                </div>
                {nameError && <p className={css.errorText}>{errors.name}</p>}
              </div>

              <div>
                <div
                  className={`${css.inputWrap} ${emailError ? css.invalid : ''}`}
                >
                  {(values.email || emailError) && (
                    <span className={css.floatLabel}>Email*</span>
                  )}
                  <Field
                    className={css.input}
                    type="email"
                    name="email"
                    placeholder="Email*"
                    aria-label="Email"
                  />
                  {emailError && <FiAlertCircle className={css.errorIcon} />}
                </div>
                {emailError && <p className={css.errorText}>{errors.email}</p>}
              </div>

              <button className={css.send} type="submit">
                Send
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BookingForm;
