import React, { useState } from "react";
import Image from "next/image";
import logo from "../../app/assets/logo.png";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import useLanguageSwitcher from "@/controllers/useLanguageSwitcher";
import getLang from "@/controllers/language";

const data = getLang();

const Header = ({ navigationBar }) => {
  const [lang, setLang] = useLanguageSwitcher();

  return (
    <div>
      <header class="bg-slack-purple sticky top-0 text-white body-font justify-between flex">
        <div className="flex-col justify-center mx-4 my-2">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:mouse "
          >
            <Image alt="logo" src={logo} width={100} height={80}></Image>
          </a>
        </div>
        <div className="flex-col mx-4 my-2">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="/functionalities"
              className="px-4 py-2 mr-3 hover:text-purple-400"
            >
              {data.navigationBar.functionalities.charAt(0).toUpperCase() +
                data.navigationBar.functionalities.slice(1)}
            </a>
            <a
              href="/solutions"
              className="px-4 py-2 mr-3 hover:text-purple-400"
            >
              {data.navigationBar.solutions.charAt(0).toUpperCase() +
                data.navigationBar.solutions.slice(1)}
            </a>
            <a href="/company" className="px-4 py-2 mr-3 hover:text-purple-400">
              {data.navigationBar.company.charAt(0).toUpperCase() +
                data.navigationBar.company.slice(1)}
            </a>
            <a
              href="/resources"
              className="px-4 py-2 mr-3 hover:text-purple-400"
            >
              {data.navigationBar.resources.charAt(0).toUpperCase() +
                data.navigationBar.resources.slice(1)}
            </a>
            <a href="/prices" className="px-4 py-2 mr-3 hover:text-purple-400">
              {data.navigationBar.prices.charAt(0).toUpperCase() +
                data.navigationBar.prices.slice(1)}
            </a>
          </nav>
        </div>
        <div className="flex flex-wrap items-center text-base justify-center mx-4 my-2 md:ml-auto">
          <button
            className="mr-2"
            onClick={() => {
              setLang("pt");
              window.location.reload();
            }}
          >
            <span class="fi fi-br"></span>
          </button>
          <button
            className="mr-2"
            onClick={() => {
              setLang("en");
              window.location.reload();
            }}
          >
            <span class="fi fi-gb"></span>
          </button>
          <a
            href="/signin"
            className="px-4 py-2 mr-4 hover:text-purple-400 hover:text-slack-gold"
          >
            {data.navigationBar.signIn.charAt(0).toUpperCase() +
              data.navigationBar.signIn.slice(1)}
          </a>
          <button
            href="../sales"
            className="px-4 py-2 mr-4 bg-slack-purple text-white border-2 border-color-white rounded-md px-8 py-2 hover:bg-slack-gold hover:border-slack-gold hover:text-slack-purple"
          >
            {data.navigationBar.sales.charAt(0).toUpperCase() +
              data.navigationBar.sales.slice(1)}
          </button>
          <button
            href="/trial"
            className="px-4 py-2 border-2 bg-white text-purple-900 rounded-md px-8 py-2 hover:bg-slack-gold hover:border-slack-gold hover:text-slack-purple"
          >
            {data.navigationBar.freeRegister.charAt(0).toUpperCase() +
              data.navigationBar.freeRegister.slice(1)}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
