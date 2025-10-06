import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import {
  Settings,
  User,
  Bell,
  ChevronDown,
  ChartColumnStacked,
  Pen,
  ClipboardList,
  LayoutDashboard,
  UserStar,
  UserCheck,
  UserRoundPen,
  ShieldCheck,
  Box,
  LogOut,
  LayoutGrid,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { adminLogout } from "@/services/authService";
import { toast } from "sonner";

export function AppSidebar() {
  const mutation = useMutation({
    mutationFn: adminLogout,
    onSuccess: () => {
      toast.success("Đăng xuất thành công");
    },
    onError: (error) => {
      console.log(error)
    }
  })
  const navigate = useNavigate();
  const handleLogout = () => {
    mutation.mutate();
    navigate("/admin/login");
  };
  return (
    <Sidebar className="bg-white border-r shadow-sm">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold mb-[10px] text-gray-700">
            Admin Page
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Dashboard */}
              <SidebarMenuItem className="mb-[5px]">
                <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
                  <LayoutDashboard className="w-4 h-4 text-blue-600" />
                  <span className="text-[18px]">Trang tổng quan</span>
                  <ChevronDown className="ml-auto opacity-50" size={20} />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Quản lý danh mục */}
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <ChartColumnStacked className="w-4 h-4 text-purple-600" />
                      <span className="text-[18px]">Quản lý danh mục</span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="mt-[5px] flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <Link to="/admin/category/list">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Danh sách danh mục
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <Link to="/admin/category/add">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Tạo danh mục
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <LayoutGrid className="w-4 h-4 text-purple-600" />
                      <span className="text-[18px]">Quản lý kiểu dáng</span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <Link to="/admin/style/list">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Danh sách kiểu dáng
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <Link to="/admin/style/add">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Tạo danh kiểu dáng
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Quản lý sản phẩm */}
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <Box className="w-4 h-4 text-green-600" />
                      <span className="text-[18px]">Quản lý sản phẩm</span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="mt-[5px] flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <Link to="/admin/product/list">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Danh sách sản phẩm
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <Link to="/admin/product/add">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Tạo sản phẩm
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Quản lý đơn đặt hàng */}
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                      <span className="text-[18px]">Quản lý đơn đặt hàng</span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="mt-[5px] flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Danh sách đơn đặt hàng
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Quản lý tài khoản khách hàng */}
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <UserStar className="w-4 h-4 text-orange-600" />
                      <span className="text-[18px]">
                        Quản lý tài khoản khách hàng
                      </span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="mt-[5px] flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Danh sách tài khoản khách hàng
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Quản lý tài khoản quản trị */}
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <UserCheck className="w-4 h-4 text-indigo-600" />
                      <span className="text-[18px]">
                        Quản lý tài khoản quản trị
                      </span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="mt-[5px] flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Danh sách tài khoản quản trị
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/notifications">
                            <UserRoundPen className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Tạo tài khoản quản trị
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Quản lý nhóm quyền */}
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <ShieldCheck className="w-4 h-4 text-pink-600" />
                      <span className="text-[18px]">Quản lý nhóm quyền</span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="mt-[5px] flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Danh sách nhóm quyền
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/notifications">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px]">Tạo nhóm quyền</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Cài đặt */}
              <Collapsible asChild className="mb-[5px]">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors duration-200 group">
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span className="text-[18px]">Cài đặt</span>
                      <ChevronDown className="ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="mt-[5px] flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/profile">
                            <User className="w-4 h-4" />
                            <span className="text-[18px] h-6">
                              Thông tin tài khoản
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton
                          asChild
                          className="flex items-center gap-2 rounded-md hover:bg-gray-50 hover:pl-3 transition-all duration-200"
                        >
                          <a href="/settings/notifications">
                            <Bell className="w-4 h-4" />
                            <span className="text-[18px] h-6">Thông báo</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                  <SidebarMenuItem className="mt-4">
                    <SidebarMenuButton
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-red-600 rounded-md hover:bg-red-50 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-[18px]">Đăng xuất</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
