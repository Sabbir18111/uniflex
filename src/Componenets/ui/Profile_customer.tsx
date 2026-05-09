import React from "react";
import { Link, useLocation } from "react-router";
import img from "../../assets/images/download.jpg";

const Profile_Customer = () => {
  const location = useLocation();

  const {
    customerName,
    customerId,
    customerDate,
    customerBalance,

  } = location.state || {};

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-slate-950">
      <main className="mx-auto w-full max-w-107.5 px-4 py-8 space-y-6">
        
        {/* PROFILE SECTION (NO DESIGN CHANGE) */}
        <section className="grid grid-cols-1 rounded-xl bg-white  -mt-9 p-6">
          <div className="grid grid-cols-[96px_1fr] items-center gap-5">
            
            <div className="relative">
              <img
                alt="Agent Profile"
                className="w-21 h-21 rounded-full object-cover border-2 border-blue-900 mb-5 shadow-lg"
                src={img}
              />
            </div>

            <div className="">
              <h2 className="text-h2 leading-6 font-extrabold text-[#00176b] tracking-tight ">
                {customerName || "Mohammad Hasan Sajjad"}
              </h2>

              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                 Customer
                </span>

                <span className="text-sm text-slate-400">
                  ID: {customerId || "UC000120"}
                </span>
              </div>

              <div className="mt-2 text-sm text-slate-400">
                {customerDate || ""}
              </div>
            </div>

          </div>
        </section>

        {/* BALANCE SECTION (NO DESIGN CHANGE) */}
        <section className="rounded-xl bg-[#263f96] p-6 text-white shadow-lg -mt-10">
          <p className="text-sm text-white/45 font-medium">
            Account Balance
          </p>

          <Link
            to="/component/payment"
            className="text-sm font-medium text-white/70 underline mt-1"
          >
            <h3 className="mt-1 text-[38px] leading-none font-extrabold tracking-tight text-[#9cb4ff]">
              {customerBalance || "442,850.00"}
            </h3>
          </Link>

          <div className="mt-6 flex items-center gap-2 text-emerald-300">
            <span className="material-symbols-outlined text-[23px]">
              trending_up
            </span>
            <span className="text-sm font-bold">
              +12.5% this month
            </span>
          </div>
        </section>

        {/* MENU SECTION (NO CHANGE) */}

        {/* TRANSACTION SECTION (UNCHANGED COMPLETELY) */}
        
        <section className="overflow-hidden rounded-xl bg-white border border-blue-100 ">
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
            <span>Type</span>
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
              <span className="justify-self-start rounded-md bg-green-50 px-2 py-1 text-[11px] font-extrabold text-green-700">
                CREDIT
              </span>
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
              <span className="justify-self-start rounded-md bg-red-50 px-2 py-1 text-[11px] font-extrabold text-red-700">
                DEBIT
              </span>
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
              <span className="justify-self-start rounded-md bg-green-50 px-2 py-1 text-[11px] font-extrabold text-green-700">
                CREDIT
              </span>
            </div>
          </div>

          <div className="p-6 text-center">
            <button className="text-sm font-medium text-secondary">
              View Full Statement
            </button>
          </div>
        </section>

      </main>

      <footer className="py-8 mb-16 flex justify-center opacity-70">
        <p className="text-[11px] font-mono tracking-wider text-slate-400">
          Developed by HSBLCO V2.1
        </p>
      </footer>
    </div>
  );
};

export default Profile_Customer;