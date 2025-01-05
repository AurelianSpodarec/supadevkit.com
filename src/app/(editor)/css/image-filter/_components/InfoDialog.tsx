"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useCallback, useState } from "react";

export function InfoDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);

  // useHotkeys("shift+/", toggleOpen);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="hidden md:flex gap-2">
          {/* <Info02Icon /> About */}
          About Image Filter
        </button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden">
        <div className="flex flex-col gap-3 flex-1 text-[13px] text-gray-11 leading-relaxed">
            <DialogTitle>About</DialogTitle> 
        </div>
      </DialogContent>
    </Dialog>
  );
}