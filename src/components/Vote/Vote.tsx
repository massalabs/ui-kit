// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';

import { TbTriangle, TbTriangleFilled } from 'react-icons/tb';

export interface VoteProps extends ComponentPropsWithoutRef<'div'> {
  votes: number;
  voted?: 'VOTE' | 'UNVOTE';
  onVote: () => void;
  customClass?: string;
}

export function Vote(props: VoteProps) {
  const { votes, voted, onVote, customClass = '', ...rest } = props;

  const isVote = voted === 'VOTE';
  const isUnVote = voted === 'UNVOTE';

  return (
    <div
      data-testid="vote"
      className={`text-f-primary cursor-default ${customClass}`}
      {...rest}
    >
      <div data-testid="vote-up" className="cursor-pointer" onClick={onVote}>
        {isVote ? (
          <TbTriangleFilled data-testid="up-filled" />
        ) : (
          <TbTriangle data-testid="up-not-filled" />
        )}
      </div>
      <div className="pl-0.5">{votes}</div>
      <div data-testid="vote-down" className="cursor-pointer" onClick={onVote}>
        {isUnVote ? (
          <TbTriangleFilled data-testid="down-filled" className="rotate-180" />
        ) : (
          <TbTriangle data-testid="down-not-filled" className="rotate-180" />
        )}
      </div>
    </div>
  );
}
