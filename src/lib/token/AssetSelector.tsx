import { Dropdown, getAssetIcons, IOption } from '../../components';
import Intl from './i18n';
import { formatAmount } from '../util/parseAmount';
import { Asset } from './models/AssetModel';

interface AssetSelectorProps {
  selectedAsset: Asset | undefined;
  onAssetChange: (asset: Asset) => void;
  selectSymbol?: string;
  assets: Asset[] | undefined;
  isAssetsLoading: boolean;
}

export function AssetSelector(props: AssetSelectorProps) {
  const { assets, selectedAsset, onAssetChange, isAssetsLoading } = props;

  let options: IOption[] = [];

  if (assets) {
    options = assets.map((asset) => {
      const formattedBalance = formatAmount(
        asset.balance || '',
        asset.decimals,
      ).full;
      return {
        itemPreview: asset.symbol,
        item: (
          <div>
            <p>{asset.symbol}</p>
            {asset.balance !== undefined && (
              <p className="mas-caption">
                {Intl.t('balance')} {formattedBalance}
              </p>
            )}
          </div>
        ),
        icon: getAssetIcons(asset.symbol, asset.chainId, false, 28),
        onClick: () => onAssetChange(asset),
      };
    });
  }

  let selectedAssetKey = selectedAsset
    ? assets?.findIndex((asset) => asset.address === selectedAsset.address) || 0
    : 0;

  if (assets && selectedAssetKey === -1) {
    selectedAssetKey = 0;
    onAssetChange(assets[selectedAssetKey]);
  }

  return (
    <Dropdown
      select={selectedAssetKey}
      readOnly={isAssetsLoading}
      size="md"
      options={options}
      className="pb-3.5"
      fullWidth={false}
    />
  );
}
