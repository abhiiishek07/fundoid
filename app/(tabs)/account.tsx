import ProfileImage from 'assets/images/profile.png';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {
  return (
    <ScrollView className="h-full w-full bg-background" showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#4F46E5', '#7C3AED']} className="px-5 pb-10 pt-12">
        <View className="items-center">
          <View className="relative">
            <Image
              alt="Profile"
              source={ProfileImage}
              contentFit="cover"
              transition={1000}
              style={{
                height: 120,
                width: 120,
                borderRadius: 60,
                borderWidth: 3,
                borderColor: 'white',
              }}
            />
            <TouchableOpacity
              className="absolute bottom-0 right-0 rounded-full bg-white p-2 shadow-md"
              style={{ elevation: 4 }}>
              <Ionicons name="camera" size={20} color="#4F46E5" />
            </TouchableOpacity>
          </View>

          <Text className="mt-4 font-secondary-semibold text-2xl text-white">Abhishek Kumar</Text>
          <View className="mt-2 flex-row items-center gap-2">
            <Ionicons name="briefcase" size={16} color="rgba(255,255,255,0.9)" />
            <Text className="font-secondary-regular text-lg text-white/90">Frontend Developer</Text>
          </View>
          <View className="mt-1 flex-row items-center gap-2">
            <Ionicons name="mail" size={16} color="rgba(255,255,255,0.9)" />
            <Text className="font-secondary-regular text-lg text-white/90">
              abhishek@roundtechsquare.com
            </Text>
          </View>

          <TouchableOpacity
            className="mt-6 rounded-full bg-white px-8 py-3 shadow-lg active:opacity-90"
            style={{ elevation: 5 }}>
            <Text className="font-primary-medium text-base text-primary">Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View className="mt-2 h-full bg-white p-5">
        <Text className="font-secondary-semibold text-xl text-black">Settings</Text>

        <TouchableOpacity className="mt-6 flex-row items-center gap-4 rounded-xl bg-gray-50 p-4 active:bg-gray-100">
          <View className="rounded-full bg-primary/10 p-3">
            <Ionicons name="shield-checkmark" size={24} color="#4F46E5" />
          </View>
          <Text className="font-secondary-medium text-base text-black">Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" className="ml-auto" />
        </TouchableOpacity>

        <TouchableOpacity className="mt-4 flex-row items-center gap-4 rounded-xl bg-gray-50 p-4 active:bg-gray-100">
          <View className="rounded-full bg-primary/10 p-3">
            <Ionicons name="document-text" size={24} color="#4F46E5" />
          </View>
          <Text className="font-secondary-medium text-base text-black">Terms of use</Text>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" className="ml-auto" />
        </TouchableOpacity>

        <TouchableOpacity className="mt-4 flex-row items-center gap-4 rounded-xl bg-gray-50 p-4 active:bg-gray-100">
          <View className="rounded-full bg-primary/10 p-3">
            <Ionicons name="mail" size={24} color="#4F46E5" />
          </View>
          <Text className="font-secondary-medium text-base text-black">Contact Us</Text>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" className="ml-auto" />
        </TouchableOpacity>

        <TouchableOpacity className="mt-8 flex-row items-center justify-center gap-3 rounded-xl border border-red-600 bg-red-50 p-4 active:bg-red-100">
          <Ionicons name="log-out-outline" size={24} color="#dc2626" />
          <Text className="font-primary-semibold text-lg text-red-600">Log Out</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4 flex-row items-center justify-center gap-3 rounded-xl border border-red-600 bg-red-50 p-4 active:bg-red-100">
          <Ionicons name="trash" size={24} color="#dc2626" />
          <Text className="font-primary-semibold text-lg text-red-600">Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
