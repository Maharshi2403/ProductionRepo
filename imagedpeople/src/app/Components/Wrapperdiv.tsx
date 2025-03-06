import { ReactNode } from "react";
// this is one way to pass props in typescript  

// ReactNode Object Type
// A React Node is one of the following types:

// Boolean (which is ignored)
// null or undefined (which is ignored)
// Number
// String
// A React element (result of JSX)
// An array of any of the above, possibly a nested one

// in typescript we need to define type of prop before passing into function

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps){
    return (
        <>
          <div className="flex flex-col h-fit w-95/100 mt-10 p-5 bg-black flex m-auto rounded-2xl">
               {children}
          </div>
        </>
    )
}

