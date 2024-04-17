import { RedirectTile } from './RedirectTile';

export default { title: 'Components/RedirectTile', component: RedirectTile };

export const _Standard = {
  render: () => (
    <div className="flex gap-2">
      <RedirectTile url="https://bridge.massa.net">
        <div className="flex gap-2 items-center">
          <img
            width={40}
            height={40}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
          <h1>Massa Bridge</h1>
        </div>
        <p>Bridge tokens between Ethereum and Massa Chains.</p>
      </RedirectTile>

      <RedirectTile variant="secondary" url="https://bridge.massa.net">
        <div>
          <img
            width={40}
            height={40}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
          <h1>Massa Bridge</h1>
        </div>
        <p>Bridge tokens between Ethereum and Massa Chains.</p>
      </RedirectTile>
    </div>
  ),
};

export const _Large = {
  render: () => (
    <>
      <RedirectTile
        size="lg"
        title="LARGE MASSA BRIDGE"
        url="https://bridge.massa.net"
      >
        <div className="flex gap-6 items-center">
          <img
            width={40}
            height={40}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
          <h1>Massa Bridge</h1>
        </div>
        <p>Bridge tokens between Ethereum and Massa Chains.</p>
      </RedirectTile>
    </>
  ),
};

export const _Custom = {
  render: () => (
    <>
      <RedirectTile
        size="cs"
        title="custom bridge"
        customSize="w-[400px] h-[200px]"
        url="https://bridge.massa.net"
      >
        <div className="flex gap-6 items-center">
          <img
            width={40}
            height={40}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
          <h1>Massa Bridge</h1>
        </div>
        <p>Bridge tokens between Ethereum and Massa Chains.</p>
      </RedirectTile>
    </>
  ),
};
