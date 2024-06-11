import { formatAmount } from './parseAmount';

export default { title: 'Amount/Format' };

const inputs = [
  '123456789123456789',
  '1234567891234567890000',
  '1234567',
  '123',
  '0',
  '',
  '1000000000200000000',
  '1000000000',
  '1000000000000000000',
  '1000000000000000000234',
  '1000000000000000000000000000000000',
  '1000000000000000000000000000000001',
];

export const _FormatAmount = {
  render: () => {
    return (
      <div className="mas-body text-f-primary">
        <p>input: preview / full</p>
        {[2, 9, 18].map((decimals) => {
          return (
            <>
              <h2 className="mas-subtitle">
                Format amount that have {decimals} decimals
              </h2>
              {inputs.map((input) => {
                const { preview, full } = formatAmount(input, decimals);
                return (
                  <p>
                    {input}: {preview} / {full}
                  </p>
                );
              })}
            </>
          );
        })}
      </div>
    );
  },
};
