const ProjectPortfolio = () => {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-slate-950 -mt-5">
      <main className="mx-auto w-full max-w-107.5 px-4 py-8 grid grid-cols-1 gap-5 ">
        <section className="grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-[#00176b] tracking-tight">
              Project Portfolio
            </h2>
            <p className="mt-1 text-sm leading-5 text-slate-500">
              Manage your active listings and track your commission performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[21px] text-slate-400">
                search
              </span>
              <input
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-secondary focus:ring-4 focus:ring-sky-100"
                placeholder="Search by project name..."
                type="text"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto rounded-2xl bg-slate-100 p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button className="rounded-xl bg-white px-5 py-2 text-sm font-bold text-[#00176b] shadow-sm">
            All
          </button>
          <button className="rounded-xl px-5 py-2 text-sm font-bold text-slate-500">
            Running
          </button>
          <button className="rounded-xl px-5 py-2 text-sm font-bold text-slate-500">
            Completed
          </button>
          <button className="rounded-xl px-5 py-2 text-sm font-bold text-slate-500 -ml-5">
            Up Comming
          </button>
        </section>

        <section className="grid grid-cols-1 gap-5">
          <article className="overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm grid grid-cols-1">
            <div className="h-44 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                alt="Luxury Residency Phase II"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 p-5">
              <div className="grid grid-cols-[1fr_auto] gap-3 items-start">
                <div className="min-w-0">
                  <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#00176b]">
                    Active
                  </span>
                  <h3 className="mt-3 text-xl leading-6 font-extrabold text-[#00176b]">
                    Uniflex VIP Zone
                  </h3>
                  <div className="mt-1 grid grid-cols-[auto_1fr] items-center gap-1 text-slate-500">
                    <span className="material-symbols-outlined text-body-md">
                      location_on
                    </span>
                    <p className="text-sm truncate mt-4">
                      Fareast Tower, (Level-12) 35 Topkhana Road
                      <br />urana Paltan, Dhaka - 1000.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-2 text-sm">
                  <span className="text-slate-500">Project Milestone</span>
                  <span className="text-right font-extrabold text-[#00176b]">
                    75%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[75%] rounded-full bg-[#07277f]" />
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-sky-200" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-200" />
                </div>
                <button className="justify-self-end grid grid-cols-[auto_auto] items-center gap-1 text-sm font-bold text-[#00176b]">
                  View Details
                  <span className="material-symbols-outlined text-body-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-4">
            <article className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-5 border border-blue-100">
              <div className="grid grid-cols-[auto_auto] items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 grid place-items-center text-[#00176b]">
                  <span className="material-symbols-outlined text-h2">
                    apartment
                  </span>
                </div>
                <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-[10px] font-extrabold text-green-700">
                  COMPLETED
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-[#00176b]">
                  Harbor Point Heights
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Finalized on March 12, 2024
                </p>
              </div>

              <div className="grid grid-cols-2 items-end border-t border-slate-100 pt-4">
                <div>
                  <p className="text-[10px] uppercase font-extrabold tracking-wide text-slate-400">
                    Earnings
                  </p>
                  <p className="text-xl font-extrabold text-slate-950">
                      &#2547; 3,200
                  </p>
                </div>
                <button className="justify-self-end rounded-xl bg-slate-100 p-2 text-[#00176b] active:scale-95 transition">
                  <span className="material-symbols-outlined text-[22px]">
                    receipt_long
                  </span>
                </button>
              </div>
            </article>

            <article className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-5 border border-blue-100">
              <div className="grid grid-cols-[auto_auto] items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 grid place-items-center text-[#00176b]">
                  <span className="material-symbols-outlined text-h2">
                    business
                  </span>
                </div>
                <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[10px] font-extrabold text-orange-700">
                  PENDING
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-[#00176b]">
                  Urban Oasis Gardens
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Awaiting Client Approval
                </p>
              </div>

              <div className="grid grid-cols-2 items-end border-t border-slate-100 pt-4">
                <div>
                  <p className="text-[10px] uppercase font-extrabold tracking-wide text-slate-400">
                    Potential
                  </p>
                  <p className="text-xl font-extrabold text-slate-950">
                    &#2547; 8,900
                  </p>
                </div>
                <button className="justify-self-end rounded-xl bg-slate-100 p-2 text-[#00176b] active:scale-95 transition">
                  <span className="material-symbols-outlined text-[22px]">
                    pending_actions
                  </span>
                </button>
              </div>
            </article>
          </div>
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

      <footer className="py-8 mb-16 flex justify-center border-t border-slate-100 opacity-70">
        <p className="text-[10px] font-mono tracking-wider uppercase text-slate-400">
          Developed by HSBLCO V2.1
        </p>
      </footer>
    </div>
  );
};

export default ProjectPortfolio;
