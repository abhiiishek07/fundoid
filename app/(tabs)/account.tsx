import ProfileImage from 'assets/images/profile.png';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
  return (
    <View className="bg-background h-full w-full">
      <View className=" items-center bg-white px-5 py-7 shadow-sm">
        <Image
          alt="Profile"
          source={ProfileImage}
          contentFit="cover"
          transition={1000}
          style={{
            height: 110,
            width: 110,
            borderRadius: 10,

            borderColor: '#ddd',
          }}
        />

        <Text className="mt-2 font-secondary-semibold text-2xl text-black">Abhishek Kumar</Text>
        <View className="mt-1 flex-row items-center gap-2">
          <Ionicons name="briefcase" size={16} color="#6B7280" />
          <Text className="font-secondary-regular text-lg text-greyText">Frontend Developer</Text>
        </View>
        <View className="mt-1 flex-row items-center gap-2">
          <Ionicons name="mail" size={16} color="#6B7280" />
          <Text className="font-secondary-regular text-lg text-greyText">
            abhishek@roundtechsquare.com
          </Text>
        </View>

        <TouchableOpacity className="mt-4 rounded-lg border border-primary bg-white px-6 py-2 shadow-sm active:opacity-80">
          <Text className="font-primary-medium text-lg uppercase tracking-wider text-primary">
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-2 h-full bg-white p-5">
        <Text className="font-secondary-semibold text-lg text-black">Settings</Text>
        <Text className="mt-5 font-secondary-medium text-base text-black">Privacy Policy</Text>
        <Text className="mt-5 font-secondary-medium text-base text-black">Terms of use</Text>
        <Text className="mt-5 font-secondary-medium text-base text-black">Contact Us</Text>
        <TouchableOpacity className="mt-7 flex-row items-center justify-center gap-2 rounded-lg border border-red-600 p-5">
          <Ionicons name="log-out-outline" size={20} color={'#dc2626'} />
          <Text className="text-center font-primary-semibold text-xl uppercase tracking-wide text-red-600">
            Log Out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mx-auto mt-2 w-fit flex-row items-center justify-center gap-2 rounded-md p-5">
          <Ionicons name="trash" size={20} color={'#dc2626'} />
          <Text className="text-center font-primary-semibold text-xl uppercase tracking-wide text-red-600">
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
