"use client"

import { Bars, Code, Microscope, House, Books } from "@gravity-ui/icons"
import { Button, Drawer } from "@heroui/react"

export function Navigation() {
  const navItems = [
    { icon: House, label: "All Categories" },
    { icon: Books, label: "Story" },
    { icon: Code, label: "Tech" },
    { icon: Microscope, label: "Science" },
  ]

  return (
    <Drawer>
      <Button variant="secondary">
        <Bars />
        Menu
      </Button>

      <Drawer.Backdrop>
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
                      type="button"
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