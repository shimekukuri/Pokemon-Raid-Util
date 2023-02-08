import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Select({
  title,
  options,
  valState,
  setValState,
}: {
  title: string;
  options: string[];
  valState: any;
  setValState: any;
}) {
  return (
    <select
      className="select select-primary w-full max-w-xs"
      value={valState}
      onChange={(e) => {
        setValState(e.currentTarget.value);
      }}
    >
      <option disabled selected>
        {title}
      </option>
      {options
        ? options.map((x, i) => {
            return <option key={i + x}>{x}</option>;
          })
        : ''}
    </select>
  );
}
