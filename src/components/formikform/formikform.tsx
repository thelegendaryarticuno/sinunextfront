import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as Yup from "yup";

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  validation: Yup.StringSchema | Yup.NumberSchema;
}

interface FormikFormProps {
  initialValues: Record<string, any>;
  onSubmit: (values: any, { setSubmitting, resetForm }: any) => Promise<void>;
  validationSchema: Yup.ObjectSchema<Record<string, any>>;
  fields: FormField[];
  submitButtonText?: string;
}

const FormikForm: React.FC<FormikFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  fields,
  submitButtonText = "Submit",
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="grid gap-6 py-4">
          {fields.map((field) => (
            <div className="grid grid-cols-4 items-center gap-6" key={field.name}>
              <Label htmlFor={field.name} className="text-right">
                {field.label}
              </Label>
              <Field
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="col-span-3"
                as={Input}
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className="col-span-4 text-red-500 text-sm"
              />
            </div>
          ))}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              submitButtonText
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
