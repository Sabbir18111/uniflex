import { Link } from "react-router";
import img from "../assets/images/download.jpg";
const Profile = () => {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-slate-950">
      <main className="mx-auto w-full max-w-107.5 px-4 py-8 space-y-6">
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
                Mr. Hasan Rohaman Tarek
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Marketing Officer
                </span>
                <span className="text-sm text-slate-400">ID: MO0084</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3"></div>
            </div>
          </div>
        </section>

        <section className="rounded-xl bg-[#263f96] p-6 text-white shadow-lg -mt-10">
          <p className="text-sm text-white/45 font-medium">Wallet Balance</p>
          <Link
            to="/payment"
            className="text-sm font-medium text-white/70 underline mt-1"
          >
            <h3 className="mt-1 text-[38px] leading-none font-extrabold tracking-tight text-[#9cb4ff]">
              &#2547; 42,850.00
            </h3>
          </Link>
          <div className="mt-6 flex items-center gap-2 text-emerald-300">
            <span className="material-symbols-outlined text-[23px]">
              trending_up
            </span>
            <span className="text-sm font-bold">+12.5% this month</span>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <Link
            to="/customer"
            className="rounded-xl bg-white p-4 min-h-18 grid grid-cols-[40px_1fr] items-center gap-3 border border-blue-100 active:scale-[0.98] transition"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 grid place-items-center text-blue-600">
              <span className="material-symbols-outlined text-[23px]">
                history
              </span>
            </div>
            <span className="text-sm leading-4 font-medium text-[#00176b]">
              Customer
              <br />
              History
            </span>
          </Link>

          <Link
            to="/employee"
            className="rounded-xl bg-white p-4 min-h-18 grid grid-cols-[40px_1fr] items-center border border-blue-100 gap-3 active:scale-[0.98] transition"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-100 grid place-items-center text-indigo-600">
              <span className="material-symbols-outlined text-[23px]">
                account_tree
              </span>
            </div>
            <span className="text-sm leading-4 font-medium text-[#00176b]">
              Employee
              <br />
              Tree
            </span>
          </Link>

          <Link
            to="/setting"
            className="rounded-xl bg-white p-4 min-h-18 grid grid-cols-[40px_1fr] items-center gap-3 border border-blue-100 active:scale-[0.98] transition"
          >
            {" "}
            <div className="w-10 h-10 rounded-lg bg-slate-100 grid place-items-center text-slate-600">
              <span className="material-symbols-outlined text-[23px]">
                settings
              </span>
            </div>
            <span className="text-sm leading-4 font-medium text-[#00176b]">
              Settings
            </span>
          </Link>

          <Link
            to="../commission"
            className="rounded-xl bg-white p-4 min-h-18 grid grid-cols-[40px_1fr] items-center gap-3 border border-blue-100 active:scale-[0.98] transition"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 grid place-items-center text-blue-600">
              <span className="material-symbols-outlined text-[23px]">
                payments
              </span>
            </div>

            <span className="text-sm leading-4 font-medium text-[#00176b]">
              Commission
            </span>
          </Link>

          <Link
            to="/component/achievement"
            className="rounded-xl bg-white p-4 min-h-18 grid grid-cols-[40px_1fr] items-center gap-3 border border-blue-100 active:scale-[0.98] transition"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 grid place-items-center text-blue-600">
              <span className="material-symbols-outlined text-[23px]">
                workspace_premium
              </span>
            </div>

            <span className="text-sm leading-4 font-medium text-[#00176b]">
              Achievement
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-xl bg-white p-4 min-h-18 grid grid-cols-[40px_1fr] items-center gap-3 border border-blue-100 active:scale-[0.98] transition"
          >
            <div className="w-10 h-10 rounded-lg bg-red-100 grid place-items-center text-red-600">
              <span className="material-symbols-outlined text-[23px]">
                logout
              </span>
            </div>
            <span className="text-sm leading-4 font-medium text-[#00176b]">
              Logout
            </span>
          </Link>
        </section>

      <aside className="grid grid-cols-1 gap-5">
          <section className="relative overflow-hidden rounded-3xl bg-[#07277f] p-6 text-white shadow-xl">
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/10" />

            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-200">
              Current Focus Details
            </p>

            <div className="mt-5 grid grid-cols-[56px_1fr] items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white/10 border border-white/20 grid place-items-center">
                <span className="material-symbols-outlined text-[30px]">
                  person
                </span>
              </div>
              <div>
                <p className="text-sm text-blue-200">Main Stakeholder</p>
                <h3 className="text-xl font-extrabold leading-6">
                  Jonathan Sterling
                </h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <span className="material-symbols-outlined text-blue-300">
                  calendar_today
                </span>
                <div>
                  <p className="text-[10px] uppercase font-extrabold text-blue-300">
                    Project Timeline
                  </p>
                  <p className="text-sm">Oct 2023 - Jun 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <span className="material-symbols-outlined text-blue-300">
                  payments
                </span>
                <div>
                  <p className="text-[10px] uppercase font-extrabold text-blue-300">
                    Payment Structure
                  </p>
                  <p className="text-sm">Tiered / 3 Milestones</p>
                </div>
              </div>
            </div>

            <button className="mt-6 h-12 w-full rounded-2xl bg-sky-300 text-sm font-extrabold text-[#00176b] shadow-lg active:scale-[0.98] transition">
              Contact Client
            </button>
          </section>

          <section className="rounded-3xl bg-white border border-blue-100 p-5">
            <h3 className="text-xl font-extrabold text-[#00176b]">
              Earnings Breakdown
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-5">
              <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm text-slate-600">
                    Booking Deposit
                  </span>
                </div>
                <span className="text-sm font-extrabold">&#2547; 1,500.00</span>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#07277f]" />
                  <span className="text-sm text-slate-600">
                    Construction Milestone
                  </span>
                </div>
                <span className="text-sm font-extrabold">&#2547; 2,000.00</span>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="text-sm text-slate-600">Handover Bonus</span>
                </div>
                <span className="text-sm font-extrabold">&#2547; 1,000.00</span>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-center border-t border-slate-100 pt-5">
                <span className="text-base font-extrabold text-[#00176b]">
                  Total Commission
                </span>
                <span className="text-base font-extrabold text-[#00176b]">
                  &#2547; 4,500.00
                </span>
              </div>
            </div>
          </section>
        </aside>
      </main>

      <footer className="py-4 flex justify-center opacity-70">
        <p className="text-[11px] font-mono tracking-wider text-slate-400">
          Developed by HSBLCO V2.1
        </p>
      </footer>
    </div>
  );
};

export default Profile;
