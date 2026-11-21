import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Review() {
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            resizeMode="contain"
            style={{ flex: 1 }}
          />
        ) : (
          <Text>No scan to review.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}