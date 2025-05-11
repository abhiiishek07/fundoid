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

const JoinOrg = () => {
  const [activeTab, setActiveTab] = useState<'existing' | 'new'>('existing');

  return (
    <SafeAreaView>
      <View className='className="h-full w-full bg-[#F1F1F1]'>
        <AuthHeader href="/(auth)" />

        <View className="border-greyBorder mt-8 h-full rounded-t-[3rem] border bg-white px-5 pb-5 pt-10 ">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            contentContainerStyle={{ paddingBottom: 40 }}
            keyboardVerticalOffset={100}
            className=" h-full ">
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
              <Text className=" font-primary-bold text-3xl uppercase">Let's Get You in!</Text>
              <View className="mt-7 h-full">
                <View className="border-greyBg bg-greyBg mx-auto flex-row justify-around gap-0 rounded-lg border p-2">
                  <TouchableOpacity
                    onPress={() => setActiveTab('existing')}
                    className={`w-1/2 rounded-lg  px-3 py-2 ${activeTab === 'existing' && 'border-greyBorder border bg-white drop-shadow-xl'}`}>
                    <Text
                      className={`text-center font-primary-semibold text-lg uppercase ${activeTab === 'existing' ? 'text-black' : 'text-greyText'}`}>
                      Existing Member
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setActiveTab('new')}
                    className={`w-1/2 rounded-lg  px-3 py-2 ${activeTab === 'new' && 'border-greyBorder border bg-white drop-shadow-xl'}`}>
                    <Text
                      className={`text-center font-primary-semibold text-lg uppercase ${activeTab === 'new' ? 'text-black' : 'text-greyText'}`}>
                      New Member
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="mt-5">
                  {activeTab === 'existing' ? <ExistingMemberForm /> : <NewMemberForm />}
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JoinOrg;
