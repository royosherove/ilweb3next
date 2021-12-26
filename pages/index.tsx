import { nanoid } from 'nanoid'
import Head from 'next/head'
import Image from 'next/image'
import { ReactFragment } from 'react'
import styles from '../styles/Home.module.css'

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
            <div id={nanoid()} className="group col-span-1 w-1/4">
            <div className="bg-blue-50  shadow group-hover:bg-violet-500 group-hover:shadow-lg rounded-md border border-1 p-2 1 ">
                <div className="group-hover:font-bold group-hover:text-white font-semibold text-xl my-2">{title}:</div>
                <div className='group-hover:text-white'>{text}</div>
            </div>
    </div>
  )
}
export default function Home() {
  return (
    <body>
      <div className="">
        <Head>
          <title>ILW3</title>
          <meta
            name="description"
            content="Israel Web3 and Smart Contract Developers Meetup"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="">
          <div className="flex justify-center mt-10">
            <h1 className="grid items-center px-20 py-1 text-2xl font-semibold hover:shadow-xl space-y-0 ">
              <div className=" ">Israel</div>
              <div className="text-3xl text-white font-bold bg-blue-500 rounded-md py-2 px-4 mx-1 leading-1 shadow shadow-red-200">
                Web<sup className="text-xl">3</sup>
                <span className="text-lg text-yellow-300 font-mono font-normal mx-2 leading-1">
                  &
                </span>
                <span>Smart Contracts</span>
              </div>
              <div className="text-right  italic font-normal">
                Developers Meetup
              </div>
            </h1>
          </div>

          <p className={styles.description}>
            Register for the meetup group at{" "}
            <a
              className="text-blue-700 underline font-bold"
              href="https://www.meetup.com/ilw3-israel-web-3-0-smart-contracts-dev-meetup/"
              target='_blank' rel="noreferrer"
            >
              this location
            </a>
          </p>
          <div className=" flex space-x-2 mx-20 place-items-start">
            {indexCards()}
          </div>
        </main>

        <footer className="mx-20 mt-20">
          <div className="text-sm text-right font-mono">
            <a
              className="text-blue-600 underline mx-2"
              href="https://github.com/royosherove/ilweb3next/"
              target='_blank' rel="noreferrer"
            > Contribute code to this website
              on GitHub
            </a>
          </div>
        </footer>
      </div>
    </body>
  );
}
