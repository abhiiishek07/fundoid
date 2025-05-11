import { useFormik } from 'formik';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import Input from '../ui/Input';

const ExistingMemberForm = () => {
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
    },
  });

  return (
    <View className="flex  flex-col gap-5 px-1">
      <Input
        label="Organization ID"
        placeholder="Enter your organization Id"
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

      <TouchableOpacity
        className="mt-3 rounded-lg bg-primary py-4"
        onPress={formik.handleSubmit as (e?: GestureResponderEvent) => void}>
        <Text className="text-center font-secondary-semibold text-lg uppercase text-white">
          Join
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExistingMemberForm;
