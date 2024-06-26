# n8n-nodes-seaadmin

![n8n.io - Workflow Automation](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

This repository is the basis for the creation of the SeaTable n8n community node available at https://www.npmjs.com/package/n8n-nodes-seaadmin. This community node always contains the latest updates and fixes. Every change will also be merged into the main product n8n, but sometimes it takes time before the pull requests are accepted.

## About this node

This SeaTable node allows you to automate work in Seatable as **System-Admin**. n8n has built-in support for a wide range of SeaTable features, including get information about teams, team members and statistics.

## How to use SeaTable (as a Sys-Admin) in n8n

Currently, n8n is not shipped with this SeaTable Sys-Admin API node. Therefore an installation of the community module is required.

### Installation of a this community node

1. Open your n8n server.
1. Go to **Settings > Community Nodes**.
1. Select **Install**.
1. Enter `n8n-nodes-seaadmin` in **Enter npm package name**.
1. Agree to the [risks](https://docs.n8n.io/integrations/community-nodes/risks/) of using community nodes: select **I understand the risks of installing unverified code from a public source**.
1. Select **Install**.

After installing the node, you can use it like any other node. n8n displays the node in search results in the **Nodes** panel.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)

## Local development

Read more at https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/#test-your-node.

Here is the summary:

1. Install n8n globally on your PC with `npm install n8n -g`
2. Clone or download this repository and save it anywhere
3. In this downloaded folder run:

```
npm install
npm run build
npm link
```

4. Now install this node in your local n8n instance

```
cd ~/.n8n/nodes
npm link n8n-nodes-seaadmin
```

5. Start the local development area. You need two consoles:

```
# in the node directory execute this, that after every change the dist directory is updated
npm run dev
n8n start
```
