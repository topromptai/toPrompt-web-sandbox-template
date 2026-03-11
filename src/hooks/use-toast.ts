"use client";

import { toast as sonnerToast } from "sonner";

type ToastInput = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  return {
    toast: ({ title, description, variant = "default" }: ToastInput) =>
      sonnerToast(title ?? (variant === "destructive" ? "Error" : "Notice"), {
        description,
        className: variant === "destructive" ? "border-destructive text-destructive" : undefined,
      }),
  };
}
