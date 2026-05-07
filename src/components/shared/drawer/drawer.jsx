"use client"

import { Bars, Code, Microscope, House, Books } from "@gravity-ui/icons"
import { Button, Drawer } from "@heroui/react"
import { useState } from "react"

export function Navigation({setCategory}) {
  const navItems = [
    { icon: House, label: "All Categories", value : "all"},
    { icon: Books, label: "Story", value : "story" },
    { icon: Code, label: "Tech" , value : "tech"},
    { icon: Microscope, label: "Science", value : "science" },
  ]

  const [open, setOpen] = useState(false);
  return (
    <Drawer>
      <Button variant="secondary" onPress={() => setOpen(true)}>
        <Bars />
        Menu
      </Button>
      <Drawer.Backdrop  isOpen={open} onOpenChange={setOpen}>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />

            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>

            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                      type="button" onClick={() => {
                        setCategory(item.value);
                        setOpen(false);
                      }}
                    >
                      <Icon className="size-5 text-muted" />
                      {item.label}
                    </button>
                  )
                })}
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  )
}
