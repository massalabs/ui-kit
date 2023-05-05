import { useState, ComponentPropsWithoutRef } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

export interface PasswordProps extends ComponentPropsWithoutRef<"input"> {
  placeholder?: string;
}

export function Password(props: PasswordProps) {
  const { placeholder } = props;

  let iconClass = `w-5 h-5 inline-block align-text-bottom text-neutral`;

  let open = {
    type: "text",
    icon: (
      <div data-testid="icon-open">
        <FiEyeOff className={iconClass} />
      </div>
    ),
  };

  let close = {
    type: "password",
    icon: (
      <div data-testid="icon-close">
        <FiEye className={iconClass} />
      </div>
    ),
  };

  const [{ type, icon }, setType] = useState(close);
  const [password, setPassword] = useState("");

  function handleOnChange(e) {
    setPassword(e.target.value);
  }

  function toggleIcon() {
    return type === "password" ? setType(open) : setType(close);
  }

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="password-input"
            className={`w-full default-input`}
            type={type}
            value={password}
            onChange={handleOnChange}
            placeholder={placeholder}
          />
        </div>
        <div className="inline -ml-9">
          <button
            className="w-8 h-8 bg-transparent"
            data-testid="password-icon"
            onClick={toggleIcon}
          >
            {icon}
          </button>
        </div>
      </div>
    </div>
  );
}
