import { useFormik } from 'formik';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import Input from '../ui/Input';
import { useRouter } from 'expo-router';

const CreateOrgForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      orgName: '',
      orgUsername: '',
      email: '',
      password: '',
      fullName: '',
    },
    validationSchema: Yup.object({
      orgName: Yup.string().required('Organization Name is required'),
      orgUsername: Yup.string().required('Organization Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      fullName: Yup.string().required('Full Name is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      router.push('/(tabs)/events');
    },
  });

  return (
    <View className="flex  flex-col gap-5 px-1">
      <Input
        label="Organization Name"
        placeholder="Your organization's full name"
        value={formik.values.orgName}
        onChangeText={formik.handleChange('orgName')}
        isRequired
        error={formik.errors.orgName}
      />
      <Input
        label="Organization ID"
        placeholder="Enter unique ID (e.g. myorg123)"
        value={formik.values.orgUsername}
        onChangeText={formik.handleChange('orgUsername')}
        isRequired
        error={formik.errors.orgUsername}
      />
      <Input
        label="Your Email Address"
        placeholder="Enter your email address "
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        isRequired
        error={formik.errors.email}
        keyboardType="email-address"
      />
      <Input
        label="Password"
        placeholder="Enter password (minimum 6 characters)"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        isRequired
        error={formik.errors.password}
        secureTextEntry
      />
      <Input
        label="Confirm Password"
        placeholder="Enter password (minimum 6 characters)"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        isRequired
        error={formik.errors.password}
        secureTextEntry
      />
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        value={formik.values.fullName}
        onChangeText={formik.handleChange('fullName')}
        isRequired
        error={formik.errors.fullName}
      />

      <TouchableOpacity
        className="mt-3 rounded-lg bg-primary py-4"
        onPress={formik.handleSubmit as (e?: GestureResponderEvent) => void}>
        <Text className="text-center font-secondary-semibold text-lg uppercase text-white">
          Create Organization
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateOrgForm;
