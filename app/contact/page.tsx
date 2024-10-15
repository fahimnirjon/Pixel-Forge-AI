import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Developer Name:</h3>
            <p>Fahim Shahriar Nirjon</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone Number:</h3>
            <p>+8801713865204</p>
            <p>+8801325344660</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">GitHub:</h3>
            <a
              href="https://github.com/fahimnirjon"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
             https://github.com/fahimnirjon
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Portfolio:</h3>
            <a
              href="https://fahimnirjon.github.io/Portfolio-Main/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fahimnirjon.github.io/Portfolio-Main/
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">LinkedIn:</h3>
            <a
              href="https://www.linkedin.com/in/fahimnirjon04/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/fahimnirjon04/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
