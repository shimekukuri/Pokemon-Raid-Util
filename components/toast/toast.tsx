import React from 'react';

export default function Toast({ content }: { content: string }) {
  return (
    <div className="toast">
      <div className="alert alert-info">
        <div>
          <span>New message arrived.</span>
        </div>
      </div>
    </div>
  );
}
