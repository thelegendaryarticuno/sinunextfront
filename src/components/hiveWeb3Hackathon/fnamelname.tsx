import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
}

// Yup validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "First name can only contain letters")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
    .required("Last name is required"),
});

export const FirstNameLastName: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <Formik
      initialValues={{
        firstName: hackathonForm?.firstName || "",
        lastName: hackathonForm?.lastName || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Update the form state with the new values
        setHackathonForm((prev: any) => ({
          ...prev,
          firstName: values.firstName,
          lastName: values.lastName,
        }));
        // Proceed to the next section
        setSection((prev: number) => prev + 1);
      }}
    >
      {({ errors, touched, handleChange, handleBlur }) => (
        <Form>
          <div className="max-w-xs">
            <Label htmlFor="firstName">First Name</Label>
            <Field
              as={Input}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="enter your first name"
              pattern="[A-Za-z]+"
              title="Please enter a valid first name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              required
            />
            {typeof errors.firstName === "string" && touched.firstName && (
              <div className="text-red-500">{errors.firstName}</div>
            )}
          </div>
          <div className="max-w-xs">
            <Label htmlFor="lastName">Last Name</Label>
            <Field
              as={Input}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="enter your last name"
              pattern="[A-Za-z]+"
              title="Please enter a valid last name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              required
            />
            {typeof errors.lastName === "string" && touched.lastName && (
              <div className="text-red-500">{errors.lastName}</div>
            )}
          </div>
          <div className="flex flex-col gap-4 mt-4 lg:flex-row">
            <Button
              type="submit"
              className="bg-blue-500 text-white max-w-xs min-w-[220px]"
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
