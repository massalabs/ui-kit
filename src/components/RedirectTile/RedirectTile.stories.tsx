import { RedirectTile } from './RedirectTile';

export default { title: 'Components/RedirectTile', component: RedirectTile };

export const _Standard = {
  render: () => (
    <div className="flex gap-2">
      <RedirectTile
        header={
          <div className="flex items-center gap-4">
            <img
              width={40}
              height={40}
              className="rounded-full"
              src="https://placehold.jp/150x150.png"
            />
            <h1>Massa Bridge</h1>
          </div>
        }
        body={<p>Bridge tokens between Ethereum and Massa Chains.</p>}
        url="https://bridge.massa.net"
      />
    </div>
  ),
};

export const _Large = {
  render: () => (
    <>
      <RedirectTile
        size="lg"
        header={
          <div>
            <img
              width={40}
              height={40}
              className="rounded-full"
              src="https://placehold.jp/150x150.png"
            />
            <h1>Massa Bridge</h1>
          </div>
        }
        body={<p>Bridge tokens between Ethereum and Massa Chains.</p>}
        url="https://bridge.massa.net"
      />
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
        header={
          <div>
            <img
              width={40}
              height={40}
              className="rounded-full"
              src="https://placehold.jp/150x150.png"
            />
            <h1>Massa Bridge</h1>
          </div>
        }
        body={<p>Bridge tokens between Ethereum and Massa Chains.</p>}
      />
    </>
  ),
};
