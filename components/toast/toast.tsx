import React from 'react';

export default function Toast({ content }: { content: string }) {
  return (
    <div className="toast relative max-h-60 py-1">
      <div className="alert alert-info w-full break-words">
        <div className="w-full px-1 break-words break-all text-sm">
          {content}
        </div>
      </div>
    </div>
  );
}
