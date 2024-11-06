import { EmotionButtonsListServer } from "@/app/components/EmotionButtonsList/EmotionButtonsList.server";

export default function Emotion() {
  return (
    <EmotionButtonsListServer />
  );
}

export const dynamic = "force-dynamic";
