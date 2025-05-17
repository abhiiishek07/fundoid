import Logo from 'assets/fundoid-new.png';
import Intro from 'assets/images/home5.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Dimensions, Image, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const IntroScreen = () => {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <LinearGradient
        colors={['#4F46E5', '#6366F1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute h-full w-full opacity-5"
      />
      <View className="flex h-full w-full flex-1 flex-col bg-white px-6 py-6">
        <Animated.View
          entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(100)}
          className="flex h-16 w-full items-center justify-center">
          <Image source={Logo} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
        </Animated.View>

        <Animated.View
          entering={FadeInUp.springify().damping(15).mass(1).stiffness(100).delay(300)}
          className="mt-8 flex h-80 w-full items-center justify-center">
          <Image source={Intro} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(500)}
          className="mt-8">
          <Text className="font-primary-bold text-3xl uppercase leading-tight text-gray-900">
            Making team knowledge sharing <Text className="text-primary">fun & effortless</Text>
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(700)}
          className="mt-4">
          <Text className="font-secondary-regular text-lg leading-relaxed text-greyText">
            Fundoid helps your team organize weekly knowledge-sharing sessions with ease. Random
            presenter selection, anonymous ratings, push reminders — all handled automatically so
            you don't have to chase anyone.
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(900)}
          className="mt-8 flex flex-col gap-4">
          <Link
            href="/(auth)/join-org"
            className="overflow-hidden rounded-xl bg-primary py-4 text-center font-secondary-semibold text-xl text-white shadow-lg active:opacity-90">
            <Text className="relative z-10">Join Organization</Text>
          </Link>
          <Link
            href="/(auth)/create-org"
            className="overflow-hidden rounded-xl border border-primary bg-white py-4 text-center font-secondary-semibold text-xl text-primary shadow-sm active:opacity-90">
            Create Organization
          </Link>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
