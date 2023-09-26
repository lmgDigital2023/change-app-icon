import { NativeModules } from "react-native";
export const changeIcon = (iconName, newPackageName) => NativeModules.ChangeIcon.changeIcon(iconName, newPackageName);
export const resetIcon = () => changeIcon();
export const getIcon = () => NativeModules.ChangeIcon.getIcon();
