export interface TabInterface {
  text: string;
}

export function Tab({ ...props }) {
  return (
    // check dimensions
    // check padding
    // check differenbt states
    <div className="w-fit border-b-2 border-brand">
      <p className="text-mas-menu-default">{props.text}</p>
    </div>
  );
}
