"use client";

import { useTheme } from "@emotion/react";

const ButtonsList = ({ names }: { names: string[] }) => {
  const theme = useTheme();
  return (
    <div className="flex gap-4">
      {names.map(name => (
        <div key={name}>
          <button style={{
            background: theme.colors.primary,
            color: "#fff",
            padding: "0.5rem"
          }} onClick={() => console.log(name)}>
            {name}
          </button>
        </div>
      ))}
    </div>
  )
}

export { ButtonsList }