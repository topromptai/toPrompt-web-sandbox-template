"use client";

import { toast as sonnerToast } from "sonner";

type ToastInput = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function toast({ title, description, variant = "default" }: ToastInput) {
  return sonnerToast(title ?? (variant === "destructive" ? "Error" : "Notice"), {
    description,
    className: variant === "destructive" ? "border-destructive text-destructive" : undefined,
  });
}

export function useToast() {
  return { toast };
}
