import React from "react";
import House from "./assets/images/House.jpeg";
import Key from "./assets/images/Key.jpeg";

const Aboutus = () => {
  return (
    // <div>
    //   <span className="font-bold">About Us</span>
    //   <br />
    //   Welcome to RentalHouse Company, where comfort meets convenience and your
    //   dream home becomes a reality. With a passion for creating exceptional
    //   living spaces and a commitment to exceeding your expectations, we proudly
    //   introduce ourselves as your trusted partner in finding the perfect rental
    //   home. Our Story Founded with a vision to redefine rental living,
    //   RentalHouse Company began as a labor of love. We recognized that a home is
    //   not just a place to stay, but a canvas for memories waiting to be painted.
    //   With this philosophy, we embarked on a journey to curate homes that offer
    //   not just shelter, but an experience. Our Philosophy At RentalHouse
    //   Company, we believe that your home should reflect your lifestyle,
    //   aspirations, and individuality. Each property in our portfolio is
    //   handpicked and thoughtfully designed to offer the utmost comfort, style,
    //   and functionality. We understand that every renter has unique needs, and
    //   that's why we take pride in offering a diverse range of properties to
    //   cater to various preferences.
    //   <br />
    //   <br /> <span className="font-bold">Why Choose Us?</span>
    //   <br />
    //   <span className="font-bold">Quality Assuarance:</span>
    //   <br /> Our properties undergo rigorous quality checks to ensure they meet
    //   the highest standards of living. <br />{" "}
    //   <span className="font-bold">Personalized service:</span>
    //   <br /> Our dedicated team is here to guide you through every step of the
    //   rental process, providing personalized assistance to match you with the
    //   perfect home. <br />{" "}
    //   <span className="font-bold">Transparent Transactions:</span>
    //   <br /> We believe in transparency and integrity. Our rental agreements are
    //   clear, straightforward, and designed to protect both landlords and
    //   tenants. <br /> <span className="font-bold">Community Focus:</span>
    //   <br /> Beyond bricks and mortar, we're invested in building communities.
    //   Our properties are strategically located near essential amenities,
    //   fostering a sense of belonging. Our Commitment RentalHouse Cmpany is more
    //   than just a name; it's a commitment to excellence. We strive to create
    //   spaces that resonate with your lifestyle, allowing you to thrive in a home
    //   you're proud to call your own—even if it's just for a little while.
    //   Whether you're seeking a cozy apartment, a spacious family house, or a
    //   modern urban loft,RentalHouse Company has something for everyone. We
    //   invite you to explore our listings, discover the beauty of our properties,
    //   and envision a new chapter of your life with us.<br/> Thank you for considering
    //   RentalHouse Company as your partner in finding your next home. We look
    //   forward to being part of your journey.
    //   <br />
    //   <br />
    //   <span></span>
    //   <br /> Warm regards,
    //   <br />
    //   Gidion&Godfrey Founder,
    //   <br /> RentalHouse Company
    // </div>
    <div className="flex flex-col h-screen w-full justify-center bg-stone-100 items-center">
      <div className="w-11/12 h-full  flex flex-col">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "75%",
          }}
          className=" rounded-xl w-full"
        >
          <span className="flex w-full justify-center items-center">
            Welcome to RentalHouse{" "}
          </span>
          <div className="flex h-3/5 w-full border">
            <img className="flex rounded-t-md  w-full" src={House} alt="pc" />
          </div>
          <div className="flex mt-4 w-full flex-col items-center justify-center">
            <span>Welcome to RentalHouse </span>
            <hr className="border-1 w-4/5 border-blue-500 " />
          </div>
          <div className="flex rounded-b-xl mt-4 h-1/5 bg-white">
            <div className="flex w-1/3 ">
              <img className="rounded-bl-xl" src={Key} alt="pic" />
            </div>
            <div className="flex   w-2/3 ">
              <span className="flex justify-center items-center text-sm">
                Welcome to RentalHouse Company, where comfort meets convenience
                and your dream home becomes a reality. With a passion for
                creating exceptional living spaces and a commitment to exceeding
                your expectations.
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: "20%",
          }}
          className="mt-8"
        >
          <div className="flex w-1/3 shadow-2xl rounded-lg h-full justify-center items-center bg-white flex-col ">
            <span>Tenants</span>
            <hr className="border-1 w-4/5 border-blue-500 " />

            <span className="flex p-2 justify-center items-center">
              Finding your ideal rental home is our priority. Discover
              thoughtfully curated properties designed to fit your lifestyle and
              create lasting memories
            </span>
          </div>
          <div className="flex w-1/3 shadow-2xl rounded-lg h-full justify-center items-center bg-white flex-col ">
            <span>Owners</span>
            <hr className="border-1 w-4/5 border-blue-500 " />
            <span className="text-sm p-2 flex justify-center items-center">
              we're here to simplify property management for you. Trust us to
              handle tenant relationships, maintenance, and everything in
              between, so you can enjoy the rewards of your investment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
