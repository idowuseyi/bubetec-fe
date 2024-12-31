"use client";

// components/SplashScreen.tsx
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation;
import { useState } from "react";

const SplashScreen: React.FC = () => {
  // const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data with content
  const slides = [
    {
      id: 1,
      logo: "/images/BUBETECH_3.png", // Path to your logo
      motto: "Welcome to Bube Tech", // Motto text
      alt: "Bube Tech Logo", // Alt text for logo
    },
    {
      id: 2,
      info: "Reliable tech solutions at your fingertips.",
      logo: "/default-logo.svg", // Default logo path
      alt: "Bube Tech Logo",
    },
    {
      id: 3,
      info: "Get started with us today!",
      logo: "/default-logo.svg", // Default logo path
      alt: "Bube Tech Logo",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      // router.push("/signup");
      return <Link href="/signup">Signup</Link>;
    }
  };

  return (
    <div className="bg-blue flex h-screen flex-col items-center justify-center">
      {currentSlide === 0 ? (
        <>
          {/* Logo and Motto */}
          <Image
            src={slides[0].logo}
            width={200}
            height={200}
            alt={slides[0].alt}
            className="mb-4 size-32 animate-fadeIn"
          />
          <p className="mb-8 animate-fadeIn text-lg text-gray-700">
            {slides[0].motto}
          </p>
        </>
      ) : (
        <>
          {/* Info slides */}
          <p className="mb-8 animate-fadeIn text-lg text-gray-700">
            {slides[currentSlide].info}
          </p>
        </>
      )}
      {/* Button to navigate through slides */}
      <button
        type="button"
        className={`mt-8 rounded-md bg-blue-600 px-4 py-2 text-white 
          ${currentSlide === slides.length - 1 ? "animate-fadeIn" : ""}`}
        onClick={handleNext}
      >
        {currentSlide === slides.length - 1 ? "Signup" : "Next"}
      </button>
    </div>
  );
};

export default SplashScreen;
