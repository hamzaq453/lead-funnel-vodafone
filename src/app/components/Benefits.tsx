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
          Your Benefits at a Glance!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Benefit Item */}
          <BenefitItem
            icon={<FaMoneyBillWave className="text-green-500" size={30} />}
            title="Financial Support & Bonus"
            description="Up to €4,000 bonus during your onboarding for a secure start."
          />
          <BenefitItem
            icon={<FaChartLine className="text-red-500" size={30} />}
            title="Unlimited Earning Potential"
            description="Earn an average of €5,000 - €8,000 per month (gross)."
          />
          <BenefitItem
            icon={<FaSuitcaseRolling className="text-yellow-500" size={30} />}
            title="Incentive Trips & Rewards"
            description="Enjoy frequent rewards and team-building trips."
          />
          <BenefitItem
            icon={<AiOutlineCar className="text-gray-600" size={30} />}
            title="Discounted Leasing"
            description="Get special leasing conditions with Mercedes & more."
          />
          <BenefitItem
            icon={<MdAccessTime className="text-blue-500" size={30} />}
            title="Flexible Working Hours"
            description="Manage your schedule with full time control."
          />
          <BenefitItem
            icon={<MdOutlineLocationOn className="text-orange-500" size={30} />}
            title="Local Flexibility"
            description="Work at your convenience wherever you are."
          />
          <BenefitItem
            icon={<MdOutlineSchool className="text-purple-500" size={30} />}
            title="Training Opportunities"
            description="Advance to a team leader role through ongoing training."
          />
          <BenefitItem
            icon={<RiRocketLine className="text-red-500" size={30} />}
            title="Free Intensive Coaching"
            description="Get coaching for faster success and career growth."
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#application"
            className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-500 transition"
          >
            Apply in 1 Minute!
          </Link>
        </div>
      </div>
    </section>
  );
};

// BenefitItem Component
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
