import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '~/components/auth/AuthHeader';
import ExistingMemberForm from '~/components/forms/existing-member-form';
import NewMemberForm from '~/components/forms/new-member-form';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const JoinOrg = () => {
  const [activeTab, setActiveTab] = useState<'existing' | 'new'>('existing');

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
          className="mt-8 flex-1 rounded-t-[3rem] border border-greyBorder bg-white px-5 pb-5 pt-10 shadow-lg">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            contentContainerStyle={{ paddingBottom: 40 }}
            keyboardVerticalOffset={100}
            className="h-full">
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
              <Animated.View
                entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(200)}>
                <View className="flex-row items-center gap-3">
                  <View className="rounded-full bg-primary/10 p-2">
                    <Ionicons name="people" size={24} color="#4F46E5" />
                  </View>
                  <Text className="font-primary-bold text-3xl uppercase text-gray-900">
                    Let's Get You in!
                  </Text>
                </View>
                <Text className="mt-2 font-secondary-regular text-base text-greyText">
                  Choose how you want to join your organization
                </Text>
              </Animated.View>

              <View className="mt-7">
                <Animated.View
                  entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(300)}
                  className="mx-auto flex-row justify-around gap-0 rounded-lg border border-greyBg bg-greyBg p-2">
                  <TouchableOpacity
                    onPress={() => setActiveTab('existing')}
                    className={`w-1/2 rounded-lg px-3 py-2 ${
                      activeTab === 'existing' && 'border border-greyBorder bg-white drop-shadow-xl'
                    }`}>
                    <View className="flex-row items-center justify-center space-x-2">
                      <Ionicons
                        name="person"
                        size={20}
                        color={activeTab === 'existing' ? '#4F46E5' : '#6B7280'}
                      />
                      <Text
                        className={`text-center font-primary-semibold text-lg uppercase ${
                          activeTab === 'existing' ? 'text-primary' : 'text-greyText'
                        }`}>
                        Existing Member
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setActiveTab('new')}
                    className={`w-1/2 rounded-lg px-3 py-2 ${
                      activeTab === 'new' && 'border border-greyBorder bg-white drop-shadow-xl'
                    }`}>
                    <View className="flex-row items-center justify-center space-x-2">
                      <Ionicons
                        name="person-add"
                        size={20}
                        color={activeTab === 'new' ? '#4F46E5' : '#6B7280'}
                      />
                      <Text
                        className={`text-center font-primary-semibold text-lg uppercase ${
                          activeTab === 'new' ? 'text-primary' : 'text-greyText'
                        }`}>
                        New Member
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Animated.View>

                <Animated.View
                  entering={FadeInDown.springify().damping(15).mass(1).stiffness(100).delay(400)}
                  className="mt-5">
                  {activeTab === 'existing' ? <ExistingMemberForm /> : <NewMemberForm />}
                </Animated.View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default JoinOrg;
