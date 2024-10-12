import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/home">
              git init
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">
               Contact
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
