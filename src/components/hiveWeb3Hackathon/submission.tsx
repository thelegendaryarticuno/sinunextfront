import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
}

interface SubmitHackathonForm {
  submitForm?: any;
}

type TeamMembersProps = GenericSection & SubmitHackathonForm;

export const TeamMembers: React.FC<TeamMembersProps> = ({
  hackathonForm,
  setHackathonForm,
  setSection,
  submitForm,
}) => {
  return (
    <>
      {hackathonForm?.teamMembers?.map((member: any, index: number) => (
        <div key={index} className="flex flex-col gap-4 lg:flex-row mb-6">
          {/* Adjust spacing here */}
          <h3 className="lg:w-[50%] w-[100%] text-lg mb-4">
            Team Member {index + 1}
          </h3>

          <div className="lg:w-[50%] w-[100%]">
            <Label htmlFor={`name-${index}`} className="mb-2">
              Name
            </Label>
            <Input
              type="text"
              id={`name-${index}`}
              name="name"
              value={member?.name}
              placeholder="Enter team member name"
              onChange={(e) => {
                const updatedMembers = [...hackathonForm?.teamMembers];
                updatedMembers[index].name = e?.target?.value;
                setHackathonForm((prev: any) => ({
                  ...prev,
                  teamMembers: updatedMembers,
                }));
              }}
              className="mt-2"
              pattern="[A-Za-z]+"
              title="Please enter a valid name"
              required
            />
          </div>
          <div className="lg:w-[50%] w-[100%]">
            <Label htmlFor={`emailId-${index}`} className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              id={`emailId-${index}`}
              name="emailId"
              value={member?.emailId}
              placeholder="Enter team member email"
              onChange={(e) => {
                const updatedMembers = [...hackathonForm?.teamMembers];
                updatedMembers[index].emailId = e?.target?.value;
                setHackathonForm((prev: any) => ({
                  ...prev,
                  teamMembers: updatedMembers,
                }));
              }}
              className="mt-2"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email"
              required
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-4 lg:flex-row">
        <Button
          onClick={() => setSection((prev: number) => prev - 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
        >
          Previous
        </Button>
        <Button
          onClick={submitForm}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
        >
          Submit
        </Button>
      </div>
    </>
  );
};
