import React, { useEffect, useState } from "react";
import House from "./assets/images/House.jpeg";
import Key from "./assets/images/Key.jpeg";
import { EmailIcon } from "@chakra-ui/icons";

const Aboutus = () => {
  const images = [
    "https://www.clipartmax.com/png/middle/146-1468818_quality-rentals-offers-the-best-student-housing-in-house-for-rent-logo.png",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLjcY1JLqNmhKScB4FjGnRzz6E-wooXVO0w&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFBmJoOo5z941uhr1ijlCL2rQgvzoKA1eVA&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SiIm8h0Jg8vR9rDVOraLTuygIHnoUp2qVw&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2vQxLZOiZaQYtEy_h-UHOIq_EZjDB4LZQg&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ParV0H97-MzMyXkqWUbw-TjdJ8rsk3XmGQ&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh-tqeOXDKLL4nWQv7A5LFcTRtgABgWH_5Q&usqp=CAU",
  ];

 interface SliderProps {
   images: string[]; // Array of image URLs
   interval?: number; // Interval in milliseconds between image changes (default is 3000 ms)
 }

 const AutoSlider: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
     const timer = setInterval(() => {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     }, interval);

     return () => clearInterval(timer);
   }, [images.length, interval]);

   return (
     <div className="flex w-full h-full slider">
       {images.map((image, index) => (
         <img
           key={index}
           src={image}
           alt={`Image ${index}`}
           className={index === currentIndex ? "visible" : "hidden"}
           style={{width:"100%",borderRadius:"10px"}}
         />
       ))}
     </div>
   );
 };


  return (
    <div className="flex flex-col h-full w-full justify-center border border-black bg-stone-100 items-center">
      <div className="flex flex-col h-full  w-6/6 justify-center bg-stone-100 items-center">
        <div className="w-11/12 h-full  flex flex-col">
          <div className=" rounded-xl w-full flex flex-col h-2/3">
            <span className="flex w-full justify-center items-center">
              Welcome to RentalHouse{" "}
            </span>
            <div className="flex h-3/5 w-full ">
              {/* <img className="flex rounded-t-md  w-full" src={House} alt="pc" /> */}
              <AutoSlider images={images} interval={4000} />
            </div>
            <div className="flex mt-4 w-full flex-col items-center justify-center">
              <span>Welcome to RentalHouse </span>
              <hr className="border-1 w-4/5 border-blue-500 " />
            </div>
            <div className="flex rounded-b-xl mt-4 h-auto bg-white">
              <div className="flex w-auto">
                <img className="rounded-bl-xl w-auto" src={Key} alt="pic" />
              </div>

              <div className="flex w-auto">
                <span className="flex justify-center sm:text-sm items-center text-sm">
                  Welcome to RentalHouse Company, where comfort meets
                  convenience and your dream home becomes a reality. With a
                  passion for creating exceptional living spaces and a
                  commitment to exceeding your expectations.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex sm:flex-col md:flex-col sm:flex md:flex  w-full flex-row justify-evenly h-auto">
            <div className="flex w-full shadow-2xl rounded-lg h-full justify-center items-center bg-white flex-col ">
              <span>OUR CUSTOMERS</span>
              <hr className="border-1 w-4/5 border-blue-500 " />

              <span className="flex p-2 justify-center items-center text-center">
                Finding your ideal rental home is our priority. Discover
                thoughtfully curated properties designed to fit your lifestyle
                and create lasting memories. we're here to simplify property
                management for you. Trust us to handle tenant relationships,
                maintenance, and everything in between, so you can enjoy the
                rewards of your investment
              </span>
            </div>
          </div>
          <div className="flex flex-col pt-2 pb-4">
            <span className="font-bold">Contacts:</span>
            <span className="font-bold pi pi-phone pt-1">
              <a href="tel:+255 767 164 152">
                <span className="pl-1">+255 767 164 152</span>
              </a>
            </span>

            <span className="font-bold pi pi-whatsapp pt-1">
              <a href="https://wa.me/+255767164152">
                <span className="pl-1">+255 767 164 152</span>
              </a>
            </span>

            <span className="font-bold pi pi-whatsapp pt-1">
              <a href="https://wa.me/+255744703181">
                <span className="pl-1">+255 744 703 181</span>
              </a>
            </span>

            <span className="font-bold pt-1">
              <a href="mailto:gidionmushy7@gmail.com">
                <EmailIcon />
                <span className="pl-1">gidionmushy7@gmail.com</span>
              </a>
            </span>

            <span className="font-bold pt-1">
              <a href="mailto:gidionmushy6@gmail.com">
                <EmailIcon />
                <span className="pl-1">gidionmushy6@gmail.com</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
