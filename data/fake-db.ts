import ProfileImage from 'assets/images/profile.png';

interface Employee {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface OrganizationData {
  name: string;
  image: string;
  employees: Employee[];
}

export const organizationData: OrganizationData = {
  name: 'Round Tech Square',
  image: 'https://www.roundtechsquare.com/_next/static/media/roundtechsquare-logo.7180146a.webp',
  employees: [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      avatar: null,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager',
      avatar: null,
    },
    { id: 3, name: 'Mike Johnson', role: 'UX Designer', avatar: null },
    {
      id: 4,
      name: 'Abhishek Kumar',
      role: 'Frontend Developer',
      avatar: ProfileImage,
    },
    {
      id: 5,
      name: 'John Doe',
      role: 'Software Engineer',
      avatar: null,
    },
    {
      id: 6,
      name: 'Jane Smith',
      role: 'Product Manager',
      avatar: null,
    },
    { id: 7, name: 'Mike Johnson', role: 'UX Designer', avatar: null },
    {
      id: 8,
      name: 'Sarah Williams',
      role: 'Marketing Specialist',
      avatar: null,
    },
    {
      id: 9,
      name: 'Jane Smith',
      role: 'Product Manager',
      avatar: null,
    },
    { id: 10, name: 'Mike Johnson', role: 'UX Designer', avatar: null },
    {
      id: 11,
      name: 'Sarah Williams',
      role: 'Marketing Specialist',
      avatar: null,
    },
  ],
};
