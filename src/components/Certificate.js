import React from 'react'
import CertificateData from './CertificateData';
import { FaExternalLinkAlt } from "react-icons/fa";

export const Certificate = () => {
    return (
        <section className="text-gray-600 body-font">
          <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
            <div
              id="certificates"
              className="flex flex-wrap w-full flex-col items-center text-center"
            >
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
                Certificate
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="text-lg font-medium leading-relaxed text-[#8A9A5B]"
              >
                My certificates
              </p>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8">

              {CertificateData.map((certificate) => (
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  key={certificate.id}
                  className="group relative flex flex-col flex-wrap h-80 w-full mx-auto shadow-lg shadow-[#8A9A5B] rounded-xl "
                >
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="h-80 rounded-xl"
                  />
                  <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-80 transition-[height_0.5s] duration-500 bg-[#22311d] rounded-xl">
                    <h3
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="text-2xl font-medium text-white my-2"
                    >
                      {certificate.name}
                    </h3>
                    <p
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="px-2 text-lg text-white"
                    >
                      {certificate.description}
                    </p>
                    
                    <div
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="flex gap-7 justify-center items-center my-7 text-2xl"
                    >
                      <div className="bg-white rounded-full p-2">
                        <a
                          className="text-[#8A9A5B]  text-xl bg-white"
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="p-[1px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
