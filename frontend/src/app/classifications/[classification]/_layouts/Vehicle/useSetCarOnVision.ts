import { NavigationSetCarModelContext } from "@/contexts/NavigationProvider";
import { useContext } from "react";

export default function useSetCarOnVision() {
  return useContext(NavigationSetCarModelContext)
}