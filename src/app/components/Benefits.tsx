import { FC } from "react";
import { FaMoneyBillWave, FaChartLine, FaSuitcaseRolling } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";
import { MdAccessTime, MdOutlineLocationOn, MdOutlineSchool } from "react-icons/md";
import { RiRocketLine } from "react-icons/ri";
import Link from "next/link";

const Benefits: FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-8 text-center">
          Ihre Vorteile auf einen Blick!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Vorteil Element */}
          <BenefitItem
            icon={<FaMoneyBillWave className="text-green-500" size={30} />}
            title="Finanzielle Unterstützung & Bonus"
            description="Bis zu 4.000 € Bonus während der Einarbeitung für einen sicheren Start."
          />
          <BenefitItem
            icon={<FaChartLine className="text-red-500" size={30} />}
            title="Unbegrenztes Verdienstpotenzial"
            description="Verdienen Sie im Durchschnitt 5.000 € - 8.000 € pro Monat (brutto)."
          />
          <BenefitItem
            icon={<FaSuitcaseRolling className="text-yellow-500" size={30} />}
            title="Incentive-Reisen & Prämien"
            description="Genießen Sie regelmäßige Prämien und Teamreisen."
          />
          <BenefitItem
            icon={<AiOutlineCar className="text-gray-600" size={30} />}
            title="Vergünstigtes Leasing"
            description="Erhalten Sie spezielle Leasingkonditionen bei Mercedes & mehr."
          />
          <BenefitItem
            icon={<MdAccessTime className="text-blue-500" size={30} />}
            title="Flexible Arbeitszeiten"
            description="Gestalten Sie Ihren Zeitplan mit voller Kontrolle."
          />
          <BenefitItem
            icon={<MdOutlineLocationOn className="text-orange-500" size={30} />}
            title="Lokale Flexibilität"
            description="Arbeiten Sie ganz nach Belieben, wo immer Sie möchten."
          />
          <BenefitItem
            icon={<MdOutlineSchool className="text-purple-500" size={30} />}
            title="Schulungsmöglichkeiten"
            description="Werden Sie durch kontinuierliche Schulungen zum Teamleiter."
          />
          <BenefitItem
            icon={<RiRocketLine className="text-red-500" size={30} />}
            title="Kostenloses Intensiv-Coaching"
            description="Erhalten Sie Coaching für schnelleren Erfolg und Karrierewachstum."
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#application"
            className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-500 transition"
          >
            In 1 Minute bewerben!
          </Link>
        </div>
      </div>
    </section>
  );
};

// BenefitItem Komponente
interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Benefits;
