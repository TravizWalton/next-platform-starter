"use client"
import { ArrowRight, Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#0078D4] hover:bg-[#106EBE] active:bg-[#005A9E] px-8 py-3 font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:bg-[#0078D4] min-h-[48px] rounded-md text-white"
    >
      {pending ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          <span>Enviar Mensaje</span>
          <ArrowRight className="w-5 h-5" />
        </>
      )}
    </button>
  )
}
