"use client"
import Image from "next/image";
import Link from "next/link";

import table from "../../../public/images/GraniteSqTable.png";
import cloudSofa from "../../../public/images/cloudSofa.png";
import p1 from "../../../public/images/p1.png";
import p2 from "../../../public/images/p2.png";
import p3 from "../../../public/images/p3.png";
import p4 from "../../../public/images/p4.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import user from "../../../public/logo&png/account-alert-outline.png";

export default function Shop() {
  return (
    <div>
      {/* NavBar */}
      
      <nav className="flex justify-between items-center px-6 md:px-16 py-4">
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

            {/* ant design lib icon */}
            <button>
              <ShoppingCartOutlined style={{ fontSize: "28px" }} />
            </button>
          </div>
        </nav>


      {/* Shop Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Shop</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="border rounded-lg shadow p-4">
              <Image
                src={p1}
                alt="Vintage Wooden Chair"
                width={300}
                height={200}
                className="mx-auto rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">Vintage Wooden Chair</h3>
              <p className="text-gray-600">Rs. 20,000</p>
            </div>
            {/* Product 2 */}
            <div className="border rounded-lg shadow p-4">
              <Image
                src={p2}
                alt="Modern Dining Set"
                width={300}
                height={200}
                className="mx-auto rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">Modern Dining Set</h3>
              <p className="text-gray-600">Rs. 75,000</p>
            </div>
            {/* Product 3 */}
            <div className="border rounded-lg shadow p-4">
              <Image
                src={p3}
                alt="Office Workstation"
                width={300}
                height={200}
                className="mx-auto rounded-md mt-[-190px]"
              />
              <h3 className="text-lg font-bold mt-4">Office Workstation</h3>
              <p className="text-gray-600">Rs. 90,000</p>
            </div>
            {/* Product 4 */}
            <div className="border rounded-lg shadow p-4">
              <Image
                src={p4}
                alt="Asgaard Sofa"
                width={300}
                height={200}
                className="mx-auto rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">Asgaard Sofa</h3>
              <p className="text-gray-600">Rs. 50,000</p>
            </div>
            {/* Product 5 */}
            <div className="border rounded-lg shadow p-4">
              <Image
                src={table}
                alt="Granite Table"
                width={300}
                height={200}
                className="mx-auto rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">Granite Table</h3>
              <p className="text-gray-600">Rs. 25,000</p>
            </div>
            {/* Product 6 */}
            <div className="border rounded-lg shadow p-4">
              <Image
                src={cloudSofa}
                alt="Cloud Sofa"
                width={300}
                height={200}
                className="mx-auto rounded-md"
              />
              
              <h3 className="text-lg font-bold mt-4">Cloud Sofa</h3>
              <p className="text-gray-600">Rs. 45,000</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
