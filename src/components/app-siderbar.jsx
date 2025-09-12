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
} from "@/components/ui/sidebar"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

import { Calendar, Home, Inbox, Search, Settings, User, Bell, ChevronDown, Shirt, ChartColumnStacked, Pen, ClipboardList, LayoutDashboard, Gem, UserStar, UserCheck, UserRoundPen, ShieldCheck, Box } from "lucide-react"
import { Link } from "react-router-dom"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold mb-[10px]">
            Admin Page
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              {/* Dashboard */}
              <SidebarMenuItem className={"mb-[5px]"}>
                <SidebarMenuButton>
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-[18px]">Trang tổng quan</span>
                  <ChevronDown className="ml-auto" size={64} />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Collapsible category */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <ChartColumnStacked className="w-4 h-4" />
                      <span className="text-[18px]">Quản lý danh mục</span>
                      <ChevronDown className="ml-auto" size={64} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild className={"mt-[5px]"}>
                          <Link to="/admin/category/list" className="flex items-center">
                            <ClipboardList className="w-4 h-4"/>
                            <span className="text-[18px] h-6">Danh sách danh mục</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px] h-6">Tạo danh mục</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Collapsible order */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <Box className="w-4 h-4" />
                      <span className="text-[18px]">Quản lý sản phẩm</span>
                      <ChevronDown className="ml-auto" size={64} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild className={"mt-[5px]"}>
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">Danh sách sản phẩm</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px] h-6">Tạo sản phẩm</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Collapsible role */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[18px]">Quản lý đơn đăt hàng</span>
                      <ChevronDown className="ml-auto" size={64} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild className={"mt-[5px]"}>
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">Danh sách đơn đặt hàng</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Collapsible user */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <UserStar className="w-4 h-4" />
                      <span className="text-[18px]">Quản lý tài khoản khách hàng</span>
                      <ChevronDown className="ml-auto" size={64} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild className={"mt-[5px]"}>
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">Danh sách tài khoản khách hàng</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Collapsible admin */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <UserCheck className="w-4 h-4" />
                      <span className="text-[18px]">Quản lý tài khoản quản trị</span>
                      <ChevronDown className="ml-auto" size={64} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild className={"mt-[5px]"}>
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">Danh sách tài khoản quản trị</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <UserRoundPen className="w-4 h-4" />
                            <span className="text-[18px] h-6">Tạo tài khoản quản trị</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Collapsible role */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[18px]">Quản lý nhóm quyền</span>
                      <ChevronDown className="ml-auto" size={64} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild className={"mt-[5px]"}>
                          <a href="/settings/profile">
                            <ClipboardList className="w-4 h-4" />
                            <span className="text-[18px] h-6">Danh sách nhóm quyền</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
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

              {/* Collapsible Settings */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <Settings className="w-4 h-4" />
                      <span className="text-[18px]">Cài đặt</span>
                      <ChevronDown className="ml-auto" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild className={"mt-[5px]"}>
                          <a href="/settings/profile">
                            <User className="w-4 h-4" />
                            <span className="text-[18px] h-6">Thông tin tài khoản</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <Bell className="w-4 h-4" />
                            <span className="text-[18px] h-6">Thông báo</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
