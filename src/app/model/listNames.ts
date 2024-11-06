async function listNames() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return ["Lisa", "Jon", "Bob"];
}

export { listNames };
