import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;

  /** for next block link, get next hasg */
  static getNextHash = (
    index: number,
    prevHash: string,
    data: string,
    timestamp: number
  ) => {
    return CryptoJS.SHA256(index + prevHash + data + timestamp).toString();
  };
  /** type checker */
  static validateStructure = (aBlock: Block) => {
    return (
      typeof aBlock.index === "number" &&
      typeof aBlock.hash === "string" &&
      typeof aBlock.prevHash === "string" &&
      typeof aBlock.data === "string" &&
      typeof aBlock.timestamp === "number"
    );
  };

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const firstBlock: Block = new Block(0, "960603", "", "hello", Date.now());

let blockChain: Block[] = [firstBlock];

const getBlockChain = (): Block[] => blockChain;

const getLastestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

/** creatNewBlock => vaildate 2STEP
 * 1. when create hash create
 * 2. when push check hash,
 */

const createNewBlock = (data: string): Block => {
  const prevBlock: Block = getLastestBlock();
  const newIdx: number = prevBlock.index + 1;
  const preHash: string = prevBlock.hash;
  const newTimeStamp: number = getNewTimeStamp();

  const newHash: string = Block.getNextHash(
    newIdx,
    preHash,
    data,
    newTimeStamp
  );
  const newBlock: Block = new Block(
    newIdx,
    newHash,
    preHash,
    data,
    newTimeStamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashBlock = (aBlock: Block): string =>
  Block.getNextHash(
    aBlock.index,
    aBlock.prevHash,
    aBlock.data,
    aBlock.timestamp
  );

const isBlockVaild = (candidateBlock: Block, previousBlock: Block): boolean => {
  return (
    Block.validateStructure(candidateBlock) &&
    previousBlock.index + 1 === candidateBlock.index &&
    previousBlock.hash === candidateBlock.prevHash &&
    getHashBlock(candidateBlock) === candidateBlock.hash
  );
};

const addBlock = (newBlock: Block): void => {
  if (isBlockVaild(newBlock, getLastestBlock())) {
    blockChain.push(newBlock);
  }
};

console.log("++++practice++++");
createNewBlock("sec block");
createNewBlock("3th block");
createNewBlock("4th block");
console.log(blockChain);
export {};
