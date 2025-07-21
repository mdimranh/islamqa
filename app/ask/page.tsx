"use client"

import type React from "react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Check, ChevronsUpDown, Lightbulb, MessageSquare, Plus, X } from "lucide-react"
import { useState } from "react"

const categories = [
  { value: "aqeedah", label: "Aqeedah" },
  { value: "fiqh", label: "Fiqh" },
  { value: "hadith", label: "Hadith" },
  { value: "quran", label: "Quran" },
  { value: "seerah", label: "Seerah" },
  { value: "dua", label: "Dua & Dhikr" },
  { value: "marriage", label: "Marriage & Family" },
  { value: "business", label: "Business & Finance" },
  { value: "worship", label: "Worship & Prayer" },
  { value: "ethics", label: "Islamic Ethics" },
]

const suggestedQuestions = [
  "What is the ruling on cryptocurrency in Islam?",
  "How to perform Wudu correctly?",
  "Is working in a bank permissible?",
  "What are the conditions for Hajj?",
  "How to calculate Zakat on savings?",
]

export default function AskQuestionPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [newCategory, setNewCategory] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [open, setOpen] = useState(false)

  const addCategory = (categoryValue: string) => {
    if (!selectedCategories.includes(categoryValue)) {
      setSelectedCategories([...selectedCategories, categoryValue])
    }
  }

  const removeCategory = (categoryValue: string) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat !== categoryValue))
  }

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      title,
      description,
      selectedCategories,
      tags,
      isAnonymous,
      newCategory,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Ask a Question</h1>
          <p className="text-gray-600">
            Get authentic Islamic guidance from verified scholars. Please provide as much detail as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span>Question Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Question Title */}
                  {/* <div className="space-y-2">
                    <Label htmlFor="title">Question Title *</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value)
                        setShowSuggestions(e.target.value.length > 10)
                      }}
                      placeholder="What is your Islamic question?"
                      className="text-lg"
                      required
                    />
                    <p className="text-sm text-gray-500">Be specific and clear. Good titles get better answers.</p>
                  </div> */}

                  {/* Similar Questions Suggestions */}
                  {showSuggestions && (
                    <Alert>
                      <Lightbulb className="h-4 w-4" />
                      <AlertDescription>
                        <div className="space-y-2">
                          <p className="font-medium">Similar questions found:</p>
                          <ul className="space-y-1">
                            {suggestedQuestions.slice(0, 3).map((question, index) => (
                              <li key={index} className="text-sm text-blue-600 hover:underline cursor-pointer">
                                • {question}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Question Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Question *</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Provide context, specific circumstances, and any relevant details that will help scholars give you the most accurate answer..."
                      className="min-h-[150px]"
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Include relevant context, your situation, and what you've already researched.
                    </p>
                  </div>

                  {/* Categories */}
                  <div className="space-y-3">
                    <Label>Categories *</Label>
                    <div className="space-y-3">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between"
                          >
                            Select categories...
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command>
                            <CommandInput placeholder="Search categories..." />
                            <CommandList>
                              <CommandEmpty>No category found.</CommandEmpty>
                              <CommandGroup>
                                {categories.map((category) => (
                                  <CommandItem
                                    key={category.value}
                                    onSelect={() => {
                                      addCategory(category.value)
                                      setOpen(false)
                                    }}
                                  >
                                    <Check
                                      className={`mr-2 h-4 w-4 ${selectedCategories.includes(category.value) ? "opacity-100" : "opacity-0"
                                        }`}
                                    />
                                    {category.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>

                      {/* Selected Categories */}
                      {selectedCategories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {selectedCategories.map((categoryValue) => {
                            const category = categories.find((cat) => cat.value === categoryValue)
                            return (
                              <Badge key={categoryValue} variant="secondary" className="flex items-center space-x-1">
                                <span>{category?.label}</span>
                                <X
                                  className="w-3 h-3 cursor-pointer hover:text-red-500"
                                  onClick={() => removeCategory(categoryValue)}
                                />
                              </Badge>
                            )
                          })}
                        </div>
                      )}

                      {/* Add New Category */}
                      <div className="flex space-x-2">
                        <Input
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          placeholder="Suggest a new category"
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            if (newCategory.trim()) {
                              // Add to pending categories for admin approval
                              setNewCategory("")
                            }
                          }}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  {/* <div className="space-y-3">
                    <Label>Tags (Optional)</Label>
                    <div className="space-y-3">
                      <div className="flex space-x-2">
                        <Input
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add relevant tags"
                          className="flex-1"
                          onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                        />
                        <Button type="button" variant="outline" onClick={addTag}>
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="flex items-center space-x-1">
                              <span>{tag}</span>
                              <X
                                className="w-3 h-3 cursor-pointer hover:text-red-500"
                                onClick={() => removeTag(tag)}
                              />
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div> */}

                  {/* Submit Button */}
                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
                    >
                      Submit Question
                    </Button>
                    <Button type="button" variant="outline">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Question Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <p>Be specific and provide context for better answers</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <p>Search existing questions before asking</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <p>Choose appropriate categories and tags</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <p>Be respectful and follow Islamic etiquette</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(0, 6).map((category) => (
                    <Button
                      key={category.value}
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => addCategory(category.value)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
