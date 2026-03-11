import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <Card className="w-full max-w-xl border-white/60 bg-white/80 shadow-2xl shadow-primary/10 backdrop-blur dark:border-white/10 dark:bg-card/80">
        <CardHeader className="space-y-4">
          <Badge variant="secondary" className="w-fit uppercase tracking-[0.2em]">
            toPrompt
          </Badge>
          <div className="space-y-2">
            <CardTitle className="text-2xl">Building your application</CardTitle>
            <CardDescription>
              The scaffold is ready with the official shadcn/ui component base, theme tokens, and
              shared UI primitives.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-16 w-full" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
