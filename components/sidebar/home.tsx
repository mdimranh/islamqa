import { RiQuestionnaireFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegStickyNote } from "react-icons/fa";
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  BookOpen,
  MessageSquare,
  PenTool,
  Menu,
  Shield,
} from "lucide-react";
import { GoHome } from "react-icons/go";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { PiBooks } from "react-icons/pi";
import { RiArticleLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";

const items = [
  {
    icon: RiQuestionnaireFill,
    label: "My Questions",
  },
  {
    icon: MdFavoriteBorder,
    label: "My Favorites",
    },
    {
    icon: FaRegStickyNote,
    label: "My Notes",
  }
];

const navigationItems = [
    { href: "/", label: "Home", icon: GoHome },
    { href: "/questions", label: "Questions", icon: MdOutlineQuestionAnswer },
    { href: "/articles", label: "Articles", icon: RiArticleLine },
    { href: "/quran", label: "Quran", icon: IoBookOutline },
    { href: "/hadith", label: "Hadith", icon: PiBooks },
  ];

export default function HomeSidebar() {
    return (
      <div className="flex flex-col items-start justify-center w-full">
        {navigationItems.map((item, index) => (
          <div key={index} className="font-bold flex items-center w-full space-x-3 hover:cursor-pointer hover:bg-slate-200 py-2.5 px-4 rounded-md">
            <item.icon className="w-8 h-8" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    );
}