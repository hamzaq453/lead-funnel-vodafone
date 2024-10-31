import { FC } from "react";
import { FaUserTie, FaHandsHelping, FaSmile } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";

const Eligibility: FC = () => {
  return (
    <section className="bg-gray-100 py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-8 text-center">
          Was wir von Ihnen erwarten
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Eignungsanforderung */}
          <EligibilityItem
            icon={<FaUserTie size={30} className="text-yellow-500" />}
            title="Eigenmotivation & Verantwortung"
            description="Sie sollten gerne selbstständig arbeiten und Verantwortung übernehmen."
          />
          <EligibilityItem
            icon={<FaHandsHelping size={30} className="text-green-500" />}
            title="Kommunikationsfähigkeit"
            description="Freundliches und offenes Auftreten, um Kunden anzusprechen."
          />
          <EligibilityItem
            icon={<GiMuscleUp size={30} className="text-blue-500" />}
            title="Durchhaltevermögen"
            description="Eine starke Einstellung gegenüber Herausforderungen und der Wille zum Erfolg."
          />
          <EligibilityItem
            icon={<MdOutlineSchedule size={30} className="text-purple-500" />}
            title="Zeitmanagement"
            description="Fähigkeit zur effizienten Organisation und Verwaltung des eigenen Zeitplans."
          />
          <EligibilityItem
            icon={<FaSmile size={30} className="text-orange-500" />}
            title="Positive Einstellung"
            description="Ein positiver Ausblick, der Teamgeist und Wachstum fördert."
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#application"
            className="bg-red-600 text-white lg:px-8 lg:py-4 sm:px-8 md:px-6 md:py-6 sm:p-4 sm:py-6 rounded-md text-lg font-semibold hover:bg-red-500 transition"
          >
            Das passt zu mir! Weiter zur Bewerbung
          </a>
        </div>
      </div>
    </section>
  );
};

// EligibilityItem Komponente
interface EligibilityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EligibilityItem: FC<EligibilityItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Eligibility;
