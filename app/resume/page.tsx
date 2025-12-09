"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

// about data
const about = {
  title: "About us",
  description:
    "At QuickFix Hub, we are dedicated to making everyday life simpler, easier, and more organized for our clients. We understand that in today’s fast-paced world, balancing work, school, and personal responsibilities can be overwhelming. That’s why we provide reliable, efficient, and trustworthy errand services tailored to meet the needs of individuals, students, families, and businesses. ",
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"about"}>About us</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent
              value={"about"}
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
