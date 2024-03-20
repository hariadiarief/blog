import React from 'react'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children
}: MarketingLayoutProps) {
  return (
    <div className='flex  min-h-screen flex-col'>
      <main className='flex flex-1 justify-center'>{children}</main>
    </div>
  )
}
