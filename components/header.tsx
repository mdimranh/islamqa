"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useCurrentUser } from "@/hooks/user"
import { LogOut, LucideMessageCircleQuestion, Search, Settings, Shield, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { GoHome } from "react-icons/go"
import { IoBookOutline } from "react-icons/io5"
import { MdOutlineQuestionAnswer } from "react-icons/md"
import { PiBooks } from "react-icons/pi"
import { RiArticleLine } from "react-icons/ri"
import { DropdownMenuDemo } from "./notification/menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const user = useCurrentUser() as any
  
  const router = useRouter()

  const navigationItems = [
    { href: "/", label: "Home", icon: GoHome },
    { href: "/questions", label: "Questions", icon: MdOutlineQuestionAnswer },
    { href: "/articles", label: "Articles", icon: RiArticleLine },
    { href: "/quran", label: "Quran", icon: IoBookOutline },
    { href: "/hadith", label: "Hadith", icon: PiBooks },
  ];

  const getDashboardLink = () => {
    if (user?.is_superuser) {
      return "/admin/dashboard"
    } else if (user?.is_scholar) {
      return "/scholar/dashboard"
    }
    return "/dashboard"
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-full px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div> */}
            <img src="/logo.png" alt="" className="w-12 h-12" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-amber-600 bg-clip-text text-transparent">
              islamqa
            </span>
          </Link>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-14">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-emerald-700 transition-colors"
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav> */}

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 mx-8">
            <div className="relative max-w-[500px] w-[500px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search questions, articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
            <Button variant={"outline"} onClick={() => router.push("/ask")}>
              <LucideMessageCircleQuestion  />
              Ask
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            {/* <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-emerald-600 text-xs">
                3
              </Badge>
            </Button> */}
            <DropdownMenuDemo />
            {/* User Menu */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user?.avatar || "/placeholder.svg"}
                      alt={user?.first_name || "User Avatar"}
                    />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {`${user?.first_name} ${user?.last_name}` || "User"}
                        .split(" ")
                        .map((n) ={">"} n[0])
                        .join(""){"}"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user?.first_name} {user?.last_name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={getDashboardLink()}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                {user?.is_superuser && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Admin Panel</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
