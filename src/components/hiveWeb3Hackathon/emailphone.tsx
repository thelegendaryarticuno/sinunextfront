import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface GenericSection {
  setSection?: (section: number) => void;
}

const validationSchema = Yup.object({
  emailId: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
});

export const EmailPhoneNumber: React.FC<GenericSection> = ({ setSection }) => {
  return (
    <Formik
      initialValues={{ emailId: '', phoneNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
        <Form>
          <div className="max-w-xs">
            <Label htmlFor="emailId">Email</Label>
            <Field
              type="email"
              id="emailId"
              name="emailId"
              placeholder="enter your email"
              as={Input}
              value={values.emailId}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
            {errors.emailId && touched.emailId && <div className="text-red-500">{errors.emailId}</div>}
          </div>
          <div className="max-w-xs">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="enter your phone number"
              as={Input}
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="[0-9]{10}"
              title="Please enter a valid phone number"
            />
            {errors.phoneNumber && touched.phoneNumber && <div className="text-red-500">{errors.phoneNumber}</div>}
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
             <Button
                onClick={() => setSection((prev: number) => prev - 1)}
                className="bg-blue-500 text-white max-w-xs min-w-[220px]"
              >
              Previous
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 text-white max-w-xs min-w-[220px]"
              disabled={!isValid || !dirty}
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
