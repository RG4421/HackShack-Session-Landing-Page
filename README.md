# HackShack Landing Page & Leaderboard
Hackshack Landing Page for workshops to be listed to view.

## Getting Started
- Clone the repo `git clone https://github.com/HewlettPackard/hpe-hack-shack-lv-19.git`
- `cd hpe-hack-shack-lv-19`
- Install dependencies `yarn install`
- Run both Landing Page & Leaderboard with `yarn dev`
  - Currently Landing Page is configured to launch on port 3001 & Leaderboard to launch on port 3002. Project To Do is to make this configurable.

## To Dos
- Consolidate data / json files and data structure in `/data`
- Modify container logic to consume modified json structure
- Set up env variables and remove hardcoded references in package.json files
- Ensure hack shack hero image `/img/HackShackImage.png` scales responsively
- Remove /frontend from https://github.com/HewlettPackard/hpe-hack-shack-attack and begin using this repo as source.
- Complete project meta data in package.json
