import { Tabs } from 'expo-router';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { TabBarIcon } from '~/components/ui/TabBarIcon';
import { Platform } from 'react-native';

const tabLabels: Record<string, string> = {
  events: 'Events',
  'next-presenter': 'Next Presenter',
  organization: 'Organization',
  account: 'Account',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#f3f4f6',
        },
        headerTitleStyle: {
          fontFamily: 'Hind_600SemiBold',
        },
        tabBarStyle: {
          elevation: 0,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f3f4f6',
          height: Platform.OS === 'ios' ? 85 : 80,
          paddingBottom: Platform.OS === 'ios' ? 20 : 20,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: '#6B7280',
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              fontFamily: focused ? 'Hind_600SemiBold' : 'Hind_400Regular',
              fontSize: 12,
              color,
              marginTop: 0,
            }}>
            {tabLabels[route.name] ?? route.name}
          </Text>
        ),
        tabBarButton: (props) => (
          <TouchableWithoutFeedback onPress={props.onPress}>
            <View className="flex h-full items-center justify-center p-2">{props.children}</View>
          </TouchableWithoutFeedback>
        ),
        contentStyle: {
          paddingBottom: Platform.OS === 'ios' ? 85 : 80,
        },
      })}>
      <Tabs.Screen
        name="events"
        options={{
          headerTitle: () => (
            <View className="flex-row items-center">
              <Text className="font-primary-semibold text-3xl uppercase">Friday Factoid</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                focused ? 'bg-primary/10' : ''
              }`}>
              <TabBarIcon name="calendar" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="next-presenter"
        options={{
          headerTitle: () => (
            <View className="flex-row items-center">
              <Text className="font-primary-semibold text-3xl uppercase">Next Presenter</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                focused ? 'bg-primary/10' : ''
              }`}>
              <TabBarIcon name="microphone" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="organization"
        options={{
          headerTitle: () => (
            <View className="flex-row items-center">
              <Text className="font-primary-semibold text-3xl uppercase">Organization</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                focused ? 'bg-primary/10' : ''
              }`}>
              <TabBarIcon name="building" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerTitle: () => (
            <View className="flex-row items-center">
              <Text className="font-primary-semibold text-3xl uppercase">Account</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                focused ? 'bg-primary/10' : ''
              }`}>
              <TabBarIcon name="user" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
