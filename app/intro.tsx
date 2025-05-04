import { View, Text, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from 'assets/fundoid-new.png';
import Intro from 'assets/images/home5.png';

const IntroScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={`px-5bg-red-100 flex h-full flex-1 flex-col bg-white px-5`}
      style={{ paddingVertical: insets.top }}>
      <View className="flex h-16 w-full items-center justify-center ">
        <Image source={Logo} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
      </View>
      <View className="mt-10 flex h-96 w-full items-center justify-center ">
        <Image source={Intro} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
      </View>
      <Text className="font-primary-bold mt-5 text-3xl uppercase leading-normal">
        Making team knowledge sharing fun & effortless
      </Text>
      <Text className="font-secondary-regular mt-5 text-lg text-gray-500">
        Fundoid helps your team organize weekly knowledge-sharing sessions with ease. Random
        presenter selection, anonymous ratings, push reminders — all handled automatically so you
        don’t have to chase anyone.
      </Text>
      <View className="flex-grow" />
      <View className="mt-auto flex flex-col gap-5">
        <Link
          href="/(tabs)/events"
          className="font-secondary-semibold bg-primary rounded-lg py-4 text-center text-xl  text-white">
          Join Organization
        </Link>
        <Link
          href="/(tabs)/events"
          className="font-secondary-semibold border-primary text-primary rounded-lg border bg-white py-4 text-center text-xl ">
          Create Organization
        </Link>
      </View>
    </View>
  );
};

export default IntroScreen;
