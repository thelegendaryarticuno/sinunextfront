import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
}

interface SubmitHackathonForm {
  submitForm?: any;
}

export const FirstNameLastName: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <>
      <div className="max-w-xs">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={hackathonForm?.firstName}
          placeholder="enter your first name"
          pattern="[A-Za-z]+"
          title="Please enter a valid first name"
          onChange={(e) =>
            setHackathonForm((prev: any) => ({
              ...prev,
              firstName: e?.target?.value,
            }))
          }
          required
        />
      </div>
      <div className="max-w-xs">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={hackathonForm?.lastName}
          placeholder="enter your last name"
          pattern="[A-Za-z]+"
          title="Please enter a valid last name"
          onChange={(e) =>
            setHackathonForm((prev: any) => ({
              ...prev,
              lastName: e?.target?.value,
            }))
          }
          required
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Button
          onClick={() => setSection((prev: number) => prev + 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
          disabled={!hackathonForm?.firstName || !hackathonForm?.lastName}
        >
          Next
        </Button>
      </div>
    </>
  );
};
export const EmailPhoneNumber: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <>
      <div className="max-w-xs">
        <Label htmlFor="emailI">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email"
          value={hackathonForm?.emailId}
          onChange={(e) =>
            setHackathonForm((prev: any) => ({
              ...prev,
              emailId: e?.target?.value,
            }))
          }
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />
      </div>
      <div className="max-w-xs">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="enter your phone number"
          value={hackathonForm?.phoneNumber}
          onChange={(e) =>
            setHackathonForm((prev: any) => ({
              ...prev,
              phoneNumber: e?.target?.value,
            }))
          }
          pattern="[0-9]{10}"
          title="Please enter a valid phone number"
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Button
          onClick={() => setSection((prev: number) => prev - 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
        >
          Previous
        </Button>
        <Button
          onClick={() => setSection((prev: number) => prev + 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
          disabled={!hackathonForm?.emailId}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export const UniversityName: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <>
      <div className="max-w-xs">
        <Label htmlFor="collegeName">College Name</Label>
        <Input
          type="text"
          id="collegeName"
          name="collegeName"
          placeholder="enter your college name"
          value={hackathonForm?.collegeName}
          onChange={(e) =>
            setHackathonForm((prev: any) => ({
              ...prev,
              collegeName: e?.target?.value,
            }))
          }
          pattern="[A-Za-z]+"
          title="Please enter a valid college name"
          required
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Button
          onClick={() => setSection((prev: number) => prev - 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
        >
          Previous
        </Button>
        <Button
          onClick={() => setSection((prev: number) => prev + 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
          disabled={!hackathonForm?.collegeName}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export const TeamDeatils: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
  return (
    <>
      <div className="max-w-xs">
        <Label htmlFor="teamName">Team Name</Label>
        <Input
          type="text"
          id="teamName"
          name="teamName"
          value={hackathonForm?.teamName}
          placeholder="enter your team name"
          onChange={(e) =>
            setHackathonForm((prev: any) => ({
              ...prev,
              teamName: e?.target?.value,
            }))
          }
          pattern="[A-Za-z]+"
          title="Please enter a valid team name"
          required
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Button
          onClick={() => setSection((prev: number) => prev - 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
        >
          Previous
        </Button>
        <Button
          onClick={() => setSection((prev: number) => prev + 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
          disabled={!hackathonForm?.teamName}
        >
          Next
        </Button>
      </div>
    </>
  );
};
export const TeamMembersNumber: React.FC<GenericSection> = ({
  setSection,
  hackathonForm,
  setHackathonForm,
}) => {
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
    <>
      <div className="max-w-xs">
        <Label htmlFor="noOfMembers">Number of Team Members</Label>
        <Select
          name="noOfMembers"
          value={hackathonForm?.noOfMembers}
          onValueChange={(e: string) => onMemberValueChange(e)}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder={"Select number of team members"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Button
          onClick={() => setSection((prev: number) => prev - 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
        >
          Previous
        </Button>
        <Button
          onClick={() => setSection((prev: number) => prev + 1)}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
        >
          Next
        </Button>
      </div>
    </>
  );
};

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
        <div key={index} className="flex flex-col gap-4 lg:flex-row ">
          <h3 className="lg:w-[50%] w-[100%]">Team Member {index + 1}</h3>

          <div className="lg:w-[50%] w-[100%]">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={member?.name}
              placeholder="enter team member name"
              onChange={(e) =>
                setHackathonForm((prev: any) => {
                  const teamMembers = [...prev?.teamMembers];
                  teamMembers[index].name = e?.target?.value;
                  return { ...prev, teamMembers };
                })
              }
              pattern="[A-Za-z]+"
              title="Please enter a valid name"
              required
            />
          </div>
          <div className="lg:w-[50%] w-[100%]">
            <Label htmlFor="emailId">Email</Label>
            <Input
              type="email"
              id="emailId"
              name="emailId"
              value={member?.emailId}
              placeholder="enter team member email"
              onChange={(e) =>
                setHackathonForm((prev: any) => {
                  const teamMembers = [...prev?.teamMembers];
                  teamMembers[index].emailId = e?.target?.value;
                  return { ...prev, teamMembers };
                })
              }
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
          onClick={() => submitForm()}
          className="bg-blue-500 text-white max-w-xs min-w-[220px]"
          disabled={hackathonForm?.teamMembers?.some(
            (member: any) =>
              !member?.name || !member?.emailId || !member?.emailId.match
          )}
        >
          Submit
        </Button>
      </div>
    </>
  );
};
