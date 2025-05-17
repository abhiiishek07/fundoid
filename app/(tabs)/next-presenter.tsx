import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

// Temporary mock data - replace with real data later
const mockData = {
  nextPresenter: {
    name: 'John Doe',
    role: 'Frontend Developer',
    avatar: null,
    date: '2024-03-22',
    theme: 'Artificial Intelligence in Healthcare',
    selectedDate: '2024-03-20', // Wednesday when selected
  },
  volunteers: [
    {
      id: 1,
      name: 'Jane Smith',
      role: 'Backend Developer',
      avatar: null,
      theme: 'Blockchain Technology',
      submittedAt: '2024-03-19',
    },
    {
      id: 2,
      name: 'Mike Johnson',
      role: 'DevOps Engineer',
      avatar: null,
      theme: 'Cloud Computing',
      submittedAt: '2024-03-18',
    },
  ],
  recentPresenters: [
    {
      id: 1,
      name: 'Sarah Wilson',
      date: '2024-03-15',
      theme: 'Machine Learning Basics',
    },
    {
      id: 2,
      name: 'Alex Brown',
      date: '2024-03-08',
      theme: 'Web3 Development',
    },
  ],
};

const getInitials = (name: string) => {
  const names = name.split(' ');
  if (names.length >= 2) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return name[0].toUpperCase();
};

const getRandomColor = (name: string) => {
  const colors = [
    '#FF6B6B', // Coral Red
    '#4ECDC4', // Turquoise
    '#45B7D1', // Sky Blue
    '#96CEB4', // Sage Green
    '#FFEEAD', // Cream Yellow
    '#D4A5A5', // Dusty Rose
    '#9B59B6', // Purple
    '#3498DB', // Blue
    '#E67E22', // Orange
    '#2ECC71', // Green
  ];

  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

const VolunteerCard = ({ volunteer }: { volunteer: any }) => {
  return (
    <View className="mb-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <View className="flex-row items-center">
        <View
          className="h-[50px] w-[50px] items-center justify-center rounded-xl"
          style={{ backgroundColor: getRandomColor(volunteer.name) }}>
          <Text className="font-secondary-semibold text-lg font-bold text-white">
            {getInitials(volunteer.name)}
          </Text>
        </View>
        <View className="ml-4 flex-1">
          <Text className="font-secondary-semibold text-lg text-gray-900">{volunteer.name}</Text>
          <Text className="font-secondary-regular text-base text-greyText">{volunteer.role}</Text>
          <View className="mt-1 flex-row items-center">
            <Ionicons name="bulb-outline" size={16} color="#6B7280" />
            <Text className="ml-1 font-secondary-regular text-base text-greyText">
              {volunteer.theme}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const NextPresenter = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="p-5">
        {/* Next Presenter Section */}
        <View className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <Text className="font-primary-semibold text-xl text-gray-900">Upcoming Presentation</Text>

          <View className="mt-4 flex-row items-center">
            <View
              className="h-[60px] w-[60px] items-center justify-center rounded-xl"
              style={{ backgroundColor: getRandomColor(mockData.nextPresenter.name) }}>
              <Text className="font-secondary-semibold text-xl font-bold text-white">
                {getInitials(mockData.nextPresenter.name)}
              </Text>
            </View>
            <View className="ml-4 flex-1">
              <Text className="font-secondary-semibold text-lg text-gray-900">
                {mockData.nextPresenter.name}
              </Text>
              <Text className="font-secondary-regular text-base text-greyText">
                {mockData.nextPresenter.role}
              </Text>
            </View>
          </View>

          <View className="mt-4 rounded-xl bg-primary/5 p-4">
            <View className="flex-row items-center">
              <Ionicons name="bulb" size={20} color="#4F46E5" />
              <Text className="ml-2 font-secondary-semibold text-lg text-primary">
                {mockData.nextPresenter.theme}
              </Text>
            </View>
            <View className="mt-2 flex-row items-center">
              <Ionicons name="calendar" size={16} color="#6B7280" />
              <Text className="ml-2 font-secondary-regular text-base text-greyText">
                Friday, {mockData.nextPresenter.date}
              </Text>
            </View>
            <View className="mt-1 flex-row items-center">
              <Ionicons name="time" size={16} color="#6B7280" />
              <Text className="ml-2 font-secondary-regular text-base text-greyText">
                Selected on Wednesday, {mockData.nextPresenter.selectedDate}
              </Text>
            </View>
          </View>
        </View>

        {/* Volunteers Section */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between">
            <Text className="font-primary-semibold text-xl text-gray-900">Volunteers</Text>
            <TouchableOpacity
              onPress={() => setShowVolunteerForm(true)}
              className="flex-row items-center rounded-full bg-primary px-4 py-2 active:opacity-90">
              <Ionicons name="hand-left" size={20} color="white" />
              <Text className="ml-1 font-primary-medium text-base text-white">Volunteer</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-4">
            {mockData.volunteers.map((volunteer) => (
              <VolunteerCard key={volunteer.id} volunteer={volunteer} />
            ))}
          </View>
        </View>

        {/* Recent Presenters Section */}
        <View className="mt-6">
          <Text className="font-primary-semibold text-xl text-gray-900">Recent Presenters</Text>
          <View className="mt-4">
            {mockData.recentPresenters.map((presenter) => (
              <View
                key={presenter.id}
                className="mb-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <Text className="font-secondary-semibold text-lg text-gray-900">
                  {presenter.name}
                </Text>
                <View className="mt-1 flex-row items-center">
                  <Ionicons name="calendar-outline" size={16} color="#6B7280" />
                  <Text className="ml-1 font-secondary-regular text-base text-greyText">
                    {presenter.date}
                  </Text>
                </View>
                <View className="mt-1 flex-row items-center">
                  <Ionicons name="bulb-outline" size={16} color="#6B7280" />
                  <Text className="ml-1 font-secondary-regular text-base text-greyText">
                    {presenter.theme}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NextPresenter;
