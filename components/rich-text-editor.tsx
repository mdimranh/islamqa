"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link,
  ImageIcon,
  Video,
  BookOpen,
  Search,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [showQuranSearch, setShowQuranSearch] = useState(false)
  const [showHadithSearch, setShowHadithSearch] = useState(false)
  const [quranSearchQuery, setQuranSearchQuery] = useState("")
  const [hadithSearchQuery, setHadithSearchQuery] = useState("")
  const editorRef = useRef<HTMLDivElement>(null)

  // Mock Quran verses
  const quranVerses = [
    {
      id: 1,
      surah: "Al-Baqarah",
      ayah: 255,
      arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
      translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.",
      reference: "2:255",
    },
    {
      id: 2,
      surah: "Al-Fatiha",
      ayah: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      reference: "1:1",
    },
  ]

  // Mock Hadith
  const hadithCollection = [
    {
      id: 1,
      text: "The seeking of knowledge is obligatory upon every Muslim.",
      narrator: "Anas ibn Malik",
      book: "Ibn Majah",
      number: "224",
      grade: "Hasan",
    },
    {
      id: 2,
      text: "None of you truly believes until he loves for his brother what he loves for himself.",
      narrator: "Anas ibn Malik",
      book: "Bukhari",
      number: "13",
      grade: "Sahih",
    },
  ]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.shiftKey && e.key === "Q") {
      e.preventDefault()
      setShowQuranSearch(true)
    } else if (e.shiftKey && e.key === "H") {
      e.preventDefault()
      setShowHadithSearch(true)
    }
  }, [])

  const insertQuranVerse = (verse: (typeof quranVerses)[0]) => {
    const quranBlock = `
<div class="quran-reference bg-emerald-50 border-l-4 border-emerald-500 p-4 my-4 rounded-r-lg">
  <div class="arabic-text text-right text-xl mb-2 font-arabic">${verse.arabic}</div>
  <div class="translation text-gray-700 mb-2">${verse.translation}</div>
  <div class="reference text-sm text-emerald-700 font-medium">Quran ${verse.reference} - ${verse.surah}</div>
</div>
`
    onChange(value + quranBlock)
    setShowQuranSearch(false)
    setQuranSearchQuery("")
  }

  const insertHadith = (hadith: (typeof hadithCollection)[0]) => {
    const hadithBlock = `
<div class="hadith-reference bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded-r-lg">
  <div class="hadith-text text-gray-800 mb-2">"${hadith.text}"</div>
  <div class="hadith-details text-sm text-gray-600">
    <span class="font-medium">Narrator:</span> ${hadith.narrator} | 
    <span class="font-medium">Source:</span> ${hadith.book} ${hadith.number} | 
    <span class="font-medium">Grade:</span> ${hadith.grade}
  </div>
</div>
`
    onChange(value + hadithBlock)
    setShowHadithSearch(false)
    setHadithSearchQuery("")
  }

  const formatText = (command: string) => {
    document.execCommand(command, false)
  }

  const filteredQuranVerses = quranVerses.filter(
    (verse) =>
      verse.surah.toLowerCase().includes(quranSearchQuery.toLowerCase()) ||
      verse.translation.toLowerCase().includes(quranSearchQuery.toLowerCase()),
  )

  const filteredHadith = hadithCollection.filter(
    (hadith) =>
      hadith.text.toLowerCase().includes(hadithSearchQuery.toLowerCase()) ||
      hadith.book.toLowerCase().includes(hadithSearchQuery.toLowerCase()),
  )

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="border-b bg-gray-50 p-3">
        <div className="flex items-center space-x-2 flex-wrap gap-2">
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" onClick={() => formatText("bold")} className="h-8 w-8 p-0">
              <Bold className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => formatText("italic")} className="h-8 w-8 p-0">
              <Italic className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => formatText("underline")} className="h-8 w-8 p-0">
              <Underline className="w-4 h-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" onClick={() => formatText("insertUnorderedList")} className="h-8 w-8 p-0">
              <List className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => formatText("insertOrderedList")} className="h-8 w-8 p-0">
              <ListOrdered className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => formatText("formatBlock")} className="h-8 w-8 p-0">
              <Quote className="w-4 h-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Quran Search */}
          <Dialog open={showQuranSearch} onOpenChange={setShowQuranSearch}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                Quran (Shift+Q)
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Insert Quran Verse</DialogTitle>
                <DialogDescription>Search and insert Quranic verses with Arabic text and translation</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by surah name or translation..."
                    value={quranSearchQuery}
                    onChange={(e) => setQuranSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <ScrollArea className="h-96">
                  <div className="space-y-3">
                    {filteredQuranVerses.map((verse) => (
                      <Card key={verse.id} className="cursor-pointer hover:bg-emerald-50 transition-colors">
                        <CardContent className="p-4" onClick={() => insertQuranVerse(verse)}>
                          <div className="arabic-text text-right text-lg mb-2 font-arabic">{verse.arabic}</div>
                          <div className="translation text-gray-700 mb-2">{verse.translation}</div>
                          <Badge variant="secondary">
                            {verse.surah} {verse.reference}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>

          {/* Hadith Search */}
          <Dialog open={showHadithSearch} onOpenChange={setShowHadithSearch}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 px-3 bg-amber-100 text-amber-700 hover:bg-amber-200">
                <BookOpen className="w-4 h-4 mr-1" />
                Hadith (Shift+H)
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Insert Hadith</DialogTitle>
                <DialogDescription>Search and insert authentic Hadith with complete references</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by text or book name..."
                    value={hadithSearchQuery}
                    onChange={(e) => setHadithSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <ScrollArea className="h-96">
                  <div className="space-y-3">
                    {filteredHadith.map((hadith) => (
                      <Card key={hadith.id} className="cursor-pointer hover:bg-amber-50 transition-colors">
                        <CardContent className="p-4" onClick={() => insertHadith(hadith)}>
                          <div className="hadith-text text-gray-800 mb-2">"{hadith.text}"</div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>
                              <strong>Narrator:</strong> {hadith.narrator}
                            </span>
                            <span>
                              <strong>Source:</strong> {hadith.book} {hadith.number}
                            </span>
                            <Badge variant={hadith.grade === "Sahih" ? "default" : "secondary"}>{hadith.grade}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Link className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ImageIcon className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Video className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[300px] p-4 focus:outline-none"
        style={{ whiteSpace: "pre-wrap" }}
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        onKeyDown={(e) => handleKeyDown(e.nativeEvent)}
        dangerouslySetInnerHTML={{ __html: value }}
        data-placeholder={placeholder}
      />

      {/* Help Text */}
      <div className="border-t bg-gray-50 p-3 text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <span>
            💡 <strong>Shortcuts:</strong>
          </span>
          <span>
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Shift + Q</kbd> for Quran search
          </span>
          <span>
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Shift + H</kbd> for Hadith search
          </span>
        </div>
      </div>
    </div>
  )
}
