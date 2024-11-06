import { listNames } from "../../model/listNames";
import { EmotionButtonsList } from "./EmotionButtonsList";

export async function EmotionButtonsListServer() {
  let names: string[] = [];

  try {
    names = await listNames();
  } catch (err) {
    console.log("Failed to list names", err);
  }

  return (
    <EmotionButtonsList names={names} />
  );
}
