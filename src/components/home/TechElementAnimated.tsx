"use client";

import Lottie from 'lottie-react';
import ProgrammingAnimation from '../../utils/constant/ProgrammingAnimation.json'


const TechElementAnimated = () => {
  return (
    <>
    <Lottie animationData={ProgrammingAnimation} loop={true} />
    </>
  );
};

export default TechElementAnimated;
