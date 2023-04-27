import React from "react";
const Footer = () => {
  return (
    <footer class=" text-primaryText text-16 p-4 bg-bgSidebar rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 h-32 py-24">
      <span class="text-10 text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <span class="hover:underline">@GMRIT</span>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-10 text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
