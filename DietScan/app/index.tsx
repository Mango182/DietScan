import { View, Alert } from 'react-native';
import { Host, Column, Button, Icon } from '@expo/ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import DocumentScanner, {
  ScanDocumentResponseStatus,
} from 'react-native-document-scanner-plugin';
import { buttonStyle } from '@expo/ui/swift-ui/modifiers';

export default function HomeScreen() {
  const router = useRouter();

  const cameraIcon = Icon.select({
    ios: 'camera.fill',
    android: require('@expo/material-symbols/camera.xml'),
  });

  const scanDocument = async () => {
    try {
      const { scannedImages, status } = await DocumentScanner.scanDocument();

      if (status === ScanDocumentResponseStatus.Success && scannedImages?.length) {
        router.push({ pathname: '/review', params: { imageUri: scannedImages[0] } });
      }
    } catch {
      Alert.alert('Scan failed', 'Could not scan the document. Please try again.');
    }
  };

  return (
  <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
    <View style={{ flex: 1 }}>
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 12,
        alignItems: 'center',
      }}>
        <Host matchContents>
          <Column spacing={12} alignment="center">
            <Button onPress={scanDocument} modifiers={[buttonStyle("glass")]} >
              <Icon name={cameraIcon} />
            </Button>
          </Column>
        </Host>
      </View>
    </View>
  </SafeAreaView>
  );
}