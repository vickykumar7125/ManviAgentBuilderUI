"use client"

import Link from "next/link"
import {
  BarChart3,
  Bot,
  Database,
  Gauge,
  Key,
  Layers,
  Play,
  Route,
  ScrollText,
  Sparkles,
  Table2,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuSections = [
  {
    title: "Create",
    items: [
      { title: "Agent Builder", href: "/dashboard/agent-builder", icon: Bot },
      { title: "Storages", href: "/dashboard/storages", icon: Database },
      { title: "Datasets", href: "/dashboard/datasets", icon: Table2 },
      { title: "AI Assistance", href: "/dashboard/ai-assistance", icon: Sparkles },
    ],
  },
  {
    title: "Test",
    items: [
      { title: "Play Ground", href: "/dashboard/playground", icon: Play },
    ],
  },
  {
    title: "Manage",
    items: [
      { title: "Usages", href: "/dashboard/usages", icon: BarChart3 },
      { title: "Api Keys", href: "/dashboard/api-keys", icon: Key },
      { title: "Logs", href: "/dashboard/logs", icon: ScrollText },
      { title: "Batches", href: "/dashboard/batches", icon: Layers },
    ],
  },
  {
    title: "Optimize",
    items: [
      { title: "Evaluate", href: "/dashboard/evaluate", icon: Gauge },
      { title: "Tracing", href: "/dashboard/tracing", icon: Route },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="pointer-events-none">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Bot className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">AI Bot App</span>
                <span className="text-muted-foreground truncate text-xs">
                  Enterprise
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuSections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
