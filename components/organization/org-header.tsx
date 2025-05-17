import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OrgHeader = ({
  image,
  name,
  totalMembers,
}: {
  image: string;
  name: string;
  totalMembers: number;
}) => (
  <View className="overflow-hidden rounded-2xl">
    <LinearGradient
      colors={['#4F46E5', '#6366F1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="absolute h-full w-full opacity-30"
    />
    <View className="flex-row items-center gap-5 bg-white/80 p-6 backdrop-blur-md">
      <View className="overflow-hidden rounded-2xl">
        <Image
          alt="Profile"
          source={image}
          contentFit="cover"
          transition={1000}
          style={{
            height: 80,
            width: 80,
          }}
        />
      </View>

      <View className="flex-1 justify-center">
        <Text className="font-secondary-bold text-2xl text-gray-900">{name}</Text>
        <View className="mt-1 flex-row items-center">
          <View className="h-2 w-2 rounded-full bg-primary" />
          <Text className="ml-2 font-secondary-medium text-base text-greyText">
            {totalMembers} active members
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default OrgHeader;
