import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface EmailPhoneNumberProps {
  setSection: (section: number) => void;
  hackathonForm: any; // Adjust this type to match HackathonSchema
  setHackathonForm: React.Dispatch<React.SetStateAction<any>>; // Adjust to match HackathonSchema type
}

const validationSchema = Yup.object({
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

export const EmailPhoneNumber: React.FC<EmailPhoneNumberProps> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <Formik
      initialValues={{
        emailId: hackathonForm.emailId || "",
        phoneNumber: hackathonForm.phoneNumber || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Update the form state with new values
        setHackathonForm((prevState) => ({
          ...prevState,
          ...values,
        }));
        // Move to the next section
        setSection(1);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        dirty,
      }) => (
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
            />
            {errors.emailId && touched.emailId && (
              <div className="text-red-500">{errors.emailId}</div>
            )}
          </div>
          <div className="max-w-xs mt-4 ">
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
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <div className="text-red-500">{errors.phoneNumber}</div>
            )}
          </div>
          <div className="flex flex-col mt-4 gap-4 lg:flex-row">
            <Button
              onClick={() => setSection(0)}
              className="bg-blue-500 text-white max-w-xs min-w-[220px]"
            >
              Previous
            </Button>
            <Button
              onClick={() => setSection(2)}
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
