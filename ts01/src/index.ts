// import * as CryptoJS from "crypto-js";

// class Block {
//   public index: number;
//   public hash: string;
//   public previousHash: string;
//   public data: string;
//   public timestamp: number;

//   static calculateBlockHash = (
//     index: number,
//     previousHash: string,
//     timestamp: number,
//     data: string
//   ): string =>
//     CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

//   constructor(
//     index: number,
//     hash: string,
//     previousHash: string,
//     data: string,
//     timestamp: number
//   ) {
//     this.index = index;
//     this.hash = hash;
//     this.previousHash = previousHash;
//     this.data = data;
//     this.timestamp = timestamp;
//   }
// }

// const genesisBlock: Block = new Block(0, "182736745", "", "hellow", 20200705);
// let blockchain: Block[] = [genesisBlock];

// const getBlockchain = (): Block[] => blockchain;
// const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
// const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// export {};

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const doyoung = new Human("dos", 24, "male");
const sayHi = (person: Human): string => {
  return `${person.name} ${person.age} ${person.gender}`;
};
console.log(sayHi(doyoung));

export {};
