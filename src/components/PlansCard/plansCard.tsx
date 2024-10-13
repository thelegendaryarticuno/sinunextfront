import React from "react";

const PlansCard: React.FC = () => {
  const plans = [
    {
      name: "Silver",
      price: "₹1000",
      features: [
        "aaaaaa", 
        "ssssssssss", 
        "dddddddddddd", 
        "fffffffffffff",
    ],
      buttonText: "Show More",
      bgColor: "bg-green-600",
    },
    {
      name: "Gold",
      price: "₹1500",
      features: [
        "qqqqqqqq",
        "wwwwwwwwwwww",
        "eeeeeeeeeeeeee", 
        "rrrrrrrrrrrrrrrrr",
    ],
      buttonText: "Show More",
      bgColor: "bg-pink-600",
    },
    {
      name: "Platinum",
      price: "₹1800",
      features: [
        "zzzzzzzz", 
        "xxxxxxxxxxxx", 
        "cccccccccccccccccc", 
        "vvvvvvvvvvvvvvvvvvvv"],
      buttonText: "Show More",
      bgColor: "bg-yellow-600",
    },
  ];

  return (
    <div className="flex justify-center gap-12 py-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="w-96 p-8 bg-gray-800 rounded-lg text-white shadow-lg"
        >
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-xl mt-2">{plan.price}</p>
            {/* Horizontal line below name and price */}
            <hr className="border-t-2 border-gray-400 my-4" />
          </div>
          <ul className="mb-6 text-base">
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
