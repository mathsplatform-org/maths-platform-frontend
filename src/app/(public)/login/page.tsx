import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="relative w-[400px] bg-card text-card-foreground shadow-lg">
        {/* Dark mode toggle */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <Input type="password" placeholder="********" />
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}