import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function FetchingRound() {
  return (
    <span data-testid="fetching-round" className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-s-success opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-s-success"></span>
    </span>
  );
}

export function FetchingLine() {
  return (
    <div data-testid="fetching-line" className="shadow rounded-md w-24 pt-0.5">
      <div className="animate-pulse flex">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-c-disabled-1 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function FetchingStatus({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-testid="fetching-status"
      className="bg-tertiary rounded-full w-fit px-3 pb-0.5 opacity-30"
    >
      {children}
    </div>
  );
}
