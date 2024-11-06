"use client";

import styled from '@emotion/styled'

const EmotionButtonsList = ({ names }: { names: string[] }) => {
  return (
    <div className="flex gap-4">
      {names.map(name => (
        <div key={name}>
          <EmotionButton onClick={() => console.log(name)}>
            {name}
          </EmotionButton>
        </div>
      ))}
    </div>
  )
}

const EmotionButton = styled.button`
    background: purple;
    color: #fff;
    padding: 0.5rem;
`;

export { EmotionButtonsList }