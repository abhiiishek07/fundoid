import { Text, TextInput, View } from 'react-native';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isRequired?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  secureTextEntry?: boolean;
  error?: string;
}

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  isRequired = false,
  keyboardType = 'default',
  secureTextEntry = false,
  error,
}: InputProps) => {
  return (
    <View>
      <View className="mb-1">
        <Text className="font-secondary-medium text-base text-black">
          {label}
          {isRequired && <Text className="text-red-600"> *</Text>}
        </Text>
      </View>

      <TextInput
        className={` text-greyText  rounded-md border bg-white px-3 text-base ${
          error ? 'border-red-500' : 'border-greyBorder'
        }`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />

      {/* Optionally, you can add an error text display below the input */}
      {/* {error && <Text className="text-xs text-red-500 mt-1">{error}</Text>} */}
    </View>
  );
};

export default Input;
