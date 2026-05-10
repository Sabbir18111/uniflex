import { useLocation, Link } from "react-router-dom";

function MoneyReceipt() {
  const { state } = useLocation();

  const data = state || {};

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center">
      <div className="w-107 min-h-screen bg-white flex flex-col">

        {/* Header */}
        <div className="bg-blue-900 text-white p-5 text-center">
          <h1 className="text-lg font-bold">
            Money Receipt
          </h1>
          <p className="text-xs opacity-80">
            Payment Slip
          </p>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">

          {/* Customer */}
          <div className="border rounded-xl p-4">
            <p className="text-xs text-gray-500">
              Customer ID
            </p>
            <p className="font-bold text-blue-700">
              {data.customerId}
            </p>

            <p className="text-xs text-gray-500 mt-2">
              Customer Name
            </p>
            <p className="font-semibold">
              {data.customerName}
            </p>
          </div>

          {/* Payments */}
          <div className="grid grid-cols-2 gap-3 text-sm">

            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-500">Plot Price</p>
              <p className="font-bold text-blue-700">
                ৳{data.plotPrice?.toLocaleString()}
              </p>
            </div>

            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-xs text-gray-500">Booking</p>
              <p className="font-bold text-yellow-600">
                ৳{data.bookingMoney?.toLocaleString()}
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Down</p>
              <p className="font-bold">
                ৳{data.downPayment?.toLocaleString()}
              </p>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-gray-500">Installment</p>
              <p className="font-bold text-purple-700">
                ৳{data.installment?.toLocaleString()}
              </p>
            </div>

            <div className="p-3 bg-green-50 col-span-2 rounded-lg">
              <p className="text-xs text-gray-500">Total Paid</p>
              <p className="font-bold text-green-700">
                ৳{data.totalPaid?.toLocaleString()}
              </p>
            </div>

            <div className="p-3 bg-red-50 col-span-2 rounded-lg">
              <p className="text-xs text-gray-500">Remaining</p>
              <p className="font-bold text-red-600">
                ৳{data.remaining?.toLocaleString()}
              </p>
            </div>

          </div>

          {/* Receipt ID */}
          <div className="text-center border-t pt-3">
            <p className="text-xs text-gray-500">
              Receipt No
            </p>
            <p className="font-bold">
              MR-{data.customerId}
            </p>
          </div>

          {/* Back */}
          <Link to="/payment_history">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Back
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default MoneyReceipt;