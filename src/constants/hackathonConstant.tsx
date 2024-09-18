export interface TeamMember {
    name: string;
    emailId: string;
  }
  
  export interface HackathonFormType {
    firstName: string;
    lastName: string;
    emailId: string;
    phoneNumber: string;
    collegeName: string;
    teamName: string;
    noOfTeamMembers: number;
    teamMembers: TeamMember[];
  }
  
  export const HackathonSchema: HackathonFormType = {
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    collegeName: "",
    teamName: "",
    noOfTeamMembers: 1,
    teamMembers: [
      {
        name: "",
        emailId: "",
      },
    ],
  };
  