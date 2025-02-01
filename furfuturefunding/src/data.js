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
  { value: "NSW", label: "New South Wales" },
  { value: "VIC", label: "Victoria" },
  { value: "QLD", label: "Queensland" },
  { value: "SA", label: "South Australia" },
  { value: "WA", label: "Western Australia" },
  { value: "TAS", label: "Tasmania" },
  { value: "NT", label: "Northern Territory" },
  { value: "ACT", label: "Australian Capital Territory" },
];

export const disciplineOptions = [
  { value: 1, label: "Humanities" },
  { value: 2, label: "Computer Science" },
  { value: 3, label: "Chemistry" },
  { value: 4, label: "Biology" },
  { value: 5, label: "Engineering" },
  { value: 6, label: "Mathematics" },
];

export const typeOptions = [
  { value: 1, label: "Scholarship" },
  { value: 2, label: "Training course" },
  { value: 3, label: "Conference Ticket" },
  { value: 4, label: "Event Ticket" },
  { value: 5, label: "Mentor Program" },
  { value: 6, label: "Other" },
];

export const eligibilityOptions = [
  { value: 1, label: "Women in STEM" },
  { value: 2, label: "Aboriginal and Torres Strait Islander peoples" },
  { value: 3, label: "Refugees and Asylum Seekers" },
  { value: 4, label: "People with Disability" },
  { value: 5, label: "Low-income Families" },
  { value: 6, label: "First Generation University Students" },
];

export const attendanceMode = [
  { value: 1, label: "Online" },
  { value: 2, label: "Face to Face" },
];
