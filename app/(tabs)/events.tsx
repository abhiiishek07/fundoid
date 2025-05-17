import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

// Temporary mock data - replace with real data later
const mockThemes = [
  {
    id: 1,
    theme: 'Artificial Intelligence in Healthcare',
    status: 'upcoming',
    date: '2024-03-22',
    presenter: 'John Doe',
    description: 'Exploring the impact of AI on healthcare delivery and patient care',
    time: '11:00 AM',
    location: 'Conference Room A',
  },
  {
    id: 2,
    theme: 'Blockchain Technology',
    status: 'completed',
    date: '2024-03-15',
    presenter: 'Jane Smith',
    description: 'Understanding blockchain fundamentals and its applications',
    rating: 4.5,
    totalRatings: 12,
  },
  {
    id: 3,
    theme: 'Cloud Computing',
    status: 'completed',
    date: '2024-03-08',
    presenter: 'Mike Johnson',
    description: 'Overview of cloud computing platforms and best practices',
    rating: 4.2,
    totalRatings: 15,
  },
  {
    id: 4,
    theme: 'Cybersecurity Best Practices',
    status: 'upcoming',
    date: '2024-03-29',
    presenter: null,
    description: 'Essential security practices for modern applications',
    time: '11:00 AM',
    location: 'Conference Room A',
  },
];

const ThemeCard = ({ theme, onPress }: { theme: any; onPress: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm active:opacity-90"
      style={{ elevation: 2 }}>
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <View className="flex-row items-center">
            <Text className="font-secondary-semibold text-lg text-gray-900">{theme.theme}</Text>
            <View
              className={`ml-3 rounded-full px-3 py-1 ${
                theme.status === 'upcoming' ? 'bg-primary/10' : 'bg-green-100'
              }`}>
              <Text
                className={`font-primary-medium text-sm ${
                  theme.status === 'upcoming' ? 'text-primary' : 'text-green-600'
                }`}>
                {theme.status === 'upcoming' ? 'Upcoming' : 'Completed'}
              </Text>
            </View>
          </View>

          <View className="mt-2 flex-row items-center">
            <Ionicons name="calendar-outline" size={16} color="#6B7280" />
            <Text className="ml-1 font-secondary-regular text-base text-greyText">
              {theme.date}
            </Text>
          </View>

          {theme.presenter && (
            <View className="mt-1 flex-row items-center">
              <Ionicons name="person-outline" size={16} color="#6B7280" />
              <Text className="ml-1 font-secondary-regular text-base text-greyText">
                {theme.presenter}
              </Text>
            </View>
          )}

          {theme.status === 'completed' && (
            <View className="mt-2 flex-row items-center">
              <Ionicons name="star" size={16} color="#F59E0B" />
              <Text className="ml-1 font-secondary-regular text-base text-greyText">
                {theme.rating} ({theme.totalRatings} ratings)
              </Text>
            </View>
          )}
        </View>
        <Ionicons name="chevron-forward" size={20} color="#6B7280" />
      </View>
    </TouchableOpacity>
  );
};

const EventDetail = ({ theme, onClose }: { theme: any; onClose: () => void }) => {
  return (
    <View className="absolute inset-0 bg-white">
      <View className="bg-white p-5 shadow">
        <View className="flex-row items-center justify-between">
          <Text className="font-primary-semibold text-2xl text-gray-900">Event Details</Text>
          <TouchableOpacity onPress={onClose} className="rounded-full bg-gray-100 p-2">
            <Ionicons name="close" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 p-5" showsVerticalScrollIndicator={false}>
        <View className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <Text className="font-secondary-semibold text-xl text-gray-900">{theme.theme}</Text>

          <View className="mt-4 space-y-3">
            <View className="flex-row items-center">
              <Ionicons name="calendar-outline" size={20} color="#6B7280" />
              <Text className="ml-2 font-secondary-regular text-base text-greyText">
                {theme.date}
              </Text>
            </View>

            {theme.time && (
              <View className="flex-row items-center">
                <Ionicons name="time-outline" size={20} color="#6B7280" />
                <Text className="ml-2 font-secondary-regular text-base text-greyText">
                  {theme.time}
                </Text>
              </View>
            )}

            {theme.location && (
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={20} color="#6B7280" />
                <Text className="ml-2 font-secondary-regular text-base text-greyText">
                  {theme.location}
                </Text>
              </View>
            )}

            {theme.presenter && (
              <View className="flex-row items-center">
                <Ionicons name="person-outline" size={20} color="#6B7280" />
                <Text className="ml-2 font-secondary-regular text-base text-greyText">
                  {theme.presenter}
                </Text>
              </View>
            )}

            {theme.status === 'completed' && (
              <View className="flex-row items-center">
                <Ionicons name="star" size={20} color="#F59E0B" />
                <Text className="ml-2 font-secondary-regular text-base text-greyText">
                  {theme.rating} ({theme.totalRatings} ratings)
                </Text>
              </View>
            )}
          </View>

          <View className="mt-6">
            <Text className="font-secondary-semibold text-lg text-gray-900">Description</Text>
            <Text className="mt-2 font-secondary-regular text-base text-greyText">
              {theme.description}
            </Text>
          </View>

          {theme.status === 'upcoming' && !theme.presenter && (
            <TouchableOpacity className="mt-6 flex-row items-center justify-center rounded-full bg-primary px-6 py-3 active:opacity-90">
              <Ionicons name="hand-left" size={20} color="white" />
              <Text className="ml-2 font-primary-medium text-base text-white">
                Volunteer to Present
              </Text>
            </TouchableOpacity>
          )}

          {theme.status === 'completed' && (
            <TouchableOpacity className="mt-6 flex-row items-center justify-center rounded-full bg-primary px-6 py-3 active:opacity-90">
              <Ionicons name="star-outline" size={20} color="white" />
              <Text className="ml-2 font-primary-medium text-base text-white">
                Rate Presentation
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const Events = () => {
  const [selectedTheme, setSelectedTheme] = useState<any>(null);

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 p-5" showsVerticalScrollIndicator={false}>
        {mockThemes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} onPress={() => setSelectedTheme(theme)} />
        ))}
      </ScrollView>

      {selectedTheme && (
        <EventDetail theme={selectedTheme} onClose={() => setSelectedTheme(null)} />
      )}
    </View>
  );
};

export default Events;
