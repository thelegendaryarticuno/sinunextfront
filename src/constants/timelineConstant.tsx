export interface Event {
  name: string;
  startTime: string;
  endTime: string;
  date: string;
  venue?: string;
}

const eventData: Record<string, Event[]> = {
  "Day-1": [
    { name: "OC", startTime: "17:00", endTime: "19:00", date: "08/11/24" },
    {
      name: "Tech Savvy",
      startTime: "19:30",
      endTime: "20:30",
      date: "08/11/24",
      venue: "Auditorium",
    },
    {
      name: "Infinix Experience Zone",
      startTime: "21:00",
      endTime: "23:59",
      date: "08/11/24",
      venue: "LAB 19&20",
    },
    {
      name: "Respawn",
      startTime: "21:00",
      endTime: "23:59",
      date: "08/11/24",
      venue: "AC2, First Floor",
    },
  ],
  "Day-2": [
    {
      name: "Infinix Experience Zone ",
      startTime: "00:00",
      endTime: "03:00",
      date: "09/11/24",
      venue: "LAB 19&20",
    },
    {
      name: "Respawn",
      startTime: "00:00",
      endTime: "03:00",
      date: "09/11/24",
      venue: "AC2, First Floor",
    },
    {
      name: "Infinix Experience Zone ",
      startTime: "12:00",
      endTime: "23:59",
      date: "09/11/24",
      venue: "LAB 19&20",
    },
    {
      name: "Murder Mystery",
      startTime: "10:00",
      endTime: "11:30",
      date: "09/11/24",
      venue: "Auditorium",
    },
    {
      name: "Tech Tacular",
      startTime: "13:00",
      endTime: "14:00",
      date: "09/11/24",
      venue: "AC2, Ground Floor",
    },
    {
      name: "Start-up Summit",
      startTime: "15:00",
      endTime: "17:00",
      date: "09/11/24",
      venue: "LT 101",
    },
    {
      name: "Robo Soccer",
      startTime: "17:00",
      endTime: "18:00",
      date: "09/11/24",
      venue: "Spine",
    },
    {
      name: "Robo Rush",
      startTime: "18:00",
      endTime: "19:00",
      date: "09/11/24",
      venue: "Spine",
    },
    {
      name: "Hive Hackathon",
      startTime: "14:00",
      endTime: "17:00",
      date: "09/11/24",
      venue: "Auditorium",
    },
    {
      name: "Hackathon Buffer",
      startTime: "18:00",
      endTime: "20:00",
      date: "09/11/24",
      venue: "Auditorium",
    },
    {
      name: "Argumental",
      startTime: "21:00",
      endTime: "22:00",
      date: "09/11/24",
      venue: "Auditorium",
    },
    {
      name: "Respawn",
      startTime: "21:00",
      endTime: "23:59",
      date: "09/11/24",
      venue: "AC2, First Floor",
    },
  ],
  "Day-3": [
    {
      name: "Respawn",
      startTime: "00:00",
      endTime: "03:00",
      date: "10/11/24",
      venue: "AC2, First Floor",
    },
    {
      name: "Infinix Experience Zone ",
      startTime: "00:00",
      endTime: "03:00",
      date: "10/11/24",
      venue: "LAB 19&20",
    },
    {
      name: "Math Relay",
      startTime: "09:00",
      endTime: "10:00",
      date: "10/11/24",
      venue: "Bowl Area",
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
      venue: "LT 101",
    },
    {
      name: "Hallucin8",
      startTime: "12:00",
      endTime: "14:00",
      date: "10/11/24",
      venue: "LT 101",
    },
    {
      name: "Code Jam",
      startTime: "14:00",
      endTime: "16:00",
      date: "10/11/24",
      venue: "FRL Lab",
    },
    {
      name: "Design Dojo",
      startTime: "16:00",
      endTime: "18:00",
      date: "10/11/24",
      venue: "CSE Lab",
    },
    {
      name: "CC + DJ + Prize",
      startTime: "18:00",
      endTime: "23:59",
      date: "10/11/24",
    },
  ],
};

export { eventData };
