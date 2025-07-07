export function ProgressBar({ value }: { value: number }) {
  const progress = Math.max(0, Math.min(100, value)); // Clamp value between 0 and 100
  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <div
        className="bg-primary h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
