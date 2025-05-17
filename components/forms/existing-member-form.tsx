import { useFormik } from 'formik';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import Input from '../ui/Input';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const ExistingMemberForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      orgUsername: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      orgUsername: Yup.string().required('Organization Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      router.push('/(tabs)/events');
    },
  });

  return (
    <Animated.View
      entering={FadeInDown.springify().damping(15).mass(1).stiffness(100)}
      className="flex flex-col gap-5 px-1">
      <Input
        label="Organization ID"
        placeholder="Enter your organization Id"
        value={formik.values.orgUsername}
        onChangeText={formik.handleChange('orgUsername')}
        onBlur={formik.handleBlur('orgUsername')}
        isRequired
        error={formik.touched.orgUsername ? formik.errors.orgUsername : undefined}
        icon="business"
      />
      <Input
        label="Your Email Address"
        placeholder="Enter your email address"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        isRequired
        error={formik.touched.email ? formik.errors.email : undefined}
        keyboardType="email-address"
        icon="mail"
      />
      <Input
        label="Password"
        placeholder="Enter password (minimum 6 characters)"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        isRequired
        error={formik.touched.password ? formik.errors.password : undefined}
        secureTextEntry
        icon="lock-closed"
      />

      <TouchableOpacity
        className="mt-3 overflow-hidden rounded-xl bg-primary py-4 shadow-lg active:opacity-90"
        onPress={formik.handleSubmit as (e?: GestureResponderEvent) => void}>
        <Text className="text-center font-secondary-semibold text-lg text-white">
          Join Organization
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ExistingMemberForm;
