import { MenuActive } from "./MenuActive";
import IcoAmountDark from "../assets/ico-amount-dark.svg";

interface AmountProps {
  amount: number;
  fractionDigits?: number;
}

export function Amount(props: AmountProps) {
  const formattedAmount = props.amount.toFixed(props.fractionDigits || 2);

  return (
    <>
      <img src={IcoAmountDark} alt="picto amount" />
      <MenuActive>{formattedAmount}</MenuActive>
    </>
  );
}
