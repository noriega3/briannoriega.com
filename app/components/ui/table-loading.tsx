"use client";

const TableRow = () => (
  <tr
    className="border-b border-slate-300/10 last:border-none animate-pulse"
    role="status"
  >
    <td className="py-4 pr-4 align-top text-sm">
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </td>
    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
      <span className="sr-only">Loading...</span>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </td>
    <td className="py-4 pr-4 align-top text-sm">
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </td>
    <td className="hidden py-4 pr-4 align-top lg:table-cell">
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </td>
    <td className="hidden py-4 align-top">
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </td>
  </tr>
);
export const TableLoading = () => (
  <>
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
  </>
);