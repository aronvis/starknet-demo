## Intro

This is a sample Starknet project using Next 14 with material UI. The app allows users to transfer funds from one wallet address to another.

The project uses starknetkit for the wallet modal and @starknet-react to get connected wallet info using react hooks.

## Update node version (optional)

To run the program you first need to install the correct version of node. Please skip this step if running `node -v` in the terminal shows the default version 18 or later.

1. Install node (If it's not installed):

    ```shell
    brew install node
    ```

2. Install nvm (If it's not installed):

-   Create .zshrc file for **Mac only** (If it doesn't exist):
    ```shell
    touch ~/.zshrc
    ```
-   Install nvm:
    ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```

3. Use node 16.17.0 as default:

-   Install node 16.17.0 (Check `nvm ls` for installed versions):

    ```shell
    nvm install 16.17.0
    ```

-   Set node 16.17.0 as the default:
    ```shell
    nvm alias default 16.17.0
    ```

## Run frontend

1. Run `yarn` to install all dependencies
2. Run `yarn dev` to start the frontend
3. Open http://localhost:3000 in your browser

## Deploy smart contract

1. Install `Starkli` and `Scarb` using the official [starknet instructions](https://docs.starknet.io/quick-start/environment-setup/)
2. Change directory using `cd blockchain/contracts`
3. Build your contract `scarb build`
4. Declare smart contract on Starknet:
    ```shell
     starkli declare --account=~/.starkli-wallets/deployer/account.json --keystore=~/.starkli-wallets/deployer/keystore.json --network=sepolia --compiler-version=2.7.1 target/dev/erc20_new_MyToken.contract_class.json
    ```
5. Deploy smart contract:
    ```shell
    starkli deploy --account=~/.starkli-wallets/deployer/account.json --keystore=~/.starkli-wallets/deployer/keystore.json --network=sepolia <contact hash - received from previous step> <contructor inputs - optional>
    ```
