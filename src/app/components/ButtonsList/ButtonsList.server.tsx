import { listNames } from "../../model/listNames";
import { ButtonsList } from "./ButtonsList";

export async function ButtonsListServer() {
  let names: string[] =  [];

  try {
    names = await listNames();
  } catch (err) {
    console.log("Failed to list names", err);
  }

  return (
    <ButtonsList names={names} />
  );
}
