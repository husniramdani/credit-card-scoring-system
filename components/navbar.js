import Link from "next/link";

export default function Navbar({ title }) {  
  return (
    <>
    <header className="z-10 top-0 pt-3 pl-3 pr-5 flex justify-between items-center md:pt-10 md:px-16 xl:px-24">
      <div className="flex items-center">
        <p className="font-bold text-xl mb-0">Cekinkuy</p>
      </div>
      { title === "Cekinkuy" ?
        <Link
          href="/credit-score"
        >
          <button
            className="bg-blue-700 text-white p-2 rounded"
          >
            Cek Skor Anda
          </button>
        </Link>
        :
        <Link href="/">
          Back
        </Link>

      }
    </header>
    </>
  );
}
