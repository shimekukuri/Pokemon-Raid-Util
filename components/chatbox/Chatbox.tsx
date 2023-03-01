import React, { useState, useContext, useEffect } from 'react';
import { themeContext } from '@/Context/themeContext';
import Toast from '../toast/toast';

export default function ChatboxController() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [firstRender, setFirstRender] = useState(false);
  const { themeState } = useContext(themeContext);

  useEffect(() => {
    setFirstRender(true);
  }, []);

  const closedComponent = () => {
    return (
      <div
        className={`w-12 h-12 bg-accent border-2 border-secondary ${
          !isOpen && firstRender && 'rounded-full'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <img
          className="animate-opacity-to-one opacity-0 bg-accent rounded-full"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        ></img>
      </div>
    );
  };

  const openComponent = () => {
    return (
      <div
        className={`flex md:w-96 md:h-96 rounded-xl relative flex-col bg-base-100 shadow-2xl border-secondary border-2`}
        data-theme={themeState}
      >
        <div
          className={`border-b border-base-300 flex items-center h-9 bg-base-200 rounded-t-xl gap-2 px-2 w-full shadow-primary ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <button
            className="rounded-full bg-error h-3 w-3"
            onClick={() => setIsOpen(false)}
          ></button>
          <button
            className="rounded-full bg-accent-focus h-3 w-3"
            onClick={() => setIsOpen(false)}
          ></button>
          <button
            className="rounded-full bg-accent h-3 w-3"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
        <div className={`flex-1 flex-col flex ${isOpen ? '' : 'hidden'}`}>
          <div className="overflow-y-scroll h-44 md:h-72 w-full flex flex-col ">
            <Toast content={`as;dlkfjas;ldkfj asl;kdfj as;lkdfj ;alskjf `} />
            <Toast
              content={`Test 1
      
      Test 2
      `}
            />
            <Toast content=" Nest " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content="asdplfkjasfd jf " />
            <Toast content=" End " />
          </div>
          <div className="flex bg-base-200 rounded-b-xl items-center px-2 py-1 gap-1 justify-between z-10">
            <textarea
              className="textarea textarea-accent textarea-xs flex-1 text-sm"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-secondary">Send</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      data-theme={themeState}
      className={`${isOpen ? 'rounded-xl' : 'rounded-full'} snap-end`}
    >
      {isOpen ? openComponent() : closedComponent()}
    </div>
  );
}
