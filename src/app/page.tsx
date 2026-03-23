function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-foreground/10 dark:bg-foreground/20 ${className}`} />;
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl rounded-xl border-white/60 bg-white/80 shadow-2xl shadow-primary/10 backdrop-blur dark:border-white/10 dark:bg-card/80">
        <div className="space-y-4 p-6">
          <span className="w-fit rounded-md bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
            toPrompt
          </span>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Building your application</h1>
            <p className="text-sm text-foreground/70">
              The scaffold is ready with Tailwind theme tokens and a shared UI foundation.
            </p>
          </div>
        </div>
        <div className="space-y-4 p-6 pt-0">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-16 w-full" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
