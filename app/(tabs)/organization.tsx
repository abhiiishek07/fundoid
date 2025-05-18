import { Image } from 'expo-image';
import { FlatList, Text, View, TouchableOpacity, Animated } from 'react-native';
import OrgHeader from '~/components/organization/org-header';
import { organizationData } from '~/data/fake-db';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef, useEffect } from 'react';

interface Employee {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

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

  // Use the name to generate a consistent color for the same person
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

const EmployeeCard = ({ employee, index }: { employee: Employee; index: number }) => {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 100,
      tension: 50,
      friction: 7,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }],
        opacity: scaleAnim,
      }}>
      <TouchableOpacity
        className="my-1.5 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm active:opacity-90"
        style={{ elevation: 2 }}>
        {employee.avatar ? (
          <Image
            alt={employee.name}
            source={employee.avatar}
            contentFit="cover"
            transition={1000}
            style={{
              height: 56,
              width: 56,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#e5e7eb',
            }}
          />
        ) : (
          <View
            className="h-[56px] w-[56px] items-center justify-center rounded-2xl shadow-sm"
            style={{ backgroundColor: getRandomColor(employee.name) }}>
            <Text className="font-secondary-semibold text-xl font-bold text-white">
              {getInitials(employee.name)}
            </Text>
          </View>
        )}
        <View className="ml-4 flex-1">
          <Text className="font-secondary-semibold text-lg text-gray-900">{employee.name}</Text>
          <View className="mt-1 flex-row items-center">
            <Ionicons name="briefcase-outline" size={14} color="#6B7280" />
            <Text className="ml-1 font-secondary-regular text-base text-greyText">
              {employee.role}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="rounded-full bg-gray-50 p-2 active:bg-gray-100">
          <Ionicons name="ellipsis-horizontal" size={20} color="#6B7280" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Organization = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white p-5">
        <OrgHeader
          image={organizationData.image}
          name={organizationData.name}
          totalMembers={organizationData.employees.length}
        />
      </View>

      <View className="mt-3 flex-1">
        <View className="flex-1 rounded-t-3xl bg-white px-5">
          <View className="my-4 flex-row items-center justify-between">
            <View>
              <Text className="font-primary-semibold text-2xl text-gray-900">Members</Text>
              <Text className="mt-1 font-secondary-regular text-base text-greyText">
                Manage your team members
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center rounded-full bg-primary px-4 py-2.5 active:opacity-90">
              <Ionicons name="add" size={20} color="white" />
              <Text className="ml-1 font-primary-medium text-base text-white">Add Member</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={organizationData.employees}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => <EmployeeCard employee={item} index={index} />}
            contentContainerClassName=""
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="h-2" />}
          />
        </View>
      </View>
    </View>
  );
};

export default Organization;
