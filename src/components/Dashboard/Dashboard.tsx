export default function WelcomeComponent() {
    return (
      <div className="max-w-4xl mx-auto mt-24 mb-9">
        <div className="bg-transparent dark:bg-transparent rounded-t-lg rounded-b-none shadow-md p-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold dark:text-orange-200 text-gray-800 mb-2 flex items-center">
              Hi, siNUsoid
              <span className="ml-2" role="img" aria-label="wave">👋</span>
            </h1>
            <div className="dark:text-orange-200 text-gray-800 text-2xl">
              <p><span className="font-semibold">Age:</span> 25</p>
              <p><span className="font-semibold">University:</span> NIIT University</p>
              <p><span className="font-semibold">Place:</span> London</p>
            </div>
          </div>
          <div className="flex-shrink-0 relative -left-4">
            <img
              src="sponsorLogo/Jio.webp"
              alt="User"
              className="rounded-full h-32 w-32 object-cover"
            />
          </div>
        </div>
        <div className="bg-transparent dark:bg-transparent shadow-md p-6 rounded-b-lg -mt-1">
          <h2 className="text-2xl font-bold mb-6 dark:text-orange-200 text-gray-800">Events Registered</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/sponsorLogo/SKOAR.webp"
                  alt="Event 1"
                  className="rounded-full h-10 w-10 object-cover mr-4"
                />
                <div>
                  <p className="font-semibold dark:text-orange-200 text-gray-800">Event Name 1</p>
                  <p className="text-white dark:text-orange-200 text-sm">Hackathon</p>
                </div>
              </div>
              <p className="text-white dark:text-orange-200 text-right">May 2021 - Oct 2021</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/sponsorLogo/MountainDew.webp"
                  alt="Event 2"
                  className="rounded-full h-10 w-10 object-cover mr-4"
                />
                <div>
                  <p className="font-semibold dark:text-orange-200 text-gray-800">Event Name 2</p>
                  <p className="text-white dark:text-orange-200 text-sm">Coding Challenge</p>
                </div>
              </div>
              <p className="text-white dark:text-orange-200 text-right">Jan 2021 - April 2021</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  