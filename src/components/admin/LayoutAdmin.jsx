import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../app-siderbar";
import { Outlet } from "react-router-dom";
import HeaderProfileAdminPage from "@/page/admin/HeaderProfile";

export const LayoutAdmin = () => {
  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative flex">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
          `,
        }}
      />

      {/* Sidebar + Content */}
      <SidebarProvider>
        <div className="relative z-10 flex w-full">
          <AppSidebar />

          <div className="flex-1 flex flex-col">
            <header className="w-full">
              <HeaderProfileAdminPage />
            </header>

            <main className="flex-1 p-4">
              <SidebarTrigger />
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

{
  /* https://patterncraft.fun/ */
}
{
  /* Dreamy Sky Pink Glow */
}
