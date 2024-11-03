// timelineConstant.tsx

export interface Event {
  name: string;
  startTime: string;
  endTime: string;
  date: string;
}

const eventData: Record<string, Event[]> = {
  "Day-1": [
    {
      name: "9-10 Trade Off",
      startTime: "21:00",
      endTime: "22:00",
      date: "08/11/24",
    },
    { name: "OC", startTime: "17:00", endTime: "18:00", date: "08/11/24" },
    {
      name: "Tech Savvy",
      startTime: "18:00",
      endTime: "20:00",
      date: "08/11/24",
    },
    {
      name: "Infinix Experience Zone",
      startTime: "21:00",
      endTime: "00:00",
      date: "08/11/24",
    },
    { name: "Respawn", startTime: "21:00", endTime: "00:00", date: "08/11/24" },
    {
      name: "CTF, Error Stack",
      startTime: "22:00",
      endTime: "23:00",
      date: "08/11/24",
    },
  ],
  "Day-2": [
    {
      name: "Infinix Experience Zone ",
      startTime: "00:00",
      endTime: "03:00",
      date: "09/11/24",
    },
    { name: "Respawn", startTime: "00:00", endTime: "03:00", date: "09/11/24" },
    {
      name: "Murder Mystery",
      startTime: "09:00",
      endTime: "10:00",
      date: "09/11/24",
    },
    {
      name: "Tech Tacular",
      startTime: "12:00",
      endTime: "13:00",
      date: "09/11/24",
    },
    {
      name: "Start-up Summit",
      startTime: "13:00",
      endTime: "14:00",
      date: "09/11/24",
    },
    {
      name: "Robo Soccer",
      startTime: "15:00",
      endTime: "16:00",
      date: "09/11/24",
    },
    {
      name: "Robo Rush",
      startTime: "16:00",
      endTime: "17:00",
      date: "09/11/24",
    },
    {
      name: "Hackathon Buffer",
      startTime: "18:00",
      endTime: "19:00",
      date: "09/11/24",
    },
    {
      name: "Infinix Experience Zone and Respawn",
      startTime: "09:00",
      endTime: "15:00",
      date: "09/11/24",
    },
  ],
  "Day-3": [
    {
      name: "Math Relay",
      startTime: "09:00",
      endTime: "10:00",
      date: "10/11/24",
    },
    {
      name: "Hackathon Online",
      startTime: "10:00",
      endTime: "11:00",
      date: "10/11/24",
    },
    {
      name: "Analytical Acumen",
      startTime: "11:00",
      endTime: "12:00",
      date: "10/11/24",
    },
    {
      name: "Hallucin8",
      startTime: "12:00",
      endTime: "13:00",
      date: "10/11/24",
    },
    {
      name: "Code Jam",
      startTime: "13:00",
      endTime: "14:00",
      date: "10/11/24",
    },
    {
      name: "Design Dojo",
      startTime: "14:00",
      endTime: "15:00",
      date: "10/11/24",
    },
    {
      name: "Argumental",
      startTime: "17:00",
      endTime: "18:00",
      date: "10/11/24",
    },
    {
      name: "CC + DJ + Prize",
      startTime: "21:00",
      endTime: "23:59",
      date: "10/11/24",
    },
  ],
};

export { eventData };
