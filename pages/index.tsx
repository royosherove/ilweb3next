/* eslint-disable @next/next/no-img-element */
import { nanoid } from 'nanoid';
import Head from 'next/head'
import { ReactFragment } from 'react'
import TopMenuComponent from './TopMenuComponent';
import WalletButton from './WalletButtonComponent';

function indexCards():ReactFragment{
  const cards = [
    {title:"Purpose",
      text:`Discuss and network to meet likeminded israeli developers interested in developing and coding web3 projects, 
      smart contracts and related technologies.`},
    {title:"This is NOT",
      text:`This is NOT a group relating to crypto investment or NFT/Token speculation - 
      it is about the underlying techon0logy and what it can enable.`},
    {title:"Audience",
      text:`The group is intended for developers and architects 
      working on web3 decentralized projects both frontend and backend 
      (smart contracts, zero knowledge platforms and more).`},
    {title:"Meetings",
      text:`Meet and greet, network, discuss and learn from each other about specific technical topics or overall trends in web3.
       Due to COVID we will meet both online and offline in a hybrid manner.  
       overall trends in web3. Due to COVID we will meet both online and offline in a hybrid manner.`},
  ]
    return <>
      {cards.map(c=>indexCard(c.title,c.text))}

    </>
}
function indexCard(title:string,text:string): ReactFragment{
  return (
    <div className="group md:w-1/4 my-2 mx-2" key={nanoid()}>
      <div className="bg-blue-50 shadow group-hover:bg-violet-500 group-hover:shadow-lg rounded-md border border-1 p-2 1 duration-100 transition-all ">
        <div className="ml-2 group-hover:ml-0 scale-95  group-hover:scale-100 group-hover:text-white group-hover:font-bold font-semibold text-xl my-2 transition-all duration-500 ">
          {title}:
        </div>
        <div className="group-hover:text-white transition-all duration-200">{text}</div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ILW3</title>
        <meta
          name="description"
          content="Israel Web3 and Smart Contract Developers Meetup"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid">
        <div className=''>
          <WalletButton />
          <TopMenuComponent/>
        </div>

        <div className="flex justify-center mt-10">
          <h1 className="grid items-center px-2 md:px-20 py-1 text-lg md:text-2xl font-semibold space-y-0 ">
            <div className=" ">Israel</div>
            <div className=" md:flex text-3xl text-white font-bold bg-blue-500 rounded-md py-2 px-4 mx-1 leading-1 shadow shadow-red-200">
              <div>
                Web<sup className="text-xl">3</sup>
                <span className="text-lg text-yellow-300 font-mono font-normal mx-2 leading-1">
                  &
                </span>
              </div>
              <span>Smart Contracts</span>
            </div>
            <div className="text-right  italic font-normal text-sm md:text-lg">
              Developers Meetup
            </div>
          </h1>
        </div>
        <div className="flex-grid sm:flex space-x-2 sm:mx-20  sm:items-start mt-20 ">
          {indexCards()}
        </div>
      </main>

      <footer className="grid  m-2 text-center space-x-2 lg:mx-20 lg:mt-20">
        <div className="text-sm lg:text-right font-mono">
          <a
            className="text-blue-600 underline mx-2"
            href="https://ipfs.fleek.co/ipfs/QmR1Bro6godmmfWpLGUZpUsKsbKp4A1vkzK9MZQpYTTYKa/"
            target="_blank"
            rel="noreferrer"
          >
            IPFS Link 1 (Fleek)
          </a>
        </div>
        <div className="text-sm lg:text-right font-mono">
          <a
            className="text-blue-600 underline mx-2"
            href="https://bafybeibhs2vhdw2gp3dbcq4kk7pw5pitad36cdnibgccoby4se2znivu4e.ipfs.infura-ipfs.io/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            IPFS Link 2 (infura)
          </a>
        </div>
        <div className="text-sm lg:text-right font-mono">
          <a
            className="text-blue-600 underline mx-2"
            href="https://github.com/royosherove/ilweb3next/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Contribute code to this website on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
