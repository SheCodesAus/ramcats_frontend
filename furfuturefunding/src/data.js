export const oneOpportunity = {
  id: 1,
  owner: 2,
  organisation: {
    id: 1,
    name: "Tech Innovators Ltd.",
    website: "https://techinnovators.com",
    description: "A leading tech solutions provider.",
    image: "https://example.com/logo.png",
  },
  eligibility: [1],
  type: [1],
  discipline: [1],
  title: "Software Development Internship 2025",
  description:
    "A 3-month internship program focused on developing skills in full-stack web development. The program includes mentorship and hands-on experience in real-world projects.",
  opportunity_url:
    "https://example.com/opportunities/software-dev-internship-2025",
  amount: "1500.00",
  is_open: true,
  create_date: "2025-01-19T01:09:58.129736Z",
  open_date: "2025-02-01T09:00:00Z",
  close_date: "2025-03-01T23:59:59Z",
  is_archive: false,
  attendance_mode: "ONLINE",
  location: "WA",
};

export const aus_states = [
  { id: [1], label: "New South Wales" },
  { id: [2], label: "Victoria" },
  { id: [3], label: "Queensland" },
  { id: [4], label: "South Australia" },
  { id: [5], label: "Western Australia" },
  { id: [6], label: "Tasmania" },
  { id: [7], label: "Northern Territory" },
  { id: [8], label: "Australian Capital Territory" },
];

export const discipline_options = [
  { id: [1], label: "Humanities" },
  { id: [2], label: "Computer Science" },
  { id: [3], label: "Chemistry" },
  { id: [4], label: "Biology" },
  { id: [5], label: "Engineering" },
  { id: [6], label: "Mathematics" },
];

export const type_options = [
  { id: [1], label: "Scholarship" },
  { id: [2], label: "Training course" },
  { id: [3], label: "Conference Ticket" },
  { id: [4], label: "Event Ticket" },
  { id: [5], label: "Mentor Program" },
  { id: [6], label: "Other" },
];

export const eligibility_options = [
  { id: [1], label: "Women in STEM" },
  { id: [2], label: "Aboriginal and Torres Strait Islander peoples" },
  { id: [3], label: "Refugees and Asylum Seekers" },
  { id: [4], label: "People with Disability" },
  { id: [5], label: "Low-income Families" },
  { id: [6], label: "First Generation University Students" },
];

export const attendance_mode = [
  { id: [1], label: "Online" },
  { id: [2], label: "Face to Face" },
];
