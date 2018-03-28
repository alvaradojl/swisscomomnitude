# Omnitude Blockchain Explorer



## [Live App](http://omnitude.blockchain-factory.ch)

This project demonstrates an easy way to query the blocks and transactions hosted in hyperledger.
![Preview](/examples/preview.png)


## Installation
1. Clone this project or Download that ZIP file
2. Make sure you have [bower](http://bower.io/), [gulp](https://www.npmjs.com/package/gulp) and  [npm](https://www.npmjs.org/) installed globally
3. On the command prompt run the following commands
- cd `project-directory`
- `bower install`
- `npm install`
- `gulp serve` - For development mode
- `gulp build` - concat, minify and generate the files for deployment


## Explanation
The api exposed is the reflection of the smart contract agreed by the partners of the network. Omnitude is safely hosted in Swisscom Blockchain Factory Infrastructure. A hyperledger network contains the following roles: Network Managers, Peers, Orderers and Certificate Authorities. 

Each transaction pertains to a single channel that is shared across specific peers. The transactions are bundled up into blocks.

For now, a single smart contract is controlling the replenishment across the supply chain, but eventually each hyperledger peer (node) of the network will be the gatekeeper of each status across the supply chain. For every change of status there is an event triggered to inform the rest of the nodes.  

### Other Omnitude websites

- [ICO](https://omnitude.tech/)
- [Portal](https://portal.omnitude.store/)
- [Demo1](https://demo1.omnitude.store/)
- [Demo2](https://demo2.omnitude.store/)
- [Demo3](https://demo3.omnitude.store/) 
