import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
}

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  noOfMembers: Yup.string().required("Please select the number of team members"),
});

export const TeamMembersNumber: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  // Handles the member value change and updates form state
  function onMemberValueChange(e: string) {
    setHackathonForm((prev: any) => ({
      ...prev,
      noOfMembers: e,
      teamMembers: Array.from({ length: parseInt(e) }, () => ({
        name: "",
        emailId: "",
      })),
    }));
  }

  return (
    <Formik
      initialValues={{ noOfMembers: hackathonForm?.noOfMembers || "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setHackathonForm((prev: any) => ({
          ...prev,
          noOfMembers: values.noOfMembers,
        }));
        setSection((prev: number) => prev + 1); // Go to the next section
      }}
    >
      {({ setFieldValue, handleSubmit, isValid }) => (
        <Form onSubmit={handleSubmit}>
          <div className="max-w-xs">
            <Label htmlFor="noOfMembers">Number of Team Members</Label>
            <Field name="noOfMembers">
              {({ field }: any) => (
                <Select
                  name="noOfMembers"
                  value={field.value}
                  onValueChange={(value: string) => {
                    setFieldValue("noOfMembers", value);
                    onMemberValueChange(value);
                  }}
                  required
                >
                  <SelectTrigger className="bg-gray-300 text-black hover:bg-gray-300">
                    <SelectValue placeholder={"Select number of team members"} />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-300 text-black">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </Field>
            <ErrorMessage name="noOfMembers">
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
              onClick={() => setSection(5)}
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
