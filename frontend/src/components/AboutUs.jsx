import React from 'react'
import Navbar from './shared/Navbar'

export const AboutUs = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <Navbar></Navbar>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-gray-600 mb-6">
          Welcome to Sync! Our platform is designed to simplify your career journey by offering a one-stop solution for job search, application, coding practice, and learning through curated courses.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At Sync, our mission is to connect talent with opportunity, providing accessible tools and resources that support both learners and job seekers. Our admin feature allows companies to post jobs seamlessly, keeping opportunities fresh and relevant.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">What We Offer</h2>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li>Extensive job listings to match your career goals.</li>
          <li>Direct application features to streamline the hiring process.</li>
          <li>Practice modules to enhance your coding skills.</li>
          <li>Curated educational courses to support lifelong learning.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Why Choose Sync?</h2>
        <p className="text-gray-600 mb-6">
          Sync offers a unique blend of job opportunities, educational content, and coding practice, making it an ideal platform for both job seekers and learners.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Contact Information</h2>
        <p className="text-gray-600">
          For any inquiries, feel free to reach out to us at: <br/>
          Email: [vbdara04@gmail.com] <br/>
          Phone: [8000291947]
        </p>
      </div>
    </div>
  )
}
