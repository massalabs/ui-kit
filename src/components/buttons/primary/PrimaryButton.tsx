import { Body } from "../../Body/Body";

export interface PrimaryButtonProps {
  onCLick: () => void;
  text: string;
  leftIconPath?: string;
  rightIconPath?: string;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className="w-164 h-48 rounded-lg bg-indigo-950 hover:bg-indigo-900"
      onClick={props.onCLick}
    >
      {props.leftIconPath && <img src={props.leftIconPath} alt={props.text} />}
      <Body>{props.text}</Body>
      {props.rightIconPath && (
        <img src={props.rightIconPath} alt={props.text} />
      )}
    </button>
  );
}
