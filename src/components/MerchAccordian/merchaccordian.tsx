import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
//code
export default function MerchAccordion() {
  return (
    <>
      {/* Product Description Section */}
      <div className="relative dark:bg-black bg-white flex items-start justify-center p-4">
        <div className="max-w-6xl w-full dark:bg-zinc-900 bg-gray-300 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row gap-8">
          <div className="flex-1 p-4 md:p-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="additional-info">
                <AccordionTrigger>Product Description</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Material.</span>
                    <span>GSM 200. 100% Breathable Cotton</span>
                    <svg
                      className="w-6 h-6 text-green-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Comfort.</span>
                    <span>Designed to Keep You Cool and Comfortable</span>
                    <svg
                      className="w-6 h-6 text-blue-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2L15 10"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Fit.</span>
                    <span>Tailored Fit for Everyday Wear</span>
                    <svg
                      className="w-6 h-6 text-yellow-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m-9 0a9 9 0 118 0H6z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Eco-Friendly.</span>
                    <span>Sustainable and Durable Fabric</span>
                    <svg
                      className="w-6 h-6 text-green-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.581L3 8.67a7 7 0 1011.164 7.404m2.628-4.674a7 7 0 00-8.795 1.882"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap items-center text-sm md:text-lg">
                    <span className="font-bold mr-2">Care.</span>
                    <span>Machine Washable for Easy Maintenance</span>
                    <svg
                      className="w-6 h-6 text-teal-500 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7h18M5 7l2 10h10l2-10m-9 0V4a3 3 0 016 0v3"
                      />
                    </svg>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Size Chart Section */}
      <div className="relative dark:bg-black bg-white flex items-start justify-center p-4">
        <div className="max-w-6xl w-full dark:bg-zinc-900 bg-gray-300 rounded-lg shadow-3xl overflow-hidden flex flex-col md:flex-row gap-8">
          <div className="flex-1 p-4 md:p-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="size-chart">
                <AccordionTrigger>Show Size Chart</AccordionTrigger>
                <AccordionContent>
                  <div className="relative w-full h-auto flex justify-center items-center">
                    <table className="min-w-full bg-white border-collapse border border-gray-300 rounded-md shadow-lg">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-900 px-4 py-2 bg-gray-100 dark:bg-gray-700">
                            Size
                          </th>
                          <th className="border border-gray-300 dark:border-gray-900 px-4 py-2 bg-gray-100 dark:bg-gray-700">
                            Chest (inches)
                          </th>
                          <th className="border border-gray-300 dark:border-gray-900 px-4 py-2 bg-gray-100 dark:bg-gray-700">
                            Length (inches)
                          </th>
                          <th className="border border-gray-300 dark:border-gray-900 px-4 py-2 bg-gray-100 dark:bg-gray-700">
                            Sleeve Length (inches)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            XS
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            32 - 34
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            26
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            8
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            S
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            34 - 36
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            27
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            8.5
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            M
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            38 - 40
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            28
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            9
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            L
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            42 - 44
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            29
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            9.5
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            XL
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            46 - 48
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            30
                          </td>
                          <td className="border border-gray-300 dark:border-gray-900 dark:bg-gray-500 px-4 py-2">
                            10
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
