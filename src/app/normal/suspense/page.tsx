import { Suspense } from "react";
import { ButtonsListServer } from "@/app/components/ButtonsList/ButtonsList.server";

export default function NormalSuspense() {
  return (
    <Suspense fallback={(<div> loading</div>)}>
      <ButtonsListServer />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
