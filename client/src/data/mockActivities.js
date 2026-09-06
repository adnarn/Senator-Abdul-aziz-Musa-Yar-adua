import meetingImage from '../assets/meeting-room.jpg'; // Adjust filename to match yours
import youth from '../assets/youth-workshop.jpg'; // Adjust filename to match yours

export const mockActivities = [
  {
    id: 1,
    title: "Town Hall Meeting - Katsina Central Zone",
    description: "Join us for a community town hall meeting to discuss development projects and community needs.",
    date: "2026-02-15",
    time: "10:00 AM",
    location: "Katsina Central Primary School",
    type: "event",
    image: meetingImage,
    postedBy: "Admin",
    postedAt: "2026-02-01T08:00:00Z"
  },
  {
    id: 2,
    title: "Agricultural Empowerment Program",
    description: "Distribution of farming inputs and training for 500 farmers across Katsina Central Zone.",
    date: "2026-02-20",
    time: "08:00 AM",
    location: "Katsina Central Farm Settlement",
    type: "program",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=400&fit=crop&crop=center&auto=format",
    postedBy: "Admin",
    postedAt: "2026-01-28T10:30:00Z"
  },
  {
    id: 3,
    title: "Youth Entrepreneurship Workshop",
    description: "A 3-day workshop on business development and financial literacy for youth in Katsina Central Zone.",
    date: "2026-03-01",
    time: "09:00 AM",
    location: "Senator's Zone Office",
    type: "workshop",
    image: youth,
    postedBy: "Admin",
    postedAt: "2026-01-25T14:20:00Z"
  },
  {
    id: 4,
    title: "Health Outreach Program",
    description: "Free medical checkups, malaria testing, and health education for underserved communities.",
    date: "2026-02-10",
    time: "07:00 AM",
    location: "Batagarawa Primary Health Center",
    type: "health",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop&crop=faces&auto=format",
    postedBy: "Admin",
    postedAt: "2026-01-20T09:15:00Z"
  },
  {
    id: 5,
    title: "Skills Acquisition Program",
    description: "Training in tailoring, welding, and ICT skills for 100 women and youth.",
    date: "2026-02-25",
    time: "09:00 AM",
    location: "Katsina Central Skills Center",
    type: "training",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=faces&auto=format",
    postedBy: "Admin",
    postedAt: "2026-01-18T11:45:00Z"
  }
];