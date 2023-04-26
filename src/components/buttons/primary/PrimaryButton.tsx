export interface PrimaryButtonProps {
  onCLick: () => void;
  leftIconPath?: string;
  rightIconPath?: string;
  children?: React.ReactNode;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className="w-64 h-48 rounded-lg bg-indigo-950 hover:bg-indigo-900"
      onClick={props.onCLick}
    >
      {/* {props.leftIconPath && <img src={props.leftIconPath} alt={props.text} />} */}
      {props.children}
      {/* {props.rightIconPath && (
        <img src={props.rightIconPath} alt={props.text} />
      )} */}
    </button>
  );
}
