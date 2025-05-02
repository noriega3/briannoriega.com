import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">At your service!</h2>
              <p className="text-lg text-gray-300 mb-8">
                Have a project in mind? Let us discuss how we can make it a reality. I am available
                for freelance work and look to tackle new challenges.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">hello@briannoriega.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Schedule a Call</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Book a free consultation (TBD)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3">
                    <FaLocationDot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      New York, NY
                      <br />
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
