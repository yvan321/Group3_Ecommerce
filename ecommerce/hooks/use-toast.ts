"use client"

import { useCallback } from "react"
import { toast } from "sonner"

type ToastOptions = any // You can refine this type based on your usage

type ToastType = "success" | "error" | "info" | "warning"

interface UseToastReturn {
  toast: (message: string, options?: ToastOptions) => void
  success: (message: string, options?: ToastOptions) => void
  error: (message: string, options?: ToastOptions) => void
  info: (message: string, options?: ToastOptions) => void
  warning: (message: string, options?: ToastOptions) => void
}

export function useToast(): UseToastReturn {
  const notify = useCallback(
    (message: string, options?: ToastOptions) => {
      toast(message, options)
    },
    []
  )

  const success = useCallback(
    (message: string, options?: ToastOptions) => {
      toast.success(message, options)
    },
    []
  )

  const error = useCallback(
    (message: string, options?: ToastOptions) => {
      toast.error(message, options)
    },
    []
  )

  const info = useCallback(
    (message: string, options?: ToastOptions) => {
      toast(message, { ...options, variant: "info" })
    },
    []
  )

  const warning = useCallback(
    (message: string, options?: ToastOptions) => {
      toast(message, { ...options, variant: "warning" })
    },
    []
  )

  return {
    toast: notify,
    success,
    error,
    info,
    warning,
  }
}
