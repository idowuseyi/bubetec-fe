// import SplashScreen from "./components/SplashScreen";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="p-4 text-base md:text-lg lg:text-xl">
    //   <h1>Welcome to BubeTech</h1>
    // </div>
    <div>
      {/* <SplashScreen /> */}
      <Image
        src="/images/BUBETECH_3.png"
        width={200}
        height={200}
        alt="Bube Tech Logo"
        className="mb-4 size-32 animate-fadeIn"
      />
    </div>
  );
}
