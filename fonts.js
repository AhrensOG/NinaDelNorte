import { Roboto } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import { Alegreya } from "next/font/google";

export const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const GreatVibesFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});
export const AlegreyaFont = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
