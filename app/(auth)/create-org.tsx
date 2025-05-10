import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from 'assets/fundoid-new.png';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateOrgForm from '~/components/forms/create-org-form';

const CreateOrg = () => {
  return (
    <SafeAreaView>
      <View className='className="h-full w-full bg-[#F1F1F1]'>
        <View className="flex-row items-center p-5">
          {/* Back Button  */}
          <View className="w-1/3 items-start">
            <Link href="/" asChild>
              <TouchableOpacity className="border-greyBorder rounded-xl border bg-white p-2 drop-shadow">
                <Ionicons name="chevron-back" size={26} />
              </TouchableOpacity>
            </Link>
          </View>

          {/* Logo  */}
          <View className="w-1/3 items-center">
            <Image
              source={Logo}
              contentFit="contain"
              transition={1000}
              style={{ height: 45, width: 208 }}
            />
          </View>

          {/* Spacer*/}
          <View className="w-1/3" />
        </View>

        <View className="border-greyBorder mt-8 h-full rounded-t-[3rem] border bg-white px-5 pb-5 pt-10 drop-shadow-lg">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            contentContainerStyle={{ paddingBottom: 40 }}
            keyboardVerticalOffset={100}
            className=" h-full ">
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
              <Text className=" font-primary-bold text-3xl uppercase">Create an organization</Text>
              <View className="mt-7 h-full">
                <CreateOrgForm />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateOrg;
