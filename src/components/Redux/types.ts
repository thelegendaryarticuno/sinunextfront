export interface Schedule {
  eventStart: string;
  eventEnd: string;
  registrationStart: string;
  registrationEnd: string;
  submissionStart: string;
  submissionEnd: string;

}

export interface Event {
  eventId: string;
  eventName: string;
  eventTagline: string;
  status?: string;
  overview?: string;   // Optional
  longDesc?: string;   // Optional
  logo?: string;      
  schedule: Schedule;
  rules?: string[];   
  prizes?: string[];  
  eventStructure?: string[];  
  eventMode: string;
  eventRedirectUrl: string;
}
