import { RedirectTile } from './RedirectTile';

export default { title: 'Components/RedirectTile', component: RedirectTile };

export const _Standard = {
  render: () => (
    <div className="flex gap-2">
      <RedirectTile
        title="Massa Bridge"
        description="Bridge tokens between Ethereum and Massa Chains."
        logo={
          <img
            width={40}
            height={40}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
        }
        url="https://bridge.massa.net"
      />

      <RedirectTile
        title="Massa Bridge"
        description="Bridge tokens between Ethereum and Massa Chains."
        variant="secondary"
        logo={
          <img
            width={40}
            height={40}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
        }
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
        title="LARGE MASSA BRIDGE"
        description="Bridge tokens between Ethereum and Massa Chains."
        subtitle="This is the subtitle"
        customClass="justify-evenly text-center"
        customHeaderClass=" flex flex-col items-start"
        logo={
          <img
            width={100}
            height={100}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
        }
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
        description="This is the custom bridge component."
        customSize="w-[400px] h-[200px]"
        logo={
          <img
            width={60}
            height={60}
            className="rounded-full"
            src="https://placehold.jp/150x150.png"
          />
        }
        url="https://bridge.massa.net"
      />
    </>
  ),
};
