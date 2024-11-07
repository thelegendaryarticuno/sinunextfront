import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SEOComponent from "@/components/SEOComponent/SEOComponent";
import Link from "next/link";

interface Plan {
  name: string;
  price: string;
  details: string[];
  extraInfo?: string;
  date: string;
}

const PlanDetails = () => {
  const router = useRouter();
  const { planid } = router.query;
  const [plan, setPlan] = useState<Plan | null>(null);

  const plans: { [key: string]: Plan } = {
    silver: {
      name: "Silver Plan",
      price: "₹1099",
      date: " 10th November",
      details: [
        "One day All-Access Pass",
        "Budget friendly",
        "Meals & Accommodation included",
        "DJ night access",
      ],
      extraInfo: `Transportation:
      - Pick-Up: No pickup services will be provided from our side on 10th November.
      - Drop-Off: 8:00 AM on November 11th, 2024.
      
      Mess Services:
      - Mess service will be provided, which includes 2 meals each for 1 day.
      
      Accommodation:
      - Separate rooms will be provided in hostels for both boys and girls for 1 day.
      
      DJ Night:
      - Scheduled for November 10th, 2024.
      
      Return And Refund Policy:
      - No refund will be provided after registration in any case.`,
    },
    gold: {
      name: "Gold Plan",
      price: "₹1499",
      date: "9th-10th November",
      details: [
        "Affordable All-Access Pass",
        "Full Access to All Events for 2 Days",
        "Convenient On-Campus Stay",
        "Exclusive Entry to DJ Night",
      ],
      extraInfo: `Transportation:
      - Pick-Up: No pickup services will be provided from our side on 9th November.
      - Drop-Off: 8:00 AM on November 11th, 2024.
      
      Mess Services:
      - Mess service will be provided, which includes 2 meals each for 2 days.
      
      Accommodation:
      - Separate rooms will be provided in hostels for both boys and girls for 2 days.
      
      DJ Night:
      - Scheduled for November 10th, 2024.

      Return And Refund Policy:
      - No refund will be provided after registration in any case

      Early bird offer: On registration by 25th Oct, a clothing voucher worth Rs. 750 from the sponsor will be provided.`,
    },
    platinum: {
      name: "Platinum Plan",
      price: "₹1799",
      date: "8th-10th November",
      details: [
        "All-Access Adventure for 3 days",
        "Hassle-Free Travel",
        "Meals and Accommodation inclusive",
        "Exclusive DJ Night Access",
        "Comfortable Stay",
        "Platinum Exclusive Infinix Zone Pass",
      ],
      extraInfo: `Transportation:
      Both pickup and drop will be provided.
      - Pick-Up: 8:00 AM on November 8th, 2024
      - Drop-Off: 8:00 AM on November 11th, 2024

      Mess Services:
      - Mess service will be provided, which includes 2 meals each for 3 days.
      
      Accommodation:
      - Separate rooms will be provided in hostels for both boys and girls for 3 days.
      
      DJ Night:
      - Scheduled for November 10th, 2024.

      Return And Refund Policy:
      - No refund will be provided after registration in any case.

      Early bird offer: On registration by 25th Oct, a clothing voucher worth Rs. 750+ and a goodie kit from the sponsors will be provided.`,
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
    <>
      <SEOComponent
        PageDescription="Join us at siNUsoid v8! Choose from Silver, Gold, and Platinum plans for an exclusive tech fest experience. Enjoy full event access, accommodation, DJ nights, and more. Register now!"
        PageKeywords={[
          "siNUsoid v8",
          "techfest",
          "Accomodation registration",
          "silver plan",
          "gold plan",
          "platinum plan",
          "tech events",
          "hackathons",
          "coding competitions",
          "DJ night",
          "campus stay",
          "meals",
          "gaming",
          "accomodation",
        ]}
        PageOGLImage="https://sinusoid.in/socialLogo.jpg"
        PageTitle="Accomodation Plans | siNUsoid v8"
      />
      <div className="px-6 sm:px-12 lg:px-20 py-10 mt-16">
        <div className="pl-4">
          {/* Plan details box */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-800 to-orange-700 p-6 rounded-lg shadow-lg mb-8 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-2">
              <div>
                <h1 className="text-3xl font-bold text-white">{plan.name}</h1>
                <p className="text-xl font-bold text-white">{plan.date}</p>
              </div>
            </div>
            <hr className="border-t-2 border-white my-4" />
            <ul className="space-y-0 text-white">
              {plan.details.map((detail: string, index: number) => (
                <li key={index} className="text-lg">
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center space-x-6">
              <Link href={`/plans/${planid}/register`}>
                <button className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-500 text-xl">
                  Register Here!
                </button>
              </Link>
              <span className="text-2xl font-bold text-white">
                at {plan.price}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 mt-12">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
              <h3 className="text-xl font-bold mb-4">ADDITIONAL INFORMATION</h3>
              <pre className="text-sm font-normal whitespace-pre-line">
                {plan.extraInfo}
              </pre>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
              <h3 className="text-xl font-bold mb-4">TRANSPORTATION</h3>
              <p className="text-sm font-normal whitespace-pre-line">
                - Pick-up will be on 8th November,2024 from IFFCO CHOWK at 8:00
                AM.
                <br />
                - You will be allowed to board the bus only after you show the
                mail for the Registration, Student identity card, and a copy of
                your Aadhar card for verification.
                <br />
                - The drop-off for all participants will take place on November
                11th, 2024, and the same bus will leave for IFFCO CHOWK from the
                university campus at 7:00 AM. <br />- Please note that once the
                journey begins, the bus will not make any stops along the way,
                except in case of an emergency.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
              <h3 className="text-xl font-bold mb-4">MESS</h3>
              <p className="text-sm font-normal">
                The mess service will operate the same for all registration
                types. The timings for the same are as follows:
              </p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Breakfast: 7:00 AM - 9:00 AM</li>
                <li>Lunch: 12:30 PM - 2:30 PM</li>
                <li>Snacks: 5:00 PM - 6:00 PM</li>
                <li>Dinner: 8:00 PM - 9:15 PM</li>
              </ul>
              <p className="text-sm font-normal mt-2 whitespace-pre-line">
                - We will provide only 2 meals per day for all the plans .<br />
                - An additional cost has to be paid in case you require an extra
                meal.
                <br />
                - A token for the same will be provided to you after the
                payment. Stalls will be open from 4pm.
                <br />
                Note :<br />
                1. Meals mentioned in your package from the mess menu will be
                available, and are available at no additional cost.
                <br />
                2. Other food options are available which include stalls and
                cafes on campus,the cost for which is not included in any plan.
                In case you wish to avail these facilities,you must do so at
                your own expense.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[30%]">
              <h3 className="text-xl font-bold mb-4">ACCOMMODATION</h3>
              <p className="text-sm font-normal whitespace-pre-line">
                Accommodation will be provided in the hostels, and the following
                amenities are available:
              </p>
              <ul className="list-disc list-inside text-sm font-normal whitespace-pre-line">
                <li>
                  Bedding: Mattresses will be provided. Bedsheet and
                  blanket will not be given, so please carry your own.
                </li>
                <li>
                  Water: There will be a designated area to refill your water
                  bottles as needed.
                </li>
                <li>
                  Facilities: Common washrooms are available near every bay,
                  equipped with two washrooms and two bathrooms.
                </li>
              </ul>
              <p className="text-sm font-normal mt-4 whitespace-pre-line">
                Note: The campus is a smoke-free area, equipped with smoke
                detectors in every room. Strict actions will be taken if anyone
                is found violating this rule.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-4">DJ NIGHT</h3>
              <p className="text-sm font-normal whitespace-pre-line">
                The DJ Night is scheduled for November 10, 2024. Only those who
                have received bands will be allowed entry to the designated
                area.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              CODE OF CONDUCT
            </h2>
            <ul className="list-disc list-inside text-black dark:text-white space-y-2">
              <li className="text-sm">
                Ragging is strictly banned in the University, and anyone found
                guilty of ragging and/or abetting ragging, whether actively or
                passively, or being a part of a conspiracy to promote ragging,
                is liable to be punished in accordance with the UGC Regulations
                on Curbing the Menace of Ragging in Higher Educational
                Institutions. Any instance of Ragging should be reported
                immediately.
              </li>
              <li className="text-sm">
                Students must always be wearing their identity cards and be
                prepared to produce it, if demanded by the authorities.
              </li>
              <li className="text-sm">
                {`On entry to the university, you will not be allowed to leave the university till the completion of your desired package,
            unless there's an emergency.`}
              </li>
              <li className="text-sm">
                No graffiti, scribbling or unwarranted marks on walls or doors,
                anywhere within the premises is not permitted. Students
                indulging in such acts would invite strict disciplinary action
                and would be mandatorily required to compensate the loss
                incurred if any to the University property.
              </li>
              <li className="text-sm">
                No disturbance of any type (loud music, noise etc.) is
                encouraged, especially post 11 PM.
              </li>
              <li className="text-sm">
                Possession/Consumption of alcohol,drugs is prohibited.If any
                cigarettes/bidis/hookah and alcohol/any narcotic substance are
                found in campus, all occupants of the area will be held
                responsible.
              </li>
              <li className="text-sm">
                No student is permitted to enter Campus if s/he has consumed
                alcohol or any narcotic substance outside the Campus.
              </li>
              <li className="text-sm">
                Any incidence of willful assault on any student, faculty or
                staff of NU or any vendors on campus will invite strict
                disciplinary action.
              </li>
              <li className="text-sm">
                Behavior: Any acts of violence or sexual harassment will not be
                tolerated and could lead to severe repercussions for both the
                individual and their college.
              </li>
              <li className="text-sm">
                CCTV Cameras are installed at entrances, common areas and
                corridors.
              </li>
              <li className="text-sm">
                Event timeline will remain same, regardless of the plan
                selected.
              </li>
              <li className="text-sm">
                Common facilities on sharing basis: Washroom, Shower, Washbasin
                and RO treated drinking water, including hot water for drinking.
              </li>
              <li className="text-sm">
                Students are strongly advised to keep the room key safely and
                not to share with others
              </li>
              <li className="text-sm">
                NU is a plastic-free campus, and littering/disposing off of
                polythene bags, sachets of eatable etc is not permitted
              </li>
              <li className="text-sm">
                Take care of your valuables like laptop, wristwatch, cell phone,
                camera, wallet, etc. No person from the university or the
                administration will be held responsible for any lost item(s).
              </li>
              <p className="text-lg font-bold">
                Your cooperation in maintaining a safe and enjoyable environment
                is greatly appreciated.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanDetails;
