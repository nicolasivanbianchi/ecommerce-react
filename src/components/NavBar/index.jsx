import React from "react";
import CartWidget from "./CartWidget";
import ItemCount from "./ItemCount";

const NavBar = () => {
  return (
    <div>
      <div class="flex flex-wrap place-items-center">
        <section class="relative mx-auto">
          <nav class="flex justify-between bg-black text-white w-screen">
            <div class="px-5 xl:px-12 flex w-full items-center">
              <a class="text-3xl font-bold font-heading" href="#">
                <img class= "h-24" src="./mn.png" alt="logo mn edit by @agustinleonel"/>
                
              </a>

              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a class="hover:text-[#FEDB39] hover:underline underline-offset-8" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="hover:text-[#FEDB39] hover:underline underline-offset-8" href="#">
                    Catagory
                  </a>
                </li>
                <li>
                  <a class="hover:text-[#FEDB39] hover:underline underline-offset-8" href="#">
                    Collections
                  </a>
                </li>
                <li>
                  <a class="hover:text-[#FEDB39] hover:underline underline-offset-8" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>

              <div class="hidden xl:flex items-center space-x-5">

                <a class="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>

              <CartWidget />

              {/* START USER DROPDOWN */}
                <a class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
                {/* END USER DROPDOWN */}
              </div>
            </div>

            
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default NavBar;