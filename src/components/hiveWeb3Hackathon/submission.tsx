import { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ThankyouComponent } from "./thankyouComponent";

interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
}

interface SubmitHackathonForm {
  submitForm?: any;
}

type TeamMembersProps = GenericSection & SubmitHackathonForm;

// Yup validation schema
// Yup validation schema
const validationSchema = Yup.object().shape({
  teamMembers: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
        .required("Name is required"),
      emailId: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    })
  ),
});

export const TeamMembers: React.FC<TeamMembersProps> = ({
  hackathonForm,
  setHackathonForm,
  setSection,
  submitForm,
}) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (values: any) => {
    setHackathonForm(values); // Save the form data
    submitForm(); // Trigger submit action
    setShowThankYou(true); // Show ThankYouComponent
  };

  if (showThankYou) {
    return <ThankyouComponent />;
  }

  return (
    <Formik
      initialValues={hackathonForm}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <FieldArray
            name="teamMembers"
            render={({ form }) => (
              <>
                {form.values.teamMembers?.map((member: any, index: number) => (
                  <div key={index} className="flex flex-col gap-4 lg:flex-row mb-6">
                    {/* Team Member Label */}
                    <h3 className="lg:w-[50%] w-[100%] text-lg mb-4">
                      Team Member {index + 1}
                    </h3>

                    {/* Name Field */}
                    <div className="lg:w-[50%] w-[100%]">
                      <Label htmlFor={`teamMembers.${index}.name`} className="mb-2">
                        Name
                      </Label>
                      <Field
                        as={Input}
                        type="text"
                        id={`teamMembers.${index}.name`}
                        name={`teamMembers.${index}.name`}
                        placeholder="Enter team member name"
                        className="mt-2"
                        required
                      />
                      <ErrorMessage name={`teamMembers.${index}.name`}>
                        {(msg) => <div className="text-red-500">{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div className="lg:w-[50%] w-[100%]">
                      <Label htmlFor={`teamMembers.${index}.emailId`} className="mb-2">
                        Email
                      </Label>
                      <Field
                        as={Input}
                        type="email"
                        id={`teamMembers.${index}.emailId`}
                        name={`teamMembers.${index}.emailId`}
                        placeholder="Enter team member email"
                        className="mt-2"
                        required
                      />
                      <ErrorMessage name={`teamMembers.${index}.emailId`}>
                        {(msg) => <div className="text-red-500">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                ))}
              </>
            )}
          />

          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Previous Button */}
            <Button
              onClick={() => setSection((prev: number) => prev - 1)}
              className="bg-blue-500 text-white max-w-xs min-w-[220px]"
            >
              Previous
            </Button>

            <Button
              type="submit"
              className="bg-blue-500 text-white max-w-xs min-w-[220px]"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
