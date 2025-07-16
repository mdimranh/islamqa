import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import {
  LucidePrinter
} from "lucide-react";
import { BiSolidMessageSquareCheck } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import ExpandableText from "../expandableText";

export function ArticleCard({article}: {article: any}) {
  return (
    <Card
      key={article.id}
      className="hover:shadow-lg transition-shadow relative overflow-hidden"
    >
      <div className="flex flex-col justify-start">
        <div className="w-full">
          <CardHeader className="p-4">
            <div className="cursor-pointer group">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 rounded border">
                    <AvatarImage
                      className="object-cover"
                      src={article.scholarAvatar || "/placeholder.svg"}
                    />
                    <AvatarFallback className="text-xs text-emerald-700 rounded">
                      {article.scholar
                        .split(" ")
                        .map((n: any) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm flex gap-2 items-center group-hover:text-emerald-700">
                      {article.scholar}{" "}
                      <BiSolidMessageSquareCheck className="w-4 h-4 text-emerald-600" />
                    </span>
                    <span className="text-xs text-gray-500">30m Ago</span>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center gap-2 text-sm text-slate-500">
                  {article.categories.map(
                    (category: any, index: number) =>
                      index < 2 && (
                        <Badge
                          key={category}
                          variant="outline"
                          className="text-xs bg-slate-100 cursor-pointer hover:bg-slate-200"
                        >
                          {category}
                        </Badge>
                      )
                  )}
                  {article.categories.length > 2 && (
                    <Badge variant="outline" className="text-xs bg-slate-100">
                      +{article.categories.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-4 pt-0">
            {/* <Gallery images={article.images} /> */}
            <PhotoGallery images={article.images} />
            <div className="mt-0">
              <ExpandableText
                text={article.excerpt}
                className="text-gray-700"
              />
            </div>
          </CardContent>
        </div>
        <div className="flex justify-around p-1 border-t z-10 font-semibold text-slate-500">
          <span className="flex items-center gap-3 cursor-pointer hover:bg-slate-100 rounded-lg px-2 py-1 w-full justify-center">
            <FaRegBookmark className="w-4 h-4 text-slate-500 cursor-pointer" />
            Bookmark
          </span>
          <span className="flex items-center gap-3 cursor-pointer hover:bg-slate-100 rounded-lg px-2 py-1 w-full justify-center">
            <MdOutlineShare className="w-4 h-4 text-slate-500 cursor-pointer" />
            Share
          </span>
          <span className="flex items-center gap-3 cursor-pointer hover:bg-slate-100 rounded-lg px-2 py-1 w-full justify-center">
            <LucidePrinter className="w-4 h-4 text-slate-500 cursor-pointer" />
            Print
          </span>
        </div>
      </div>
    </Card>
  );
}
