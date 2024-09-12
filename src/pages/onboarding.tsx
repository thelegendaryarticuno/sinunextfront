import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { ModeToggle } from '@/components/ui/modetoggle';
import { FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PulsatingButton from '@/components/ui/pulsatingbutton';
import Link from 'next/link';

const Onboarding: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [step, setStep] = useState(1); // Track which step of onboarding we are on
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    privacyPolicyAccepted: false,
    termsAccepted: false,
  });
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  const handleClose = () => {
    router.push('/');
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign-Up');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate email and password before moving to step 2
      if (formData.email && formData.password) {
        setStep(2);
      } else {
        alert('Please fill out all fields.');
      }
    } else if (step === 2) {
      if (formData.firstName && formData.lastName) {
        setStep(3); // Move to the new step for phone number, privacy, and terms
      } else {
        alert('Please fill out all fields.');
      }
    }
  };

  const handleSubmit = () => {
    // Validate the final step before submitting
    if (!formData.phoneNumber || !formData.privacyPolicyAccepted || !formData.termsAccepted) {
      alert('Please complete all fields and accept the policies.');
    } else {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  if (!mounted) return null;

  return (
    <div className={`relative min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="absolute top-2 left-0 right-0 flex justify-end items-center bg-white dark:bg-gray-900 p-2 z-[9999]">
        <ModeToggle />
        <button
          onClick={handleClose}
          className={`p-2 ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-orange-500`}
          aria-label="Close Onboarding"
        >
          <FaTimes size={24} />
        </button>
      </div>

      {!submitted ? (
        <div className="text-center w-4/5 max-w-xl">
          {step === 1 && (
            <>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Account</p>
              <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Create an Account to Start
              </h1>
              <form onSubmit={(e) => e.preventDefault()} className="mt-8">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} rounded-lg border-gray-600`}
                  />
                </div>

                <div className="mb-4 relative">
                  <label
                    htmlFor="password"
                    className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={passwordVisible ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} rounded-lg border-gray-600`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 top-6 right-3 flex items-center cursor-pointer"
                    aria-label={passwordVisible ? 'Hide Password' : 'Show Password'}
                  >
                    {passwordVisible ? <FaEye size={20} className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} /> : <FaEyeSlash size={20} className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
                >
                  Next
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Personal Information</p>
              <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Tell us about yourself
              </h1>
              <form onSubmit={(e) => e.preventDefault()} className="mt-8">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} rounded-lg border-gray-600`}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} rounded-lg border-gray-600`}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
                >
                  Next
                </button>
              </form>
            </>
          )}

          {step === 3 && (
            <>
              <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Additional Information</p>
              <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Almost done!
              </h1>
              <form onSubmit={(e) => e.preventDefault()} className="mt-8">
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} rounded-lg border-gray-600`}
                  />
                </div>

                <div className="flex items-center mb-4">
                <input
                  id="privacyPolicy"
                  name="privacyPolicyAccepted"
                  type="checkbox"
                  checked={formData.privacyPolicyAccepted}
                  onChange={handleCheckboxChange}
                  required
                  className={`mr-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded`}
                />
                <label 
                  htmlFor="privacyPolicy"
                  className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  I accept the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-orange-500">Privacy Policy</a>
                </label>
              </div>

                <div className="flex items-center mb-6">
                <input
                  id="terms"
                  name="termsAccepted"
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                  required
                  className={`mr-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded`}
                />
                <label 
                  htmlFor="terms"
                  className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  I accept the <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline text-orange-500">Terms and Conditions</Link>
                </label>
              </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      ) : (
        <div className="text-center w-5/6 max-w-4xl">
          <h1 className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Welcome to siNUsoid v8!
          </h1>
          <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>You're officially part of something extraordinary. Thank you for joining us! Get ready to experience innovation, creativity, and growth like never before.</p>
          <button
            type="button"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 mt-8"
          >
            <Link href="/dashboard">Continue to Dashboard</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
