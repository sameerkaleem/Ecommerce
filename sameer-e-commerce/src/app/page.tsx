"use client"
import Link from "next/link";
import Image from "next/image";
import rocketSofa from "../../public/images/rocketSofa.png";
import cloudSofa from "../../public/images/cloudSofa.png";
import table from "../../public/images/GraniteSqTable.png";
import asgaardSofa from "../../public/images/Asgard.png";
import p1 from "../../public/images/p1.png";
import p2 from "../../public/images/p2.png";
import p3 from "../../public/images/p3.png";
import p4 from "../../public/images/p4.png";
import b1 from "../../public/images/b1.png";
import b2 from "../../public/images/b2.png";
import b3 from "../../public/images/b3.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import user from "../../public/logo&png/account-alert-outline.png";

export default function Home() {
  return (
    <div>
      {/* Header and Hero Section */}
      <header>
        <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-[#FBEBB5]">
          {/* Logo */}
          <div>
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer"></span>
            </Link>
          </div>
          {/* Menu Links */}
          <ul className="hidden md:flex space-x-8 ml-[320px] text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-800 cursor-pointer ">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-gray-800 cursor-pointer">
              <Link href="/">About</Link>
            </li>
            <li className="hover:text-gray-800 cursor-pointer">Blog</li>
            <li className="hover:text-gray-800 cursor-pointer">Contact</li>
          </ul>
          <div className="flex items-center space-x-9">
            {/* alert icon */}
            <button>
              <Image src={user} alt="User" width={28} height={28} />
            </button>

            {/* search icon */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ai ai-Search"
              >
                <path d="M21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z" />
              </svg>
            </button>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ai ai-Heart"
              >
                <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
              </svg>
            </button>

            {/* ant design lib cart icon */}
            <button>
              <ShoppingCartOutlined style={{ fontSize: "28px" }} />
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-[#FBEBB5] py-10 md:py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 px-6 md:px-16 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Rocket single seater
              </h1>
              <p className="text-gray-600 mb-6">Starting from $250</p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
                Shop Now
              </button>
            </div>

            {/* Product Image */}
            <div className="md:w-1/2 px-6">
              <Image
                src={rocketSofa}
                alt="Rocket Single Seater"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </header>

      {/* Side Tables Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <Image
              src={table}
              alt="Side Table"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">Side Table</h3>
            <p className="text-gray-500">$120</p>
          </div>
          <div>
            <Image
              src={cloudSofa}
              alt="Side Table Cushion"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">Side Table</h3>
            <p className="text-gray-500">$100</p>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Top Picks For You</h2>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="text-center">
              <Image
                src={p1}
                alt="Product 1"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$150</p>
            </div>
            {/* Product 2 */}
            <div className="text-center">
              <Image
                src={p2}
                alt="Product 2"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$150</p>
            </div>
            {/* Product 3 */}
            <div className="text-center">
              <Image
                src={p3}
                alt="Product 3"
                width={200}
                height={200}
                className="mx-auto mt-[-150px]"
              />
              <h3 className="font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$150</p>
            </div>
            {/* Product 4 */}
            <div className="text-center">
              <Image
                src={p4}
                alt="Product 4"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="font-semibold mt-2">Product Title</h3>
              <p className="text-gray-500">$150</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-10 bg-yellow-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6 mb-6 md:mb-0">
            <Image
              src={asgaardSofa}
              alt="Asgaard Sofa"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 px-6">
            <h2 className="text-3xl font-bold mb-4">Asgaard Sofa</h2>
            <p className="text-gray-600 mb-4">$250</p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Blogs</h2>
          <p className="text-gray-500 mb-6">
            Find a bright ideal to suit your taste with our great selection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog 1 */}
            <div className="text-left">
              <Image
                src={b1}
                alt="Blog 1"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="font-bold mt-4">Blog Title 1</h3>
              <p className="text-gray-500 mt-2">
                Discover amazing tips and inspirations.
              </p>
            </div>
            {/* Blog 2 */}
            <div className="text-left">
              <Image
                src={b2}
                alt="Blog 2"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="font-bold mt-4">Blog Title 2</h3>
              <p className="text-gray-500 mt-2">
                Discover amazing tips and inspirations.
              </p>
            </div>
            {/* Blog 3 */}
            <div className="text-left">
              <Image
                src={b3}
                alt="Blog 3"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="font-bold mt-4">Blog Title 3</h3>
              <p className="text-gray-500 mt-2">
                Discover amazing tips and inspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-10 bg-[#FAF4F4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Instagram</h2>
          <p className="text-gray-600 mb-6">
            Follow us on Instagram to see the latest updates and inspirations!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
          {/* Follow Us Button */}
          <button className="rounded-full mt-6 px-6 py-2 bg-[#FAF4F4] text-black font-semibold hover:bg-white transition">
            Follow Us
          </button>
        </div>
      </section>
    </div>
  );
}
