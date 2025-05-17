import { Image } from 'expo-image';
import { Text, View } from 'react-native';

const OrgHeader = ({
  image,
  name,
  totalMembers,
}: {
  image: string;
  name: string;
  totalMembers: number;
}) => (
  <View className="flex-row gap-5  rounded-lg border border-greyBorder bg-white px-5 py-7 shadow">
    <View className="rounded-xl border-2 border-greyBorder p-1">
      <Image
        alt="Profile"
        source={image}
        contentFit="cover"
        transition={1000}
        style={{
          height: 70,
          width: 70,
        }}
      />
    </View>

    <View className="justify-center">
      <Text className="w-full font-secondary-bold text-xl uppercase text-black">{name}</Text>
      <Text className="font-secondary-regular text-lg text-greyText">{totalMembers} members</Text>
    </View>
  </View>
);

export default OrgHeader;
