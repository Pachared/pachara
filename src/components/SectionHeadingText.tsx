import StrokeText from "./StrokeText";

export default function SectionHeadingText({ text }: { text: string }) {
  return (
    <StrokeText
      text={text}
      trigger="scroll"
      strokeColor="currentColor"
      fillColor="currentColor"
      fillMode="wipe"
      fontSize={60}
      matchParentFontSize
      fontWeight={700}
      letterSpacing={0}
      strokeWidth={0.8}
      drawDuration={1.1}
      fillDelay={0.1}
      stagger={0.025}
    />
  );
}
