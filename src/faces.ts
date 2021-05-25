export interface StateInterface {
  name: string;
  ticker: string;
  description: string;
  owner: string;

  balances: { [address: string]: number };
  invites: { [address: string]: number };
}

export interface ActionInterface {
  input: any;
  caller: string;
}
