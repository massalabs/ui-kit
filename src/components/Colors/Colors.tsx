import { Color } from "./Color";
export function Colors() {
  const colorBrand = "bg-[#1AE19D]";
  const colorWhite = "bg-[#FFFFFF]";
  const colorDarkGrey = "bg-[#DADADA]";
  const colorLightGrey = "bg-[#F1F1F1]";
  const colorDarkBlue = "bg-[#151A26]";
  const colorBasicBlue = "bg-[#1A202E]";
  const colorLightBlue = "bg-[#2E374C]";
  const colorWarning = "bg-[#FFA41D]";
  const colorError = "bg-[#FF4F4F]";
  const light = [
    { color: colorWhite, theme: "primary" },
    { color: colorLightGrey, theme: "secondary" },
    { color: colorDarkGrey, theme: "tertiary" },
    { color: colorBrand, theme: "brand" },
    { color: colorDarkBlue, theme: "neutral" },
    { color: colorLightBlue, theme: "info" },
    { color: colorBrand, theme: "success" },
    { color: colorWarning, theme: "warning" },
    { color: colorError, theme: "error" },
  ];

  const dark = [
    { color: colorDarkBlue, theme: "primary" },
    { color: colorBasicBlue, theme: "secondary" },
    { color: colorLightBlue, theme: "tertiary" },
    { color: colorBrand, theme: "brand" },
    { color: colorWhite, theme: "neutral" },
    { color: colorDarkGrey, theme: "info" },
    { color: colorBrand, theme: "success" },
    { color: colorWarning, theme: "warning" },
    { color: colorError, theme: "error" },
  ];

  return (
    <div className="flex gap-3">
      <div>
        {dark.map((item, index) => (
          <p key={`dark-${index}`} className="w-40 h-10 mb-2">
            {item.theme}
          </p>
        ))}
      </div>
      <div className="dark">
        {dark.map((item, index) => (
          <Color key={`dark-${index}`} color={item.color} />
        ))}
        Dark theme
      </div>

      <div className="light">
        {light.map((item, index) => (
          <Color key={`light-${index}`} color={item.color} />
        ))}
        White theme
      </div>
    </div>
  );
}
