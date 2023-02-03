import React from 'react';

export function DropDownMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Click
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>test</a>
        </li>
      </ul>
    </div>
  );
}
