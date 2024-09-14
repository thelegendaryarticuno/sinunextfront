import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface GenericSection {
  setSection?: any;
  hackathonForm?: any;
  setHackathonForm?: any;
}

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
  