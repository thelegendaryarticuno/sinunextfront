import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
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
