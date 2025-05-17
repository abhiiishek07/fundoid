import { Link } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '~/components/auth/AuthHeader';
import CreateOrgForm from '~/components/forms/create-org-form';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const CreateOrg = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F1F1F1]">
      <LinearGradient
        colors={['#4F46E5', '#6366F1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute h-full w-full opacity-5"
      />
      <View className="flex-1">
        <AuthHeader href="/(auth)" />

        <Animated.View
          entering={FadeInUp.springify().damping(15).mass(1).stiffness(100)}
          className="mt-8 flex-1 rounded-t-[3rem] border border-greyBorder bg-white px-6 pb-5 pt-10 shadow-lg">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            contentContainerStyle={{ paddingBottom: 40 }}
            keyboardVerticalOffset={100}
            className="flex-1">
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
              <Animated.View
                entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(200)}>
                <View className="flex-row items-center gap-3">
                  <View className="rounded-full bg-primary/10 p-2">
                    <Ionicons name="business" size={24} color="#4F46E5" />
                  </View>
                  <Text className="font-primary-bold text-3xl uppercase text-gray-900">
                    Let's Set Up Your Organization
                  </Text>
                </View>
                <Text className="mt-2 font-secondary-regular text-base text-greyText">
                  Create your organization and start sharing knowledge with your team
                </Text>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(400)}
                className="mt-8">
                <CreateOrgForm />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(600)}
                className="mt-8">
                <View className="flex-row items-center justify-center gap-2">
                  <View className="h-[1px] flex-1 bg-gray-200" />
                  <Text className="font-secondary-regular text-sm text-greyText">or</Text>
                  <View className="h-[1px] flex-1 bg-gray-200" />
                </View>

                <Text className="mt-8 text-center font-secondary-regular text-sm text-greyText">
                  Already a member of an organization?{' '}
                  <Link href="/(auth)/join-org" className="active:opacity-80">
                    <Text className="font-secondary-semibold text-primary">Join Organization</Text>
                  </Link>
                </Text>
              </Animated.View>
            </ScrollView>
          </KeyboardAvoidingView>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default CreateOrg;
