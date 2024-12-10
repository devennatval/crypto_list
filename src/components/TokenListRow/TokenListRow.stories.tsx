import type { Meta, StoryObj } from '@storybook/react';

import TokenListRow from './TokenListRow';

const meta = {
  component: TokenListRow,
  title: 'Component/TokenList/TokenListRow',
  tags: ['autodocs'],
} satisfies Meta<typeof TokenListRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currency: {
      "currency_id": 1,
      "currencyGroup": "BTC",
      "color": "#F78B1A",
      "currencySymbol": "BTC",
      "name": "Bitcoin",
      "logo": "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg",
      "decimal_point": 8,
      "listingDate": "2020-09-15T09:43:45.000Z",

      "wallets": [{
        "currency_id": 1,
        "currencyGroup": "BTC",
        "tokenSymbol": "BTC",
        "decimal_point": 8,
        "tokenType": "Bitcoin",
        "blockchain": "Bitcoin",
        "explorer": "https://explorer.bitcoin.com/btc/tx/",
        "listingDate": "2020-09-15T09:43:45.000Z",
        "blockchainName": "Bitcoin",
        "logo": "https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg"
      }],

      "is_limit_order_enabled": true,
      "is_upcoming": false
    },

    priceData: {
      "pair": "btc/idr",
      "latestPrice": "1525238216",
      "day": "-2.21",
      "week": "-0.31",
      "month": "27.30",
      "year": "123.56"
    },

    isCompact: false
  }
};

export const CompactTokenRow: Story = {
  args: {
    currency: {
      "currency_id": 1,
      "currencyGroup": "BTC",
      "color": "#F78B1A",
      "currencySymbol": "BTC",
      "name": "Bitcoin",
      "logo": "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg",
      "decimal_point": 8,
      "listingDate": "2020-09-15T09:43:45.000Z",

      "wallets": [{
        "currency_id": 1,
        "currencyGroup": "BTC",
        "tokenSymbol": "BTC",
        "decimal_point": 8,
        "tokenType": "Bitcoin",
        "blockchain": "Bitcoin",
        "explorer": "https://explorer.bitcoin.com/btc/tx/",
        "listingDate": "2020-09-15T09:43:45.000Z",
        "blockchainName": "Bitcoin",
        "logo": "https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg"
      }],

      "is_limit_order_enabled": true,
      "is_upcoming": false
    },

    priceData: {
      "pair": "btc/idr",
      "latestPrice": "1525238216",
      "day": "-2.21",
      "week": "-0.31",
      "month": "27.30",
      "year": "123.56"
    },

    isCompact: true
  }
};