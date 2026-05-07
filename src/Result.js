import React from "react";
import Navbar from "./Navbar";

function Result() {

  const params = new URLSearchParams(window.location.search);

  const product = params.get("product");
  const price = params.get("price");
  const estimated = params.get("estimated");
  const status = params.get("status");

  let color = "";

  if (status === "Cheap") {
    color = "text-green-400";
  }
  else if (status === "Fair Price") {
    color = "text-yellow-400";
  }
  else {
    color = "text-red-400";
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="flex justify-center items-center min-h-screen px-6">

        <div className="bg-white/5 border border-gray-800 p-10 rounded-3xl w-full max-w-4xl backdrop-blur-lg">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Estimation Result
          </h1>

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT */}
            <div className="bg-white/5 p-6 rounded-2xl border border-gray-800">

              <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
                Product Details
              </h2>

              <div className="space-y-4">

                <p className="text-gray-400">
                  Product Name:
                  <span className="text-white">
                    {" "} {product}
                  </span>
                </p>

                <p className="text-gray-400">
                  Selling Price:
                  <span className="text-white">
                    {" "} ₹{price}
                  </span>
                </p>

                <p className="text-gray-400">
                  Estimated Market Price:
                  <span className="text-green-400">
                    {" "} ₹{estimated}
                  </span>
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white/5 p-6 rounded-2xl border border-gray-800 flex flex-col justify-center">

              <h2 className="text-2xl font-semibold mb-4">
                Price Analysis
              </h2>

              <h1 className={`text-5xl font-bold ${color}`}>
                {status}
              </h1>

              <p className="text-gray-400 mt-4">
                The product pricing has been analyzed based on estimated production and market calculations.
              </p>

              <button
                onClick={() => window.location.href="/history"}
                className="mt-8 bg-cyan-500 text-black py-3 rounded-xl hover:bg-cyan-400 transition"
              >
                View History
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Result;