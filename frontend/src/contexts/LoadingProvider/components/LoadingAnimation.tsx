'use client';

import { AnimationControls } from "framer-motion";
import CurtainLoading from "./CurtainLoading";
import DotsLoading from "./DotsLoading";
import LettersLoading from "./LettersLoading";

interface LoadingAnimationProps {
  strategy: string,
  controls: AnimationControls
}

export default function LoadingAnimation({ strategy, controls }: LoadingAnimationProps) {
  switch (strategy) {
    case "dots":
      return <DotsLoading controls={controls} />;
    case "letters":
      return <LettersLoading innerText="Sign In" controls={controls} />;
    case "background":
    default:
      return <CurtainLoading controls={controls} />;
  }
}