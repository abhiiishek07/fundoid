import { Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useRef, useEffect } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  isRequired?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  secureTextEntry?: boolean;
  error?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  isRequired = false,
  keyboardType = 'default',
  secureTextEntry = false,
  error,
  icon,
}: InputProps) => {
  const isFocused = useRef(false);

  return (
    <Animated.View entering={FadeInDown.springify().damping(15).mass(1).stiffness(100)}>
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="font-secondary-medium text-base text-gray-900">
          {label}
          {isRequired && <Text className="text-red-500"> *</Text>}
        </Text>
        {error && (
          <Animated.Text entering={FadeIn} className="font-secondary-regular text-sm text-red-500">
            {error}
          </Animated.Text>
        )}
      </View>

      <View
        className={`flex-row items-center overflow-hidden rounded-xl border bg-white px-4 py-3 shadow-sm ${
          error ? 'border-red-500' : isFocused.current ? 'border-primary' : 'border-gray-200'
        }`}>
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={error ? '#EF4444' : isFocused.current ? '#4F46E5' : '#9CA3AF'}
            className="mr-2"
          />
        )}
        <TextInput
          className="flex-1 font-secondary-regular text-base text-gray-900"
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          onBlur={(e) => {
            isFocused.current = false;
            onBlur?.(e);
          }}
          onFocus={() => {
            isFocused.current = true;
          }}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {error && <Ionicons name="alert-circle" size={20} color="#EF4444" className="ml-2" />}
      </View>
    </Animated.View>
  );
};

export default Input;
