import React from 'react';

export default function Example({ dest }) {
  return (
    <ul>
      {dest.map((item) => (
        <li key={item.name}>
          {item.name}-MessageCount:{item.messageCount}
        </li>
      ))}
    </ul>
  );
}
