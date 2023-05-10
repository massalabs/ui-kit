import { Theme, Alias } from "./Color";
export function Colors() {
  return (
    <div className="flex gap-4">
      <Alias />
      <Theme theme="theme-light" />
      <Theme theme="theme-dark" />
    </div>
  );
}
