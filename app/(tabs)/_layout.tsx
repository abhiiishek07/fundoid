import { Tabs } from 'expo-router';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { TabBarIcon } from '~/components/ui/TabBarIcon';

const tabLabels: Record<string, string> = {
  events: 'Events',
  'next-presenter': 'Next Presenter',
  organization: 'Organization',
  profile: 'Profile',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 5,
          height: 80,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',

        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              fontFamily: focused ? 'Hind_600SemiBold' : 'Hind_400Regular',
              fontSize: 12,
              color,
              marginTop: 2,
            }}>
            {tabLabels[route.name] ?? route.name}
          </Text>
        ),
        tabBarButton: (props) => (
          <TouchableWithoutFeedback onPress={props.onPress}>
            <View className=" flex h-full items-center  ">{props.children}</View>
          </TouchableWithoutFeedback>
        ),
      })}>
      <Tabs.Screen
        name="events"
        options={{
          headerTitle: () => (
            <Text className="font-primary-semibold text-3xl  uppercase text-black">Events</Text>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="next-presenter"
        options={{
          headerTitle: () => (
            <Text className="font-primary-semibold text-3xl uppercase text-black">
              Next Presenter
            </Text>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="microphone" color={color} />,
        }}
      />
      <Tabs.Screen
        name="organization"
        options={{
          title: 'Organization',
          headerTitle: () => (
            <Text className="font-primary-semibold text-3xl uppercase text-black">
              Organization
            </Text>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="building" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: () => (
            <Text className="font-primary-semibold text-3xl uppercase text-black">Profile</Text>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
