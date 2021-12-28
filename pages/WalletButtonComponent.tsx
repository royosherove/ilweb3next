import React from "react"
const WalletButton = (props:any) => 
    {
        return (
          <button onClick={()=> alert("Soon!")} className="float-right h-10 pt-2 md:pt-1 items-center place-content-center text-center rounded-l align-right  border-black border bg-violet-500 w-40 text-white px-1 py-1 text-sm md:text-lg">
            Connect Wallet
          </button>
        );
    }

export default WalletButton;
