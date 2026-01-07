"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "personal",
    title: "project 1",
    description:
      "Our Personal Errands Services are designed to support busy individuals, working professionals",
    stack: [
      { name: "Pharmacy runs" },
      { name: "Bill payment" },
      { name: "Dry cleaning pick/drop off" },
    ],
    Image: "/assets/work/thumb1.png",
  },
  {
    num: "02",
    category: "household",
    title: "project 2",
    description:
      "Our Household Errands Services focus on helping clients maintain smooth, organized, and well-managed home routines",
    stack: [
      { name: "light home organization " },
      { name: "restocking household supplies" },
    ],
    Image: "/assets/work/thumb2.png",
  },
  {
    num: "03",
    category: "business and office",
    title: "project 3",
    description:
      "Our Business and Office Errands Services are tailored to support companies, small businesses, and professionals by managing routine tasks that enhance workplace efficiency.",
    stack: [{ name: "mail handling" }, { name: "vendor coordination" }],
    Image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
           xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent-default transition-all duration-500 capitalize"
              >
                {project.category} errands
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent-default">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlog */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.Image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent-default hover:bg-accent-hover text-black text-[22px] w=[44px] h-[44px] flex justify-center items-center transition-all "
                iconsStyles={""}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
