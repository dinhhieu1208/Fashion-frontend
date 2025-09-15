import { LoginForm } from '@/components/admin/LoginFrom'
import React from 'react'

export const Login = () => {
  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      {/* Dreamy Sky Pink Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      {/* Your Content/Components */}
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10 z-[100]">
        <div className="w-full max-w-sm md:max-w-3xl relative">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
