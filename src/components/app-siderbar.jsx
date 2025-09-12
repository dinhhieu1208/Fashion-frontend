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

import { Calendar, Home, Inbox, Search, Settings, User, Bell, ChevronDown, Shirt, ChartColumnStacked, Pen, ClipboardList, LayoutDashboard, Gem, UserStar, UserCheck, UserRoundPen, ShieldCheck, Box  } from "lucide-react"

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
                  <span className="text-[18px]">Dashboard management</span>
                  <ChevronDown className="ml-auto" size={64}/>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Collapsible category */}
              <Collapsible asChild className={"mb-[5px]"}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={"flex items-center"}>
                      <ChartColumnStacked className="w-4 h-4" />
                      <span className="text-[18px]">Categories management</span>
                      <ChevronDown className="ml-auto" size={64}/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/profile">
                            <ClipboardList  className="w-4 h-4" />
                            <span className="text-[18px]">Categories list</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <Pen  className="w-4 h-4" />
                            <span className="text-[18px]">Create category</span>
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
                      <span className="text-[18px]">Orders management</span>
                      <ChevronDown className="ml-auto" size={64}/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/profile">
                            <ClipboardList  className="w-4 h-4" />
                            <span className="text-[18px]">Product list</span>
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
                      <ShieldCheck  className="w-4 h-4" />
                      <span className="text-[18px]">Role management</span>
                      <ChevronDown className="ml-auto" size={64}/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/profile">
                            <ClipboardList  className="w-4 h-4" />
                            <span className="text-[18px]">Role list</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px]">Create role</span>
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
                      <span className="text-[18px]">User management</span>
                      <ChevronDown className="ml-auto" size={64}/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/profile">
                            <ClipboardList  className="w-4 h-4" />
                            <span className="text-[18px]">User list</span>
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
                      <span className="text-[18px]">Admin account management</span>
                      <ChevronDown className="ml-auto" size={64}/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/profile">
                            <ClipboardList  className="w-4 h-4" />
                            <span className="text-[18px]">Amin account list</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <UserRoundPen className="w-4 h-4" />
                            <span className="text-[18px]">Create admin account</span>
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
                      <ShieldCheck  className="w-4 h-4" />
                      <span className="text-[18px]">Role management</span>
                      <ChevronDown className="ml-auto" size={64}/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/profile">
                            <ClipboardList  className="w-4 h-4" />
                            <span className="text-[18px]">Role list</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <Pen className="w-4 h-4" />
                            <span className="text-[18px]">Create role</span>
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
                      <span className="text-[18px]">Settings</span>
                      <ChevronDown className="ml-auto"/>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/profile">
                            <User className="w-4 h-4" />
                            <span className="text-[18px]">Profile</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <a href="/settings/notifications">
                            <Bell className="w-4 h-4" />
                            <span className="text-[18px]">Notifications</span>
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
