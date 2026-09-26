"use client";
export default function GlassTable({
  headers = [],
  rows = [],
  className = "",
}) {
  return (
    <div className={`overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-md backdrop-saturate-150 ${className}`}>
      <table className="w-full text-left text-sm text-white/70">
        <thead className="border-b border-white/10 bg-white/[0.06] text-xs uppercase text-white/90">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-4 font-semibold tracking-wider">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/10 transition-colors hover:bg-white/5 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="whitespace-nowrap px-6 py-4 text-white/90">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
