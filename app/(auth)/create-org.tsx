import { Link } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '~/components/auth/AuthHeader';
import CreateOrgForm from '~/components/forms/create-org-form';

const CreateOrg = () => {
  return (
    <SafeAreaView>
      <View className='className="h-full w-full bg-[#F1F1F1]'>
        <AuthHeader href="/(auth)" />

        <View className="border-greyBorder mt-8 h-full rounded-t-[3rem] border bg-white px-5 pb-5 pt-10 drop-shadow-lg">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            contentContainerStyle={{ paddingBottom: 40 }}
            keyboardVerticalOffset={100}
            className=" h-full ">
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
              <Text className="font-primary-bold text-3xl uppercase">
                Let's Set Up Your Organization
              </Text>

              <View className="mt-7 h-full">
                <CreateOrgForm />
                <Text className="text-greyText pt-5 text-center font-secondary-regular text-sm">
                  Already a member of an organization?{' '}
                  <Link href="/(auth)/join-org">
                    <Text className="font-secondary-semibold text-primary">Join Organization</Text>
                  </Link>
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateOrg;
