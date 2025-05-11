import Logo from 'assets/fundoid-new.png';
import Intro from 'assets/images/home5.png';
import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IntroScreen = () => {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <View className=" flex   h-full w-full flex-1 flex-col bg-white px-5 py-5">
        <View className="flex h-16 w-full items-center justify-center ">
          <Image source={Logo} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
        </View>
        <View className="mt-10 flex h-80 w-full items-center justify-center ">
          <Image source={Intro} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
        </View>
        <Text className="mt-5 font-primary-bold text-3xl uppercase leading-normal">
          Making team knowledge sharing fun & effortless
        </Text>
        <Text className="text-greyText mt-5 font-secondary-regular text-lg">
          Fundoid helps your team organize weekly knowledge-sharing sessions with ease. Random
          presenter selection, anonymous ratings, push reminders — all handled automatically so you
          don’t have to chase anyone.
        </Text>

        <View className="mt-5 flex flex-col gap-5">
          <Link
            href="/(auth)/join-org"
            className="rounded-lg bg-primary py-4 text-center font-secondary-semibold text-xl  text-white">
            Join Organization
          </Link>
          <Link
            href="/(auth)/create-org"
            className="rounded-lg border border-primary bg-white py-4 text-center font-secondary-semibold text-xl text-primary ">
            Create Organization
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
