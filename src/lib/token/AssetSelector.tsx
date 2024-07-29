import { useEffect } from 'react';

import { Dropdown, getAssetIcons, IOption } from '../../components';

import Intl from './i18n';
import { formatAmount } from '../util/parseAmount';
import { Asset } from './models/AssetModel';

interface AssetSelectorProps {
  selectedAsset: Asset | undefined;
  setSelectedAsset: (asset: Asset) => void;
  selectSymbol?: string;
  assets: Asset[] | undefined;
  isAssetsLoading: boolean;
}

export function AssetSelector(props: AssetSelectorProps) {
  const {
    selectedAsset,
    setSelectedAsset,
    selectSymbol,
    assets,
    isAssetsLoading,
  } = props;

  useEffect(() => {
    if (selectSymbol) {
      const selectedAsset = assets?.find(
        (asset) => asset.symbol === selectSymbol,
      );
      if (selectedAsset) setSelectedAsset(selectedAsset);
    }
    if (!selectedAsset && assets && assets?.length > 0) {
      setSelectedAsset(assets?.[0]);
    }
  }, [assets, setSelectedAsset, selectedAsset, selectSymbol]);

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
        icon: getAssetIcons(asset.symbol, asset.originChainId, false, 28),
        onClick: () => setSelectedAsset(asset),
      };
    });
  }

  const selectedAssetKey: number = selectedAsset
    ? assets?.indexOf(selectedAsset) || 0
    : 0;

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
