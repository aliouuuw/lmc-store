import React from 'react'

export const LargeBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="text-xs">{children}</p>
    </div>
  )
}
