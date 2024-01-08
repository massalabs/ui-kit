// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

const baseClass = 'w-40 h-10 mb-2';
function Color({ color }: { color: string }) {
  return <div id={color} className={`${baseClass} ${color}`} />;
}

export function Alias() {
  const classAlias = `${baseClass} text-center`;

  const Colors = () => (
    <div>
      <p className={classAlias}>primary</p>
      <p className={classAlias}>secondary</p>
      <p className={classAlias}>tertiary</p>
      <p className={classAlias}>brand</p>
      <p className={classAlias}>neutral</p>
      <p className={classAlias}>info</p>
    </div>
  );

  const States = () => (
    <div>
      <p className={classAlias}>s-success</p>
      <p className={classAlias}>s-warning</p>
      <p className={classAlias}>s-error</p>
      <p className={classAlias}>s-info</p>
    </div>
  );
  const Components = () => (
    <div>
      <p className={classAlias}>c-default</p>
      <p className={classAlias}>c-hover</p>
      <p className={classAlias}>c-pressed</p>
      <p className={classAlias}>c-disabled-1</p>
      <p className={classAlias}>c-disabled-2</p>
      <p className={classAlias}>c-error</p>
    </div>
  );
  const Icons = () => (
    <div>
      <p className={classAlias}>i-primary</p>
      <p className={classAlias}>i-secondary</p>
      <p className={classAlias}>i-tertiary</p>
    </div>
  );
  const Fonts = () => (
    <div>
      <p className={classAlias}>f-primary</p>
      <p className={classAlias}>f-secondary</p>
      <p className={classAlias}>f-tertiary</p>
      <p className={classAlias}>f-disabled-1</p>
      <p className={classAlias}>f-disabled-2</p>
    </div>
  );

  return (
    <div className="mb-2">
      <br className={baseClass}></br>
      <p className={baseClass}>Colors : </p>
      <Colors />

      <p className={baseClass}>States :</p>
      <States />

      <p className={baseClass}>Components :</p>
      <Components />
      <p className={baseClass}>Icons :</p>
      <Icons />

      <p className={baseClass}>Fonts</p>
      <Fonts />
    </div>
  );
}
export function Theme() {
  const Colors = () => (
    <div>
      <Color color="bg-primary" />
      <Color color="bg-secondary" />
      <Color color="bg-tertiary" />
      <Color color="bg-brand" />
      <Color color="bg-neutral" />
      <Color color="bg-info" />
    </div>
  );

  const States = () => (
    <div>
      <Color color="bg-s-success" />
      <Color color="bg-s-warning" />
      <Color color="bg-s-error" />
      <Color color="bg-s-info" />
    </div>
  );
  const Components = () => (
    <div>
      <Color color="bg-c-default" />
      <Color color="bg-c-hover" />
      <Color color="bg-c-pressed" />
      <Color color="bg-c-disabled-1" />
      <Color color="bg-c-disabled-2" />
      <Color color="bg-c-error" />
    </div>
  );
  const Icons = () => (
    <div>
      <Color color="bg-i-primary" />
      <Color color="bg-i-secondary" />
      <Color color="bg-i-tertiary" />
    </div>
  );
  const Fonts = () => (
    <div>
      <Color color="bg-f-primary" />
      <Color color="bg-f-secondary" />
      <Color color="bg-f-tertiary" />
      <Color color="bg-f-disabled-1" />
      <Color color="bg-f-disabled-2" />
    </div>
  );

  return (
    <div className="mb-2">
      <div className={baseClass} />

      <br className="w-40 h-10"></br>

      <Colors />

      <div className={baseClass} />

      <States />

      <div className={baseClass} />

      <Components />

      <div className={baseClass} />

      <Icons />

      <div className={baseClass} />

      <Fonts />
    </div>
  );
}
