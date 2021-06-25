import Layout from "@components/layout";
import Link from "next/link";
// import { motion } from "framer-motion";

export default function HomePage() {  
  return (
    <>
      <Layout title="Cekinkuy">
        <div className="flex flex-col px-5 md:px-20 h-full">
          <div className="py-5 mb-10">
            <p className="w-80 mb-5 text-white text-2xl sm:text-4xl xl:text-6xl mx-auto text-center sm:w-120 xl:w-180">
              Skor Kredit Retail Sepeda Motor di Indonesia
            </p>
            <p className="w-60 mb-10 text-white font-thin text-lg sm:text-2xl xl:text-4xl mx-auto text-center sm:w-112 xl:w-128">
              Cari tahu skor kredit Anda dan seperti apa Anda dari sisi finansial
            </p>
            <div className="text-center">
              <Link
                href="/credit-score"
                >
                <span className="bg-yellow-500 text-lg text-white p-2 px-5 rounded cursor-pointer">
                  Cek Score Anda
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="images/card.png"
              alt="card"
              className="w-10/12 sm:w-5/12 shadow-2xl lg:w-4/12 2xl:w-3/12"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
