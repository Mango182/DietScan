import { Tabs, TabList, TabTrigger, TabSlot, TabTriggerSlotProps } from 'expo-router/ui';
import { GlassView } from 'expo-glass-effect';
import { SymbolView, SFSymbol } from 'expo-symbols';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const H = 64;

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const fg = useColorScheme() === 'dark' ? '#fff' : '#000';

  return (
    <Tabs>
      {/* Declares the tabs. <Tabs> only reads triggers from a TabList that is its
          direct child, so this hidden list registers the screens. The visible bar
          below switches between them by name. */}
      <TabList style={{ display: 'none' }}>
        <TabTrigger name="index" href="/" />
        <TabTrigger name="history" href="/history" />
      </TabList>

      <TabSlot />
      <View pointerEvents="box-none" style={[styles.row, { bottom: insets.bottom }]}>
        <GlassView style={styles.pill} isInteractive>
          <View style={styles.list}>
            <TabTrigger name="index" asChild>
              <TabButton icon="house.fill" label="Home" fg={fg} />
            </TabTrigger>
            <TabTrigger name="history" asChild>
              <TabButton icon="clock" label="History" fg={fg} />
            </TabTrigger>
          </View>
        </GlassView>

        <GlassView style={styles.circle} isInteractive>
          <Pressable style={styles.center} onPress={() => router.push('/scan')}>
            <SymbolView name="camera.fill" size={26} tintColor={fg} />
          </Pressable>
        </GlassView>
      </View>
    </Tabs>
  );
}

// `ref` is dropped from the slot props: its type targets TabTrigger's child, not Pressable.
type TabButtonProps = Omit<TabTriggerSlotProps, 'ref'> & { icon: SFSymbol; label: string; fg: string };

function TabButton({ icon, label, fg, isFocused, ...props }: TabButtonProps) {
  const color = isFocused ? '#0A84FF' : fg;
  return (
    <Pressable {...props} style={[styles.tab, isFocused && styles.tabActive]}>
      <SymbolView name={icon} size={24} tintColor={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { position: 'absolute', left: 20, right: 20, flexDirection: 'row', alignItems: 'center', gap: 12 },
  pill: { flex: 1, height: H, borderRadius: H / 2, overflow: 'hidden' },
  list: { flex: 1, flexDirection: 'row', padding: 4 },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: H / 2, gap: 2 },
  tabActive: { backgroundColor: 'rgba(120,120,128,0.2)' },
  label: { fontSize: 12, fontWeight: '600' },
  circle: { width: H, height: H, borderRadius: H / 2, overflow: 'hidden' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});