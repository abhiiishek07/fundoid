import { useFormik } from 'formik';
import { GestureResponderEvent, Text, TouchableOpacity, View, Animated } from 'react-native';
import * as Yup from 'yup';
import Input from '../ui/Input';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';

const NewMemberForm = () => {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const formik = useFormik({
    initialValues: {
      orgUsername: '',
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
    },
    validationSchema: Yup.object({
      orgUsername: Yup.string().required('Organization Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        )
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password'),
      fullName: Yup.string()
        .required('Full Name is required')
        .min(2, 'Full Name must be at least 2 characters'),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      router.push('/(tabs)/events');
    },
  });

  return (
    <Animated.View style={{ opacity: fadeAnim }} className="flex flex-col gap-5 px-1">
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
      <Input
        label="Confirm Password"
        placeholder="Confirm your password"
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
        isRequired
        error={formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}
        secureTextEntry
        icon="lock-closed"
      />
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        value={formik.values.fullName}
        onChangeText={formik.handleChange('fullName')}
        onBlur={formik.handleBlur('fullName')}
        isRequired
        error={formik.touched.fullName ? formik.errors.fullName : undefined}
        icon="person"
      />

      <TouchableOpacity
        className="mt-3 overflow-hidden rounded-xl bg-primary py-4 shadow-lg active:opacity-90"
        onPress={formik.handleSubmit as (e?: GestureResponderEvent) => void}>
        <Text className="text-center font-secondary-semibold text-lg text-white">
          Create Account & Join
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default NewMemberForm;
