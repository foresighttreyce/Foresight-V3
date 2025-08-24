cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foresight Enterprise™ - Bitcoin Treasury Portal',
  description: 'Institutional-grade Bitcoin treasury management and trading platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
