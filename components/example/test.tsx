import React, { useState } from 'react';

export default function Test() {
  const [value, setValue] = useState<string>();

  return <input value={value} onChange={(x: string) => setValue(x)}></input>;
}
