/* eslint-disable @next/next/no-img-element */
import { nanoid } from 'nanoid';
import Head from 'next/head'
import { ReactFragment } from 'react'
import TopMenuComponent from './TopMenuComponent';
import WalletButton from './WalletButtonComponent';
import ReactMarkdown from 'react-markdown';

const text = `
- *Israel web3 dev underground* would like hold its first meetup somewhere.
- It will be comprised of two 45 minute sessions with a 20 minute break in between
- **Planned sessions**:
    - Beginner: **Introduction to coding and testing smart contracts and a web3 frontend (Hello World with an NFT maybe)**
    - Advanced: **Scaling Ethereum with L2 chains : how Arbitrum works under the covers**
- Going forward we would like to host a steady monthly meetup with two sessions , each time by different community members.
- **We are looking for a place to host them that has**:
- Projector and laptop access
- Seating for 30 to 50 people
    - possibly sponsor pizza/drinks (or we'll just pay for them)
- **We are happy to let the host:**
    - Introduce themselves in the first 5 minutes of the meeting
    - Have their logo appearing on our website https://israelweb3.com/
- **Contact**:
    - roy AT osherove.com  , 058 4039765 for direct contact
    - Our discord: https://discord.gg/TGhyW2xY
`;
export default function Home() {
  return (
    <div className="relative w-screen">
      <Head>
        <title>ILW3</title>
        <meta
          name="description"
          content="Israel Web3 and Smart Contract Developers Meetup"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid sm:w-2/3 sm:self-center">
        <TopMenuComponent/>
        <h1 className="font-bold text-xl text-center">
          Hosting Web3 Dev Underground Israel
        </h1>
        <div className="p-2 flex-col flex space-y-2">
          {text.split("-").map((line) => (
            <p key={nanoid()}>
              <ReactMarkdown>{line}</ReactMarkdown>
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
