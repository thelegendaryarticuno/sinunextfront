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
  logo?: string;       // Optional, logo for the event
  schedule: Schedule;
  rules?: string[];    // Optional array of rules
  prizes?: string[];   // Optional array of prizes
  eventStructure?: string[];  // Optional event structure details
}
