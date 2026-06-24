import { Host, Column, Row, Button, Icon, Text } from '@expo/ui';
import { buttonStyle, controlSize } from '@expo/ui/swift-ui/modifiers';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';

export default function App() {
  const cameraIcon = Icon.select({
    ios: 'camera.fill',
    android: require('@expo/material-symbols/photo-camera.xml'),
  });

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['bottom']}
    >
    <View style={{        
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 16,
    }}>
      <Host>
        <Column spacing={12} alignment="center">
          <Button
            label="Take Photo"
            variant="filled"
            style={{ }}
            onPress={() => {console.log('Button pressed!'); Alert.alert('Button pressed!');}}
            modifiers={[buttonStyle('glass'), controlSize('large')]}
          >
            <Icon
              name={cameraIcon}
              color="black"
            />
          </Button>
        </Column>
      </Host>
    </View>
    </SafeAreaView>
  );
}