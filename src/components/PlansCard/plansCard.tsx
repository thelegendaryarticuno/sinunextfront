import React from "react";
import ShineBorder from "@/components/magicui/shine-border";

const PlansCard: React.FC = () => {
  const plans = [
    {
      name: "Silver",
      price: "₹999, 10th November",
      features: [
        "One-Day Full Fest Experience",
        "Affordable",
        "Meals and Accommodation Included",
        "Access to the DJ night",
      ],
      buttonText: "Show More",
      bgColor: "bg-gray-500",
      tag: "One Day",
      tagColor: "bg-gray-500",
      borderColor: "border-gray-500",
    },
    {
      name: "Gold",
      price: "₹1299, 9th-10th November",
      features: [
        "Budget-Friendly Option",
        "Full Event Access for 2 Days",
        "On-Campus Accommodation",
        "rrrrrrrrrrrrrrrrr",
      ],
      buttonText: "Show More",
      bgColor: "bg-orange-400",
      tag: "Two Days",
      tagColor: "bg-orange-400",
      borderColor: "border-orange-400",
    },
    {
      name: "Platinum",
      price: "₹1799, 8th-10th November",
      features: [
        "Exclusive Goodies",
        "Hassle-Free Travel",
        "Access All Areas",
        "Comfortable Stay",
      ],
      buttonText: "Show More",
      bgColor: "bg-red-500",
      tag: "Three Days",
      tagColor: "bg-red-500",
      borderColor: "border-red-500",
    },
  ];

  return (
    <div className="flex justify-center gap-12 py-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`w-96 bg-gray-100 text-black shadow-lg relative border-2 ${plan.borderColor} rounded-lg dark:bg-stone-800 dark:text-white`}
        >
          <div
            className={`absolute top-0 left-0 w-full py-2 text-center font-semibold ${plan.tagColor} rounded-md`}
          >
            {plan.tag}
          </div>
          <div className="p-8 mt-12">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-xl mt-2">{plan.price}</p>
            <hr className="border-t-2 border-red-400 my-4" />
          </div>

          <ul className="mb-6 text-base px-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="mb-3">
                {feature}
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 rounded-md font-semibold text-black ${plan.bgColor}`}
          >
            {plan.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlansCard;
