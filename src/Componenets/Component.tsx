import { Link, Outlet } from "react-router-dom";
function Component() {
  return (
    <div>
      <header className="mx-auto w-full max-w-107 sticky top-0 z-50 h-14 bg-white  border-b border-slate-100 px-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full grid place-items-center hover:bg-slate-100 active:scale-95 transition">
            <span className="material-symbols-outlined text-[#07277f] text-[21px]">
              menu
            </span>
          </button>
          <h1 className="text-sm font-semibold font-['Goldman'] text-[#07277f] tracking-tight mb-0.5">
            UNIFLEX LIMITED
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-full grid place-items-center hover:bg-slate-100 active:scale-95 transition">
            <span className="material-symbols-outlined text-[#07277f] text-h3">
              notifications
            </span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
          </button>
          <img
            alt="Agent Profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ra6A-PKzXNtMhXJrUaWVXoR1AS7Slg5eirdo43qj-5UFTLSSOHJWHL_U5NpJ0rx-dUNBIpkPkS1f77_-5z_HQ8XnHjDZbeuyHlYz2WZiZ7hlsG9EJfjxuS6Ip0f6adzmsCHSNDSDl1WBdzv8FqK9t6rGQJAbvnHqvb369V7OyJlIC2oyqcDelf6ES0X5w6QtxjzHUPcPREjacFJlNIXzKgaGAjdDDrQtbOgFAc1FITdkZC2v1IIqggiwSFj6Whe8OKvgwZg_sw"
          />
        </div>
      </header>

      <Outlet />

      <nav className="mx-auto w-full max-w-106 fixed bottom-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-xl border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="mx-auto grid h-full max-w-107.5 grid-cols-4 items-center gap-2">
          <Link
            className="mx-auto flex flex-col items-center justify-center rounded-xl px-3 py-1 text-blue-700"
            to="/component/dashboard"
          >
            <span className="material-symbols-outlined text-h3">dashboard</span>
            <span className="mt-1 text-[9px] font-medium">Dashboard</span>
          </Link>
          <Link
            className="mx-auto flex flex-col items-center justify-center text-slate-400"
            to="/component/project"
          >
            <span className="material-symbols-outlined text-h3">
              assignment
            </span>
            <span className="mt-1 text-[9px] font-medium">Project</span>
          </Link>
          <Link
            className="mx-auto flex flex-col items-center justify-center text-slate-400"
             to="/component/booking"
          >
            <span className="material-symbols-outlined text-h3">
              event_available
            </span>
            <span className="mt-1 text-[9px] font-medium">Booking</span>
          </Link>
          <Link
            className="mx-auto flex flex-col items-center justify-center text-slate-400"
            to="/component/profile"
          >
            <span className="material-symbols-outlined text-h3">
              account_circle
            </span>
            <span className="mt-1 text-[9px] font-medium">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Component;
