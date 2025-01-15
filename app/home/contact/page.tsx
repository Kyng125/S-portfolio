"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com"; // Install via `npm install emailjs-com`

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleBackClick = () => {
    router.push("/home");
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Send email using EmailJS
      const serviceId = "service_t0w0l4n"; // Replace with your EmailJS service ID
      const templateId = "template_pp1ypka"; // Replace with your EmailJS template ID
      const userId = "xFb4VMQcszaTUqa5o"; // Replace with your EmailJS user ID

      await emailjs.send(serviceId, templateId, formData, userId);

      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("Failed to send the message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="h-full p-5">
      <div className="btn bg-indigoPurple border-none">
        <button
          className="btn bg-indigoPurple border-none text-white uppercase font-bold relative inline-block cursor-pointer transition-transform duration-200 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink1 hover:to-amber"
          onClick={handleBackClick}
        >
          Back to my Homepage
        </button>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex mb-5">
          <h1 className="flex font-bold mb-4 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-electricPurple via-pink1 to-amber">
            CONTACT ME
          </h1>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-2">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 rounded-box w-full shadow-md shadow-black"
                required
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 rounded-box w-full shadow-md shadow-black"
                required
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Reason for contacting me..."
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded-box w-full shadow-md shadow-black"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn bg-indigoPurple border-none text-white uppercase font-bold p-4 rounded-lg w-full shadow-md shadow-black hover:scale-105"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
          {successMessage && (
            <p className="text-green-500 mt-2 text-center">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
