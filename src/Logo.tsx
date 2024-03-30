import * as React from "react";
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
  Center,
} from "@chakra-ui/react";
import logo from "./assets/logo.png";

// Define a keyframe animation for moving the image from the center to the top
const moveUp = keyframes`
  0% { transform: translateY(50vh); opacity: 0.3; }
  100% { transform: translateY(0); opacity: 1; }
`;

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Apply the moveUp animation unless the user prefers reduced motion
  const animation = prefersReducedMotion
    ? undefined
    : `${moveUp} 1.5s ease-in-out forwards`;

  return (
    <Center h="100vh">
    <chakra.img
      src={logo}
      ref={ref}
      animation={animation}
      maxW={"90%"}
      transform="translate(-50%, -50%)"
      {...props}
    />
    </Center>
  );
});
