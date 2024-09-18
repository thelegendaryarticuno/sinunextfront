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
  teamName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Team name must contain only letters and spaces")
    .required("Team name is required"),
});

export const TeamDetails: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <Formik
      initialValues={{ teamName: hackathonForm?.teamName || "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setHackathonForm((prev: any) => ({
          ...prev,
          teamName: values.teamName,
        }));
        setSection((prev: number) => prev + 1); // Move to the next section
      }}
    >
      {({ values, errors, touched, handleSubmit, isValid }) => (
        <Form onSubmit={handleSubmit}>
          <div className="max-w-xs">
            <Label htmlFor="teamName">Team Name</Label>
            <Field
              as={Input}
              type="text"
              id="teamName"
              name="teamName"
              placeholder="Enter your team name"
              className="mt-2"
              required
            />
            <ErrorMessage name="teamName">
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
              onClick={() => setSection(4)}
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