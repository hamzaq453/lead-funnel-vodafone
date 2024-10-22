'use client'
import { FC, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface FormData {
  jobImportance: string;
  customerExperience: string;
  contactTime: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

const FunnelForm: FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    jobImportance: "",
    customerExperience: "",
    contactTime: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.address) newErrors.address = "Address is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true); // Start the loader

    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false); // Stop the loader

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("There was an error. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-red-500 flex items-center justify-center px-4">
        <div className="bg-white p-8 max-w-lg w-full shadow-lg rounded-lg text-center">
          <AiOutlineCheckCircle className="text-green-500 mx-auto" size={80} />
          <h2 className="text-xl text-gray-800 font-bold mt-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mt-2">
            Your application has been submitted successfully. We will contact you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section  id="application" className="min-h-screen bg-red-500 flex flex-col items-center justify-center px-4 py-20">
    {/* Title above the card */}
    <h1 className="text-3xl font-bold mb-8 text-white">Start Application!</h1>

    <div className="bg-white text-gray-800 p-8 max-w-lg w-full shadow-lg rounded-lg">
      {/* Progress Bar */}
      <div className="relative w-full h-2 mb-6 bg-gray-300 rounded">
  <div
    className={`absolute h-2 bg-red-500 rounded transition-all`}
    style={{ width: `${((step - 1) / 3) * 100}%` }} // Adjusted logic
  ></div>
</div>


      {/* Step Components */}
      {step === 1 && (
        <Step1
          jobImportance={formData.jobImportance}
          onChange={(value) => handleChange("jobImportance", value)}
        />
      )}
      {step === 2 && (
        <Step2
          customerExperience={formData.customerExperience}
          onChange={(value) => handleChange("customerExperience", value)}
        />
      )}
      {step === 3 && (
        <Step3
          contactTime={formData.contactTime}
          onChange={(value) => handleChange("contactTime", value)}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          errors={errors}
          onChange={(field, value) => handleChange(field, value)}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNext}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            Next
          </button>
        )}
      </div>
    </div>
  </section>
      
  );
};

export default FunnelForm;

// Step1 Component
const Step1: FC<{ jobImportance: string; onChange: (value: string) => void }> = ({
  jobImportance,
  onChange,
}) => (
  <>
    <h2 className="text-xl font-bold mb-4">What is most important to you in a job?</h2>
    {["High Salary", "Flexibility", "Good Training", "Fun at Work", "Friendly Colleagues"].map(
      (option) => (
        <label key={option} className="block mb-2">
          <input
            type="radio"
            name="jobImportance"
            value={option}
            checked={jobImportance === option}
            onChange={() => onChange(option)}
            className="mr-2"
          />
          {option}
        </label>
      )
    )}
  </>
);

// Step2 Component
const Step2: FC<{ customerExperience: string; onChange: (value: string) => void }> = ({
  customerExperience,
  onChange,
}) => (
  <>
    <h2 className="text-xl font-bold mb-4">Do you have customer experience?</h2>
    {["Yes", "No"].map((option) => (
      <label key={option} className="block mb-2">
        <input
          type="radio"
          name="customerExperience"
          value={option}
          checked={customerExperience === option}
          onChange={() => onChange(option)}
          className="mr-2"
        />
        {option}
      </label>
    ))}
  </>
);

// Step3 Component
const Step3: FC<{ contactTime: string; onChange: (value: string) => void }> = ({
  contactTime,
  onChange,
}) => (
  <>
    <h2 className="text-xl font-bold mb-4">When can we contact you?</h2>
    {["Anytime", "Morning", "Afternoon", "Evening"].map((time) => (
      <label key={time} className="block mb-2">
        <input
          type="radio"
          name="contactTime"
          value={time}
          checked={contactTime === time}
          onChange={() => onChange(time)}
          className="mr-2"
        />
        {time}
      </label>
    ))}
  </>
);

// Step4 Component (Final Step with Validation and Loader)
const Step4: FC<{
  formData: FormData;
  errors: { [key: string]: string };
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}> = ({ formData, errors, onChange, onSubmit, loading }) => (
  <>
    <h2 className="text-xl font-bold mb-4">Almost there! Please fill in your details.</h2>

    <div className="mb-4">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => onChange("fullName", e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
    </div>

    <div className="mb-4">
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    </div>

    <div className="mb-4">
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>

    <div className="mb-4">
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => onChange("address", e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      />
      {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
    </div>

    <button
      onClick={onSubmit}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 w-full flex items-center justify-center"
      disabled={loading}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      ) : (
        "Submit Application"
      )}
    </button>
  </>
);
