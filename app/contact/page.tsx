"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const recipient = "Quickfixerrandhub@gmail.com"; // your Gmail
    const subject = `New Contact Form Message from ${firstname} ${lastname}`;

    const body = `
Name: ${firstname} ${lastname}
Email: ${email}
Phone: ${phone}
Service Selected: ${service}

Message:
${message}
    `;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };
  const info = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: (
        <span className="break-all sm:break-normal">
          Quickfixerrandhub@gmail.com
        </span>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSend}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-blue-400">
                {"Lets's work together"}
              </h3>
              <p className="text-white/60">
                We’re always here to help make your day easier. Whether you have
                a question, need assistance with an errand, or want to learn
                more about our services, feel free to reach out. Our team is
                ready to respond promptly and ensure you get the support you
                need.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* select */}
              <Select
                onValueChange={(value) => setService(value)}
                value={service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Grocery shopping/Market Runs">
                      Grocery shopping/Market Runs
                    </SelectItem>
                    <SelectItem value="Pharmacy and medical">
                      Pharmacy and medical
                    </SelectItem>
                    <SelectItem value={"Gift shopping and surprise package"}>
                      Gift shopping and surprise package
                    </SelectItem>
                    <SelectItem value="Dry cleaning and laundry">
                      Dry cleaning and laundry
                    </SelectItem>
                    <SelectItem value="House cleaning and organization">
                      House cleaning and organization
                    </SelectItem>
                    <SelectItem value="meal delivery">meal delivery</SelectItem>
                    <SelectItem value="Document delivery and pickup">
                      Document delivery and pickup
                    </SelectItem>
                    <SelectItem value="office supply shopping">
                      office supply shopping
                    </SelectItem>
                    <SelectItem value="event planning and cordination">
                      event planning and cordination
                    </SelectItem>
                    <SelectItem value="travel arrangements">
                      travel arrangements
                    </SelectItem>
                    <SelectItem value="meal preparation and delivery">
                      meal preparation and delivery
                    </SelectItem>
                    <SelectItem value="assignment pickups solution and submittion">
                      assignment pickups solution and submittion
                    </SelectItem>
                    <SelectItem value="package delivery">
                      package delivery
                    </SelectItem>
                    <SelectItem value="library services">
                      library services
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1 
          xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="h-[52px] w-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
