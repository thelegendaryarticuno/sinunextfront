import { Button } from "../ui/button";
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
            <SelectTrigger
              className="bg-gray-300 text-black hover:bg-gray-300"
            >
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
  