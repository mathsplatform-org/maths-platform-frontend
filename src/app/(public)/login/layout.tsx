export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      {children}
    </div>
  )
}