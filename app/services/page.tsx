"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "PERSONAL ERRANDS",
    Services:
      "Our Personal Errands Services are designed to support busy individuals, working professionals, and students by handling everyday tasks that consume valuable time. We offer reliable, efficient, and trustworthy assistance with activities such as grocery shopping, market runs, dry-cleaning pickup and drop-off, pharmacy runs, bill payments, and other routine errands.",
    href: "http://localhost:3000/contact",
  },
  {
    num: "02",
    title: "HOUSEHOLD ERRANDS",
    Services:
      "Our Household Errands Services focus on helping clients maintain smooth, organized, and well-managed home routines. We provide dependable support with tasks such as light home organization, restocking household supplies, coordinating home maintenance visits, supervising deliveries, handling minor household shopping, and assisting with routine chores.",
    href: "http://localhost:3000/contact",
  },
  {
    num: "03",
    title: "BUSINESS AND OFFICE ERRANDS",
    Services:
      "Our Business and Office Errands Services are tailored to support companies, small businesses, and professionals by managing routine tasks that enhance workplace efficiency. We assist with document pickup and delivery, courier services, office supply shopping, mail handling, bank runs, vendor coordination, and other administrative errands that help businesses operate smoothly.",
    href: "http://localhost:3000/contact",
  },
  {
    num: "04",
    title: "STUDENTS ERRANDS",
    Services:
      "Our Student Errands Services are designed to help students manage their busy academic and personal schedules with ease. We provide support with tasks such as grocery and essential shopping, laundry pickup and drop-off, food and supply runs, document printing and delivery, campus errands, and other day-to-day activities that save time and reduce stress.",
    href: "http://localhost:3000/contact",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold text-outline
                 text-transparent group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full
                   bg-white group-hover:bg-accent-default transition-all duration-500 flex 
                   justify-center items-center hover:-rotate-45 "
                >
                  <BsArrowDownRight className="text-black text-3xl" />
                </Link>
              </div>
              {/* titles */}
              <h2
                className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent-default transition-all duration-500"
              >
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.Services}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
