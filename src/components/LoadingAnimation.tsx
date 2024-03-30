import { useEffect, useState, FC } from 'react';
import { Logo } from '../Logo';

// Define a type for the component's props
interface LoadingAnimationProps {
  onFinished: () => void; // onFinished is a function that doesn't return anything (void)
}

const LoadingAnimation: FC<LoadingAnimationProps> = ({ onFinished }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the animation after the component mounts
    setStartAnimation(true);

    // Set a timeout that matches the animation duration
    const timer = setTimeout(() => {
      onFinished();
    }, 1500); // Assuming the animation takes 1.5 seconds

    return () => clearTimeout(timer);
  }, [onFinished]);

  // The animation logic will go here, for now, it's just the Logo
  return <Logo />;
};

export default LoadingAnimation;
