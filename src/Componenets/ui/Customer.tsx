import React from "react";
import { Link } from "react-router";

function CustomerHistory() {
  const history = [
    {
      id: "INV-1001",
      name: "Sabbir Ahmed",
      date: "08 May",
      amount: "৳120",
      status: "Paid",
    },
    {
      id: "INV-1002",
      name: "Rakib Hasan",
      date: "07 May",
      amount: "৳85",
      status: "Pending",
    },
    {
      id: "INV-1003",
      name: "Nusrat Jahan",
      date: "06 May",
      amount: "৳210",
      status: "Paid",
    },
    {
      id: "INV-1004",
      name: "Tanvir Rana",
      date: "05 May",
      amount: "৳45",
      status: "Cancelled",
    },
    {
      id: "INV-1005",
      name: "Ruku Khatun",
      date: "04 May",
      amount: "৳99",
      status: "Paid",
    },
    {
      id: "INV-1006",
      name: "Anika Akter",
      date: "03 May",
      amount: "৳150",
      status: "Pending",
    },
    {
      id: "INV-1007",
      name: "Abir Mahmud",
      date: "02 May",
      amount: "৳60",
      status: "Paid",
    },
    {
      id: "INV-1008",
      name: "Jannat Islam",
      date: "01 May",
      amount: "৳300",
      status: "Paid",
    },
    {
      id: "INV-1009",
      name: "Fahim Khan",
      date: "30 Apr",
      amount: "৳40",
      status: "Cancelled",
    },
    {
      id: "INV-1010",
      name: "Shila Roy",
      date: "29 Apr",
      amount: "৳75",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-50">
      <div className="w-107 min-h-screen bg-white flex flex-col">
        {/* Header */}
        <div className="p-5 bg-blue-900 text-white">
          <h1 className="text-lg font-bold">Customer Timeline</h1>
          <p className="text-xs opacity-80">Recent transactions history</p>
        </div>

        {/* Timeline */}
        <div className="p-5 space-y-6 relative">
          <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-gray-200"></div>

          {history.map((item, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full mt-1 z-10 border-2 border-white shadow
                ${
                  item.status === "Paid"
                    ? "bg-green-500"
                    : item.status === "Pending"
                      ? "bg-yellow-400"
                      : "bg-red-500"
                }`}
              ></div>

              {/* Card */}
              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center">
                  <Link
                    to="/component/profile_customer"
                    state={{
                      customerName: item.name,
                      customerId: item.id,
                      customerDate: item.date,
                      customerBalance: item.amount,
                      customerStatus: item.status,
                    }}
                  >
                    <h2 className="font-semibold text-blue-700 text-sm hover:underline cursor-pointer">
                      {item.name}
                    </h2>
                  </Link>

                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-semibold
                    ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>{item.id}</span>
                  <span>{item.date}</span>
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <p className="font-bold text-blue-600">{item.amount}</p>
                  <Link to="/component/payment_history">
                    <button className="text-[10px] bg-indigo-600 text-white px-3 py-1 rounded-md">
                      Payment Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerHistory;
