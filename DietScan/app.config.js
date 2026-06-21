// app.config.js
// Dynamic config so Codemagic can build distinct dev/release variants
// (different bundle IDs/app names so they can be installed side-by-side).
//
// APP_VARIANT is set as an env var per Codemagic workflow:
//   "development" -> com.mango182.dietscan.dev  (DietScan Dev)
//   unset/"production" -> com.mango182.dietscan (DietScan)

const APP_VARIANT = process.env.APP_VARIANT ?? "production";
const IS_DEV = APP_VARIANT === "development";

const BASE_BUNDLE_ID = "com.mango182.dietscan";
const BUNDLE_ID = IS_DEV ? `${BASE_BUNDLE_ID}.dev` : BASE_BUNDLE_ID;
const APP_NAME = IS_DEV ? "DietScan Dev" : "DietScan";

export default {
  expo: {
    name: APP_NAME,
    slug: "dietscan",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: false,
      bundleIdentifier: BUNDLE_ID,
      infoPlist: {
        NSCameraUsageDescription:
          "DietScan needs camera access to scan paper documents and identify dietary restriction fields.",
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: BUNDLE_ID,
      permissions: ["CAMERA"],
      adaptiveIcon: {
        foregroundImage: "./assets/android-icon-foreground.png",
        backgroundImage: "./assets/android-icon-background.png",
        monochromeImage: "./assets/android-icon-monochrome.png",
      },
    },
    plugins: [
      "expo-router",
      [
        "expo-camera",
        {
          cameraPermission:
            "DietScan needs camera access to scan paper documents.",
        },
      ],
      "react-native-document-scanner-plugin",
      [
        "expo-splash-screen",
        {
          image: "./assets/splash-icon.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    extra: {
      appVariant: APP_VARIANT,
      eas: {
        // projectId: "" // fill in if/when you run `eas init`
      },
    },
    scheme: "dietscan",
  },
};