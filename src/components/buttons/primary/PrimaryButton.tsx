import { Body } from "../../Body/Body";

interface PrimaryButtonProps {
  onCLick: () => any;
  text: string;
  leftIconPath?: string;
  rightIconPath?: string;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button className="w-164 h-48 rounded-lg" onClick={props.onCLick}>
      {props.leftIconPath && <img src={props.leftIconPath} alt={props.text} />}
      <Body>{props.text}</Body>
      {props.rightIconPath && (
        <img src={props.rightIconPath} alt={props.text} />
      )}
    </button>
  );
}
