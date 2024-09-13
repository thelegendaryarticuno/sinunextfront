// types.ts
export interface Schedule {
    eventStart: string;
    eventEnd: string;
  }
  
  export interface Event {
    eventId: string;
    eventName: string;
    eventTagline: string;
    schedule: Schedule;
  }
  
  export interface EventDesc {
    overview: string;
    longDesc: string;
  }