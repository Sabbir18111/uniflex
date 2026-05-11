import { Link } from "react-router-dom";

const PaymentHistoryMobile = () => {
  const data = [
    {
      id: "UC00514",
      name: "Dr. Md. Delower Hossain",
      plotPrice: 4125000,
      bookingMoney: 100000,
      downPayment: 0,
      installment: 100000,
      totalPaid: 400000,
      remaining: 4025000,
      lastDate: "15 Sep 2025",
      khata: 5,
    },
  ];

  return (
  <div className="w-full min-h-screen bg-gray-100 flex justify-center ">
          <div className="w-107 min-h-screen bg-white flex flex-col">
            {/* Header (sticky) */}
            {/* <div className="sticky top-0 z-10 bg-white border-b px-4 py-4">
          <h1 className="text-lg font-bold text-slate-900">
            Customer Payment History
          </h1>
          <p className="text-xs text-gray-500">Payments of {data[0].name}</p>
        </div> */}

            {/* Content */}
            <div className="p-4 space-y-4 overflow-y-auto">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-blue-100 bg-white overflow-hidden"
                >
                  {/* Top ID + Button */}
                  <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-lg">
                    {/* Customer ID */}
                    <div>
                      <p className="text-[11px] text-gray-500">Customer ID</p>
                      <p className="font-bold text-blue-700">{item.id}</p>
                    </div>

                    {/* Installment No */}
                    <div className="text-right">
                      <p className="text-[11px] text-gray-500">
                        Installment No
                      </p>
                      <p className="font-bold text-blue-700">05</p>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="px-4 py-3 border-b">
                    <p className="text-[11px] text-gray-500">Customer Name</p>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                  </div>

                  {/* Color Blocks */}
                  <div className="grid grid-cols-2 gap-2 p-4 text-sm">
                    <div className="p-3 rounded-xl bg-blue-50">
                      <p className="text-xs text-gray-500">Plot Price</p>
                      <p className="font-bold text-blue-700">
                        ৳{item.plotPrice.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-yellow-50">
                      <p className="text-xs text-gray-500">Booking</p>
                      <p className="font-bold text-yellow-600">
                        ৳{item.bookingMoney.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-50">
                      <p className="text-xs text-gray-500">Down Payment</p>
                      <p className="font-bold text-gray-700">
                        ৳{item.downPayment.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-purple-50">
                      <p className="text-xs text-gray-500">Installment</p>
                      <p className="font-bold text-purple-700">
                        ৳{item.installment.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-green-50 col-span-2">
                      <p className="text-xs text-gray-500">Total Paid</p>
                      <p className="font-bold text-green-700">
                        ৳{item.totalPaid.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-red-50 col-span-2">
                      <p className="text-xs text-gray-500">Remaining</p>
                      <p className="font-bold text-red-600">
                        ৳{item.remaining.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between px-4 py-3 bg-slate-50 text-xs">
                    <span className="text-gray-500">Last: {item.lastDate}</span>
                    <span className="font-semibold text-slate-800">
                      Khata: {item.khata}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <section className="overflow-hidden rounded-xl bg-white ">
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-[#00176b]">
                  Transaction History
                </h3>
                <div className="flex items-center gap-4 text-slate-400">
                  <button className="active:scale-95 transition">
                    <span className="material-symbols-outlined text-[22px]">
                      filter_list
                    </span>
                  </button>
                  <button className="active:scale-95 transition">
                    <span className="material-symbols-outlined text-[22px]">
                      download
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-[82px_1fr_74px] bg-slate-50 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                <span>
                  Date
                  <br />& Time
                </span>
                <span>
                  Transaction
                  <br />
                  Details
                </span>
                <span>Money Receipt</span>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="grid grid-cols-[82px_1fr_74px] items-center px-6 py-5">
                  <div>
                    <p className="text-sm leading-6 text-[#00176b]">
                      Oct
                      <br />
                      24,
                      <br />
                      2023
                    </p>
                    <p className="text-xs leading-4 text-slate-400">
                      02:45
                      <br />
                      PM
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg leading-7 font-medium text-[#00176b]">
                      Commission:
                      <br />
                      Project
                      <br />
                      Phoenix
                    </p>
                    <p className="mt-1 text-sm text-slate-400">TRX-7729103</p>
                  </div>
                  <Link to="/moneyreceipt">
                    <button className="px-4 py-2 text-[15px] font-extrabold bg-blue-50 text-blue-900 rounded-lg">
                      View
                    </button>
                  </Link>
                </div>

                <div className="grid grid-cols-[82px_1fr_74px] items-center px-6 py-5">
                  <div>
                    <p className="text-sm leading-6 text-[#00176b]">
                      Oct
                      <br />
                      22,
                      <br />
                      2023
                    </p>
                    <p className="text-xs leading-4 text-slate-400">
                      11:15
                      <br />
                      AM
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg leading-7 font-medium text-[#00176b]">
                      Withdrawal
                      <br />
                      to Bank
                    </p>
                    <p className="mt-1 text-sm text-slate-400">TRX-7728841</p>
                  </div>
                  <Link to="/moneyreceipt">
                    <button className="px-4 py-2 text-[15px] font-extrabold bg-blue-50 text-blue-900 rounded-lg">
                      View
                    </button>
                  </Link>
                </div>

                <div className="grid grid-cols-[82px_1fr_74px] items-center px-6 py-5">
                  <div>
                    <p className="text-sm leading-6 text-[#00176b]">
                      Oct
                      <br />
                      19,
                      <br />
                      2023
                    </p>
                    <p className="text-xs leading-4 text-slate-400">
                      09:00
                      <br />
                      AM
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg leading-7 font-medium text-[#00176b]">
                      Booking Fee:
                      <br />
                      Client A
                    </p>
                    <p className="mt-1 text-sm text-slate-400">TRX-7725519</p>
                  </div>
                  <Link to="/moneyreceipt">
                    <button className="px-4 py-2 text-[15px] font-extrabold bg-blue-50 text-blue-900 rounded-[8px]">
                      View
                    </button>
                  </Link>
                </div>
              </div>
              <Link
                to="/allstatement"
                className="px-6 py-4 flex justify-center bg-gray-100"
              >
                <button className="font-bold text-blue-700 ">
                  View Full Statement
                </button>
              </Link>
            </section>
          </div>
        </div>
  );
};

export default PaymentHistoryMobile;
