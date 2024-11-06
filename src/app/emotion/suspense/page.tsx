import { Suspense } from "react";
import { EmotionButtonsListServer } from "@/app/components/EmotionButtonsList/EmotionButtonsList.server";

export default function EmotionSuspense() {
  return (
    <Suspense fallback={(<div> loading</div>)}>
      <EmotionButtonsListServer />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
