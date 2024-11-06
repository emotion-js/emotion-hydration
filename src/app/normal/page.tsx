import { ButtonsListServer } from "@/app/components/ButtonsList/ButtonsList.server";

export default function Normal() {
  return (
    <ButtonsListServer />
  );
}

export const dynamic = "force-dynamic";
