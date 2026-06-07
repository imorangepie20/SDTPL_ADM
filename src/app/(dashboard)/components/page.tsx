"use client"

import * as React from "react"
import {
  BellIcon,
  CheckIcon,
  ChevronRightIcon,
  LoaderIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
  TrashIcon,
  UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ComponentsPage() {
  const [checkboxA, setCheckboxA] = React.useState(false)
  const [checkboxB, setCheckboxB] = React.useState(true)
  const [switchA, setSwitchA] = React.useState(false)
  const [switchB, setSwitchB] = React.useState(true)
  const [selectVal, setSelectVal] = React.useState<string | null>(null)
  const [sliderVal, setSliderVal] = React.useState([40])

  return (
    <div className="flex flex-col gap-8 p-6 pb-12">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Components</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A showcase of all available UI primitives — buttons, forms, avatars, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {/* ── Buttons ── */}
        <Card className="col-span-1 md:col-span-2 xl:col-span-3">
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Variants, sizes, icon buttons, and states.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {/* Variants */}
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Separator orientation="vertical" className="h-8 self-center" />
            {/* Sizes */}
            <Button size="xs">XSmall</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Separator orientation="vertical" className="h-8 self-center" />
            {/* Icon buttons */}
            <Button size="icon" variant="outline" aria-label="Add">
              <PlusIcon />
            </Button>
            <Button size="icon" variant="outline" aria-label="Search">
              <SearchIcon />
            </Button>
            <Button size="icon" variant="destructive" aria-label="Delete">
              <TrashIcon />
            </Button>
            <Separator orientation="vertical" className="h-8 self-center" />
            {/* States */}
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              <LoaderIcon className="animate-spin" />
              Loading…
            </Button>
            <Button>
              <MailIcon />
              With Icon
            </Button>
            <Button variant="outline">
              Continue
              <ChevronRightIcon />
            </Button>
          </CardContent>
        </Card>

        {/* ── Badges ── */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status indicators and labels.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="ghost">Ghost</Badge>
            {/* Colored using className */}
            <span className="inline-flex h-5 items-center rounded-full bg-emerald-100 px-2 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              Success
            </span>
            <span className="inline-flex h-5 items-center rounded-full bg-amber-100 px-2 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Warning
            </span>
            <span className="inline-flex h-5 items-center rounded-full bg-sky-100 px-2 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
              Info
            </span>
          </CardContent>
        </Card>

        {/* ── Avatars ── */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>Sizes and avatar group.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {/* Sizes */}
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar size="default">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              {/* Fallback only */}
              <Avatar size="sm"><AvatarFallback>AB</AvatarFallback></Avatar>
              <Avatar size="default"><AvatarFallback>CD</AvatarFallback></Avatar>
              <Avatar size="lg"><AvatarFallback>EF</AvatarFallback></Avatar>
            </div>
            {/* Group */}
            <div>
              <p className="mb-2 text-xs text-muted-foreground">Avatar Group</p>
              <AvatarGroup>
                <Avatar><AvatarFallback>A1</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>B2</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>C3</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>D4</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>+3</AvatarFallback></Avatar>
              </AvatarGroup>
            </div>
          </CardContent>
        </Card>

        {/* ── Progress & Skeleton ── */}
        <Card>
          <CardHeader>
            <CardTitle>Progress &amp; Skeleton</CardTitle>
            <CardDescription>Loading and progress states.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <Progress value={72}>
              <ProgressLabel>Storage</ProgressLabel>
              <ProgressValue>{(fmt: string | null) => fmt ?? "0%"}</ProgressValue>
            </Progress>
            <Progress value={40}>
              <ProgressLabel>Upload</ProgressLabel>
              <ProgressValue>{(fmt: string | null) => fmt ?? "0%"}</ProgressValue>
            </Progress>
            <Progress value={95}>
              <ProgressLabel>Quota</ProgressLabel>
              <ProgressValue>{(fmt: string | null) => fmt ?? "0%"}</ProgressValue>
            </Progress>
            <Separator />
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">Skeleton</p>
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex items-center gap-3 pt-1">
                <Skeleton className="size-8 rounded-full" />
                <div className="flex flex-1 flex-col gap-1.5">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Tabs ── */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Default and line variants.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-3 text-sm text-muted-foreground">
                Overview content — summary of the current state.
              </TabsContent>
              <TabsContent value="analytics" className="mt-3 text-sm text-muted-foreground">
                Analytics content — detailed metrics and trends.
              </TabsContent>
              <TabsContent value="reports" className="mt-3 text-sm text-muted-foreground">
                Reports content — downloadable data exports.
              </TabsContent>
            </Tabs>
            <Separator />
            <Tabs defaultValue="tab1">
              <TabsList variant="line">
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-3 text-sm text-muted-foreground">
                Line variant tab one.
              </TabsContent>
              <TabsContent value="tab2" className="mt-3 text-sm text-muted-foreground">
                Line variant tab two.
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* ── Tooltips ── */}
        <Card>
          <CardHeader>
            <CardTitle>Tooltips</CardTitle>
            <CardDescription>Hover to reveal contextual info.</CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex flex-wrap gap-3">
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
                  <TooltipContent>This is a tooltip</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Settings"><Settings2Icon /></Button>} />
                  <TooltipContent side="top">Open settings</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Notifications"><BellIcon /></Button>} />
                  <TooltipContent side="right">View notifications</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="destructive" size="icon" aria-label="Delete"><TrashIcon /></Button>} />
                  <TooltipContent>Delete this item</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* ── Separator ── */}
        <Card>
          <CardHeader>
            <CardTitle>Separator</CardTitle>
            <CardDescription>Horizontal and vertical dividers.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">Section A</p>
              <p className="text-sm text-muted-foreground">Content for section A.</p>
            </div>
            <Separator />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">Section B</p>
              <p className="text-sm text-muted-foreground">Content for section B.</p>
            </div>
            <Separator />
            <div className="flex items-center gap-3 text-sm">
              <span>Blog</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Docs</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Source</span>
            </div>
          </CardContent>
        </Card>

        {/* ── Inputs & Form ── */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Inputs &amp; Form Controls</CardTitle>
            <CardDescription>Input, Textarea, Select, Checkbox, Switch, Slider.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Text Input */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="demo-name">Full name</Label>
              <Input id="demo-name" placeholder="Jane Doe" />
            </div>
            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="demo-email">Email address</Label>
              <Input id="demo-email" type="email" placeholder="jane@example.com" />
            </div>
            {/* Disabled Input */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="demo-disabled">Disabled input</Label>
              <Input id="demo-disabled" placeholder="Cannot edit" disabled />
            </div>
            {/* Select */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="demo-select">Role</Label>
              <Select value={selectVal} onValueChange={(v) => setSelectVal(v ?? null)}>
                <SelectTrigger id="demo-select" className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Textarea */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="demo-bio">Bio</Label>
              <Textarea id="demo-bio" placeholder="Tell us a bit about yourself…" />
            </div>
            {/* Checkboxes */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Notifications</p>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="cb-email"
                  checked={checkboxA}
                  onCheckedChange={(c) => setCheckboxA(c === true)}
                />
                <Label htmlFor="cb-email">Email notifications</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="cb-push"
                  checked={checkboxB}
                  onCheckedChange={(c) => setCheckboxB(c === true)}
                />
                <Label htmlFor="cb-push">Push notifications</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="cb-disabled" disabled />
                <Label htmlFor="cb-disabled" className="opacity-50">Disabled option</Label>
              </div>
            </div>
            {/* Switches */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Preferences</p>
              <div className="flex items-center gap-2">
                <Switch
                  id="sw-dark"
                  checked={switchA}
                  onCheckedChange={setSwitchA}
                />
                <Label htmlFor="sw-dark">Dark mode</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="sw-marketing"
                  checked={switchB}
                  onCheckedChange={setSwitchB}
                />
                <Label htmlFor="sw-marketing">Marketing emails</Label>
              </div>
            </div>
            {/* Slider */}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <div className="flex items-center justify-between">
                <Label>Volume</Label>
                <span className="text-sm tabular-nums text-muted-foreground">{sliderVal[0]}</span>
              </div>
              <Slider
                value={sliderVal}
                onValueChange={(v) => setSliderVal(v as number[])}
                min={0}
                max={100}
              />
            </div>
            {/* Submit */}
            <div className="flex gap-2 sm:col-span-2">
              <Button>
                <CheckIcon />
                Save changes
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        {/* ── User Card (composite) ── */}
        <Card>
          <CardHeader>
            <CardTitle>Composite: User Card</CardTitle>
            <CardDescription>Avatar + Badge + Button combined.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {[
              { name: "Alice Martin", role: "Admin", initials: "AM", online: true },
              { name: "Bob Chen", role: "Editor", initials: "BC", online: false },
              { name: "Cara Lee", role: "Viewer", initials: "CL", online: true },
            ].map((user) => (
              <div key={user.name} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Avatar>
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-tight">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={user.online ? "default" : "outline"}>
                    {user.online ? "Online" : "Away"}
                  </Badge>
                  <Button size="icon-sm" variant="ghost" aria-label="User settings">
                    <UserIcon />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
