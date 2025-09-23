import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../app-siderbar";
import { Outlet } from "react-router-dom";
import ProfileAdminPage from "@/page/admin/ProfileAdminPage";

export const LayoutAdmin = () => {
  return (
    <>
      {/* https://patterncraft.fun/ */}
      <div className="min-h-screen w-full bg-[#fefcff] relative flex">
        {/* Dreamy Sky Pink Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
          `,
          }}
        />

        {/* Sidebar + content */}
        <SidebarProvider className="relative z-10 flex w-full">
          {/* Sidebar bên trái */}
          <AppSidebar />

          {/* Bên phải */}
          <div className="flex-1 flex flex-col">
            {/* Header (ProfileAdminPage nằm trên đầu) */}
            <header className="w-full">
              <ProfileAdminPage />
            </header>

            {/* Nội dung */}
            <main className="flex-1 p-4">
              <SidebarTrigger />
              <Outlet />
            </main>
          </div>
        </SidebarProvider>
      </div>
    </>
  );
};

{
  /* https://patterncraft.fun/ */
}
{
  /* Dreamy Sky Pink Glow */
}
