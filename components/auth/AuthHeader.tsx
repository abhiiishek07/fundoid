import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from 'assets/fundoid-new.png';
import { Image } from 'expo-image';
import { Href, Link } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

const AuthHeader = ({ href }: { href: Href }) => {
  return (
    <View className="flex-row items-center p-5">
      {/* Back Button  */}
      <View className="w-1/3 items-start">
        <Link href={href} asChild>
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
  );
};

export default AuthHeader;
