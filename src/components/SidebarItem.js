"use client";

export default function SidebarItem({ icon, title, active }) {
  return (
    <li
      className="relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer"
    >
      {icon}
      <span className="w-52 ml-3">{title}</span>
    </li>
  );
}
