<a href="https://switchboard.xyz">
	<img width="100%" src="./.assets/banner.png" />
</a>

# Switchboard Ecosystem

Welcome to the Switchboard Ecosystem repository!

This repository is the data source for the Switchboard Ecosystem page, located at switchboard.xyz/ecosystem.

## About Switchboard

Switchboard is a multichain, permissionless oracle network connecting decentralized applications to real-world data across 10+ blockchains. Our cutting-edge technology brings any data source on-chain, offering customizable feeds, verifiable randomness, and secure storage. Secured by Trusted Execution Environments (TEEs), Switchboard ensures reliable and secure data delivery. With our all-in-one interface, developers can easily create, manage, and monitor data feeds.

## Contributing Guide

We welcome contributions from the community! If you know of a project using Switchboard or if you're a project developer yourself, please help us by adding or updating the relevant metadata.

A project is composed of two files: a JSON file, and an image. To add a new project to the ecosystem page, create both a new JSON file in the `projects` directory and add a new image in the `img` directory.

**!Important!**: If your Project already exists in this repo, refrain from creating a new JSON file in the projects directory! Rather, adapt your old metadata file in a new PR. Same goes for changed images or Logos for your Project.

### How to Contribute

You can contribute in 2 ways:

1. File a PR to this repo with any changes you want to make. Tag @jessupjn as a reviewer.
2. File an issue in this PR using the `Project Update Request` template

#### Metadata File

```jsonc
// projects/switchboard.jsonc
{
  // REQUIRED: The date the project metadata was edited.
  "date": "2020-09-30",
  // REQUIRED: The name of the project.
  "name": "Switchboard",
  // REQUIRED: The one-line summary of the project.
  "brief": "Experience the power of Switchboard, a permissionless oracle network that seamlessly connects dapps to real-world data.",
  // REQUIRED: A relative path to the project image from the root of this repo.
  "img": "/img/switchboard.jpg",
  // REQUIRED: URL to the project's website.
  "website": "https://switchboard.xyz",
  // OPTIONAL: URL to the project's X (formerly Twitter) profile.
  "x": "https://x.com/switchboardxyz",
  // OPTIONAL: URL to the project's Github profile.
  "github": "https://github.com/switchboard-xyz",
  // OPTIONAL: URL to the project's Telegram channel.
  "telegram": "https://telegram.me/switchboardxyz",
  // OPTIONAL: URL to the project's Discord channel invite.
  "discord": "https://discord.gg/switchboardxyz"
}
```

#### Image File

All image files must be 100x100px / at an aspect ratio of 1. Only `.jpg` and `.jpeg` files are accepted.

### Contact

If you have any questions or need further assistance, feel free to open an issue or contact us directly at **<hello@switchboard.xyz>**.

Thank you for contributing to the Switchboard ecosystem!
