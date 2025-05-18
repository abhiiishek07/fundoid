import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
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
      averageRating: 4.5,
      totalRatings: 12,
      userRating: 5, // Current user's rating
    },
    {
      id: 2,
      name: 'Alex Brown',
      date: '2024-03-08',
      theme: 'Web3 Development',
      averageRating: 4.2,
      totalRatings: 15,
      userRating: 4,
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

const NoPresenterCard = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 1.1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(pulse).start();
  }, []);

  return (
    <View className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <Text className="font-primary-semibold text-xl text-gray-900">Upcoming Presentation</Text>

      <View className="mt-6 items-center justify-center">
        <Animated.View
          style={{ transform: [{ scale: pulseAnim }] }}
          className="h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-100">
          <Ionicons name="help-circle" size={60} color="#9CA3AF" />
        </Animated.View>
        <Text className="mt-4 text-center font-secondary-semibold text-lg text-gray-900">
          No Presenter Selected Yet
        </Text>
        <Text className="mt-2 text-center font-secondary-regular text-base text-greyText">
          The next presenter will be selected on Wednesday at 12:00 AM
        </Text>
        <TouchableOpacity
          onPress={() => {}} // Will implement later
          className="mt-6 flex-row items-center rounded-full bg-primary px-6 py-3 active:opacity-90">
          <Ionicons name="hand-left" size={20} color="white" />
          <Text className="ml-2 font-primary-medium text-base text-white">
            Volunteer to Present
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RatingStars = ({
  rating,
  onRate,
  isEditable = false,
}: {
  rating: number;
  onRate?: (rating: number) => void;
  isEditable?: boolean;
}) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <View className="flex-row items-center">
      {stars.map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => isEditable && onRate?.(star)}
          disabled={!isEditable}
          className="mr-1">
          <Ionicons
            name={star <= rating ? 'star' : 'star-outline'}
            size={24}
            color={star <= rating ? '#F59E0B' : '#D1D5DB'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const AverageRating = ({ rating, totalRatings }: { rating: number; totalRatings: number }) => {
  return (
    <View className="flex-row items-center">
      <View className="flex-row items-center">
        <Ionicons name="star" size={16} color="#F59E0B" />
        <Text className="ml-1 font-secondary-semibold text-base text-gray-900">
          {rating.toFixed(1)}
        </Text>
      </View>
      <Text className="ml-1 font-secondary-regular text-sm text-greyText">
        ({totalRatings} ratings)
      </Text>
    </View>
  );
};

const RecentPresenterCard = ({ presenter }: { presenter: any }) => {
  return (
    <View className="mb-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <View className="flex-row items-start justify-between">
        <View className="flex-1">
          <Text className="font-secondary-semibold text-lg text-gray-900">{presenter.name}</Text>
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
        <View className="ml-4 items-end">
          <AverageRating rating={presenter.averageRating} totalRatings={presenter.totalRatings} />
          {presenter.userRating > 0 && (
            <View className="mt-2">
              <Text className="font-secondary-regular text-sm text-greyText">Your rating:</Text>
              <RatingStars rating={presenter.userRating} isEditable={false} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const PresenterCard = ({ presenter }: { presenter: any }) => {
  return (
    <View className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <Text className="font-primary-semibold text-xl text-gray-900">Upcoming Presentation</Text>

      <View className="mt-4 flex-row items-center">
        <View
          className="h-[60px] w-[60px] items-center justify-center rounded-xl"
          style={{ backgroundColor: getRandomColor(presenter.name) }}>
          <Text className="font-secondary-semibold text-xl font-bold text-white">
            {getInitials(presenter.name)}
          </Text>
        </View>
        <View className="ml-4 flex-1">
          <Text className="font-secondary-semibold text-lg text-gray-900">{presenter.name}</Text>
          <Text className="font-secondary-regular text-base text-greyText">{presenter.role}</Text>
        </View>
      </View>

      <View className="mt-4 rounded-xl bg-primary/5 p-4">
        <View className="flex-row items-center">
          <Ionicons name="bulb" size={20} color="#4F46E5" />
          <Text className="ml-2 font-secondary-semibold text-lg text-primary">
            {presenter.theme}
          </Text>
        </View>
        <View className="mt-2 flex-row items-center">
          <Ionicons name="calendar" size={16} color="#6B7280" />
          <Text className="ml-2 font-secondary-regular text-base text-greyText">
            Friday, {presenter.date} at 9:30 AM
          </Text>
        </View>
      </View>
    </View>
  );
};

const NextPresenter = () => {
  const [hasPresenter, setHasPresenter] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  // For demo purposes, we'll toggle this state
  useEffect(() => {
    setHasPresenter(!!mockData.nextPresenter);
  }, []);

  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="p-5">
        {hasPresenter ? <PresenterCard presenter={mockData.nextPresenter} /> : <NoPresenterCard />}

        {/* Recent Presenters Section */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between">
            <Text className="font-primary-semibold text-xl text-gray-900">Recent Presenters</Text>
            <TouchableOpacity className="flex-row items-center rounded-full bg-gray-100 px-3 py-1 active:opacity-90">
              <Text className="font-secondary-medium text-sm text-gray-600">View All</Text>
              <Ionicons name="chevron-forward" size={16} color="#4B5563" />
            </TouchableOpacity>
          </View>
          <View className="mt-4">
            {mockData.recentPresenters.map((presenter) => (
              <RecentPresenterCard key={presenter.id} presenter={presenter} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NextPresenter;
