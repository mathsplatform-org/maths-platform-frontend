import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[400px] bg-gray-100 dark:bg-gray-900 shadow-lg">
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
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}