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
      className="w-64 h-48 rounded-lg text-neutral bg-primary hover:bg-tertiary"
      onClick={props.onCLick}
    >
      {/* {props.leftIconPath && <img src={props.leftIconPath} alt={props.text} />} */}
      {props.children}
      <div className="theme-light">
        <p className="text-info">information text</p>
      </div>
      {/* {props.rightIconPath && (
        <img src={props.rightIconPath} alt={props.text} />
      )} */}
    </button>
  );
}
