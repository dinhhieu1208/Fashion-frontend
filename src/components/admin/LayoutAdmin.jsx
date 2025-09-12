import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../app-siderbar"
import { Outlet } from "react-router-dom"

export const LayoutAdmin = () => {
  return (
    <>
      {/* https://patterncraft.fun/ */}
      <div className="min-h-screen w-full bg-[#fefcff] relative">
        {/* Dreamy Sky Pink Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
          }}
        />
        {/* Your Content/Components */}
        <SidebarProvider className={"relative z-10"}>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            <Outlet />
          </main>
        </SidebarProvider>
      </div>

    </>
  )
}