import { ContactIcons } from "../components/ui/contact-icons";

export function ProjectLoadError() {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm font-bold" colSpan={4}>
        Server Offline. Please try again later.
      </td>
    </tr>
  );
}