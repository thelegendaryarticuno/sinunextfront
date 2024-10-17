import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface Plan {
  name: string;
  price: string;
  details: string[];
}
const PlanDetails = () => {
  const router = useRouter();
  const { planid } = router.query;
  const [plan, setPlan] = useState<Plan | null>(null);

  const plans: { [key: string]: Plan } = {
    silver: {
      name: "Silver Plan",
      price: "₹1099, 10th November",
      details: [
        "One-Day Full Fest Experience",
        "Affordable Option",
        "Meals and Accommodation Included",
        "Access to the DJ night",
      ],
    },
    gold: {
      name: "Gold Plan",
      price: "₹1499, 9th-10th November",
      details: [
        "Budget-Friendly Option",
        "Full Event Access for 2 Days",
        "On-Campus Accommodation",
        "Access to Exclusive Workshops",
      ],
    },
    platinum: {
      name: "Platinum Plan",
      price: "₹1799, 8th-10th November",
      details: [
        "Exclusive Goodies",
        "Hassle-Free Travel",
        "Access All Areas",
        "Premium Accommodation and Stay",
      ],
    },
  };
  useEffect(() => {
    if (typeof planid === "string" && plans[planid]) {
      setPlan(plans[planid]);
    }
  }, [planid]);

  if (!plan) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mx-auto py-10 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-6">{plan.name}</h1>
      <p className="text-xl mb-8">{plan.price}</p>
      <ul className="space-y-4 mb-12">
        {plan.details.map((detail: string, index: number) => (
          <li key={index} className="text-lg">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanDetails;
