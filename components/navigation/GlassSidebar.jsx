"use client";
export default function GlassSidebar({
  isOpen,
  onClose,
  children,
  className = "",
}) {
  return (
    <>
      {" "}
      <div
        className={`fixed inset-0 z-40 bg-white/[0.06] backdrop-blur-md backdrop-saturate-150 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />{" "}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md backdrop-saturate-150 transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block ${isOpen ? "translate-x-0" : "-translate-x-full"} ${className}`}
      >
        {" "}
        <div className="flex h-full flex-col overflow-y-auto p-4">
          {" "}
          <div className="md:hidden flex justify-end mb-4">
            {" "}
            <button
              onClick={onClose}
              className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10"
            >
              {" "}
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>{" "}
            </button>{" "}
          </div>{" "}
          {children}{" "}
        </div>{" "}
      </aside>{" "}
    </>
  );
}
