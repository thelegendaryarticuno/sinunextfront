import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
}

// Yup validation schema
const validationSchema = Yup.object().shape({
  collegeName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Please enter a valid college name")
    .required("College name is required"),
});

export const UniversityName: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <Formik
      initialValues={{ collegeName: hackathonForm?.collegeName || "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setHackathonForm((prev: any) => ({
          ...prev,
          collegeName: values.collegeName,
        }));
        setSection((prev: number) => prev + 1); // Navigate to the next section
      }}
    >
      {({ handleSubmit, isValid }) => (
        <Form onSubmit={handleSubmit}>
          <div className="max-w-xs">
            <Label htmlFor="collegeName">College Name</Label>
            <Field
              as={Input}
              type="text"
              id="collegeName"
              name="collegeName"
              placeholder="enter your college name"
              required
            />
            <ErrorMessage name="collegeName">
              {(msg) => <div className="text-red-500">{msg}</div>}
            </ErrorMessage>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row mt-4">
            <Button
              onClick={() => setSection((prev: number) => prev - 1)}
              className="bg-blue-500 text-white max-w-xs min-w-[220px]"
              type="button"
            >
              Previous
            </Button>
            <Button
              onClick={() => setSection(3)}
              className="bg-blue-500 text-white max-w-xs min-w-[220px]"
              disabled={!isValid}
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
