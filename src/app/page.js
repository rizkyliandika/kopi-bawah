import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
import { LayoutDashboard, Menu } from "lucide-react";

export default function Page() {
  return (
    <main>
      <Sidebar>
        <SidebarItem title={"Dashboard"} icon={<LayoutDashboard size={20} />} />
        <SidebarItem title={"Menu"} icon={<Menu />} />
      </Sidebar>
    </main>
  );
}
