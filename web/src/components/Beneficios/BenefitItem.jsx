import GradientIcon from "./GradientIcon";

export default function BenefitItem({ text }) {
  return (
    <div className="flex items-center gap-3 justify-center lg:justify-start">
      <GradientIcon />
      <span className="text-sm sm:text-base text-gray-700">{text}</span>
    </div>
  );
}