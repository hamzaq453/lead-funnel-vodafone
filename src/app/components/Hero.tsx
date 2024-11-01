import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import HeroIMG from "../../../public/Hero.webp"

const Hero: FC = () => {
  return (
    <section className="relative bg-red-600 text-white">
      {/* Hintergrundüberlagerung */}
      <div className="absolute inset-0 opacity-80 bg-black/20"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 lg:py-28 space-y-12 lg:space-y-0">
        {/* Linker Inhalt */}
        <div className="text-center lg:text-left space-y-6 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Starte deine Karriere jetzt bei Vodafone!
          </h1>
          <p className="text-lg md:text-xl font-light">
            Bis zu 4.000 € Bonus, unbegrenzte Verdienstmöglichkeiten und volle Flexibilität.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#application"
              className="bg-white text-red-600 px-6 py-3 rounded-md text-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition"
            >
              Ja, jetzt bewerben <BsArrowRight size={22} />
            </Link>
          </div>
        </div>

        {/* Rechtes Bild */}
        <div className="relative w-full max-w-sm lg:max-w-md h-72 lg:h-96">
          <Image
            src={HeroIMG}
            alt="Vodafone-Team"
            className="rounded-md shadow-lg lg:mt-14"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
