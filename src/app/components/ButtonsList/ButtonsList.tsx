"use client";

const ButtonsList = ({ names }: { names: string[] }) => {
  return (
    <div className="flex gap-4">
      {names.map(name => (
        <div key={name}>
          <button style={{
            background: "purple",
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