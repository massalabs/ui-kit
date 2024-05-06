// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, ComponentPropsWithoutRef, cloneElement } from 'react';
import { TbTriangle, TbTriangleFilled } from 'react-icons/tb';

export interface DescriptionProps extends ComponentPropsWithoutRef<'div'> {
  preIcon: JSX.Element;
  title: string;
  website: string;
  description: string;
  votes?: number;
  voted?: 'VOTE' | 'UNVOTE';
  onVoteUp?: () => void;
  onVoteDown?: () => void;
  customClass?: string;
  variant?: 'secondary' | 'primary' | undefined;
  children?: ReactNode;
}

interface Classes {
  [key: string]: string | object;
}

interface VoteProps extends ComponentPropsWithoutRef<'div'> {
  votes: number;
  voted: 'VOTE' | 'UNVOTE';
  onVoteUp: () => void;
  onVoteDown: () => void;
}

function Vote(props: VoteProps) {
  const { votes, voted, onVoteUp, onVoteDown } = props;

  function onClickItem(arg: 1 | -1) {
    switch (voted) {
      case 'VOTE': {
        arg === 1 ? onVoteDown() : (onVoteDown(), onVoteDown());
        break;
      }
      case 'UNVOTE': {
        arg === -1 ? onVoteUp() : (onVoteUp(), onVoteUp());
        break;
      }
      default: {
        arg === 1 ? onVoteUp() : onVoteDown();
        break;
      }
    }
  }

  return (
    <>
      <div onClick={() => onClickItem(1)}>
        {voted === 'VOTE' ? <TbTriangleFilled /> : <TbTriangle />}
      </div>
      <div className="pl-0.5">{votes}</div>
      <div className="rotate-180" onClick={() => onClickItem(-1)}>
        {voted === 'UNVOTE' ? <TbTriangleFilled /> : <TbTriangle />}
      </div>
    </>
  );
}

export function Description(props: DescriptionProps) {
  const {
    preIcon,
    title,
    website,
    description,
    votes,
    voted,
    onVoteUp,
    onVoteDown,
    variant = 'primary',
    customClass = '',
    ...rest
  } = props;

  const vote =
    votes !== undefined && voted !== undefined && onVoteUp && onVoteDown;

  const CLASSES: Classes = {
    root: 'flex justify-center items-center',
    primary: {
      default: 'default-primary',
      preIcon: 'bg-primary text-f-primary rounded-full p-1 h-8 w-8 mr-2',
    },
    secondary: {
      default: 'default-secondary bg-secondary hover:bg-tertiary',
      preIcon: 'bg-neutral text-f-secondary rounded-full p-1 h-8 w-8 mr-2',
    },
  };

  const VARIANT = CLASSES[variant] as Classes;

  const clonedPreIcon = preIcon
    ? cloneElement(preIcon, {
        className: VARIANT.preIcon,
      })
    : null;

  return (
    <div
      data-testid="description"
      className={`w-full p-3 rounded-lg mas-menu-active cursor-pointer 
                  grid grid-cols-3 grid-rows-2 gap-3 lg:flex lg:justify-between
                  lg:items-center
                  ${VARIANT.default}
                  ${customClass}`}
      {...rest}
    >
      <div className={`${CLASSES.root} col-span-2 justify-self-start`}>
        <div>{clonedPreIcon}</div>
        <div className="flex-col mas-subtitle">
          <div className="mas-menu-active">{title}</div>
          <div className="mas-caption">{website}</div>
        </div>
      </div>
      <div className="col-span-2 col-start-1 row-start-2 self-center mas-caption">
        {description}
      </div>
      <div className="row-span-1 col-start-3 row-start-1 place-self-end">
        {vote ? (
          <Vote
            votes={votes}
            voted={voted}
            onVoteUp={onVoteUp}
            onVoteDown={onVoteDown}
          />
        ) : null}
      </div>
    </div>
  );
}
