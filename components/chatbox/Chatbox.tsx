import { drawerContext } from '@/Context/drawerContext';
import { themeContext } from '@/Context/themeContext';
import React, { useContext, useEffect, useState } from 'react';
import Toast from '../toast/toast';

export default function Chatbox() {
  const { dState, setDSTate } = useContext<any>(drawerContext);
  const { themeState } = useContext(themeContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(themeState);
  }, [isOpen]);

  return (
    <div
      className={`flex w-64 h-64 rounded-xl absolute right-5 bottom-1 flex-col bg-base-100 shadow-2xl border-secondary border-2 ${
        isOpen ? '' : 'animate-chat-box-close'
      }`}
      data-theme={themeState}
    >
      {isOpen ? (
        ''
      ) : (
        <div className="flex-1" onClick={() => setIsOpen(true)}>
          <img
            className="animate-opacity-to-one opacity-0 bg-accent rounded-full"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          ></img>
        </div>
      )}
      <div
        className={`border-b border-base-300 flex items-center h-9 bg-base-200 rounded-t-xl gap-2 px-2 w-full shadow-primary ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <button
          className="rounded-full bg-error h-3 w-3"
          onFocus={() => setIsOpen(false)}
        ></button>
        <button
          className="rounded-full bg-accent-focus h-3 w-3"
          onFocus={() => setIsOpen(false)}
        ></button>
        <button
          className="rounded-full bg-accent h-3 w-3"
          onFocus={() => setIsOpen(false)}
        ></button>
      </div>
      <div className={`flex-1 flex-col flex ${isOpen ? '' : 'hidden'}`}>
        <div className="overflow-y-scroll h-44 w-full">
          <Toast
            content={`A Møøse once bit my sister... No realli! She was Karving her initials on

the møøse with the sharpened end of an interspace tøøthbrush given her by Svenge - her brother-in-law - an Oslo dentist and star of many Norwegian møvies: "The Høt Hands of an Oslo Dentist", "Fillings of Passion", "The Huge Mølars of Horst Nordfink"...

We apologise for the fault in the subtitles. Those responsible have been sacked.

Mynd you, møøse bites Kan be pretti nasti...

We apologise again for the fault in the subtitles. Those responsible for sacking the people who have just been sacked have been sacked.

Møøse trained by YUTTE HERMSGERVØRDENBRØTBØRDA Special Møøse Effects OLAF PROT Møøse Costumes SIGGI CHURCHILLMøøse Choreographed by HORST PROT III Miss Taylor's Møøses by HENGST DOUGLAS-HOME Møøse trained to mix concrete and sign complicated insurance forms by JURGEN WIGG Møøses' noses wiped by BJØRN IRKESTØM-SLATER WALKER Large møøse on the left hand side of the screen in the third scene from the end, given a thorough grounding in Latin, French and "O" Level Geography by BO BENN Suggestive poses for the Møøse suggested by VIC ROTTER Antler-care by LIV THATCHER The directors of the firm hired to continue the credits after the other people had been sacked, wish it to be known that they have just been sacked. The credits have been completed in an entirely different style at great expense and at the last minute. Executive Producer JOHN GOLDSTONE & "RALPH" The Wonder Llama Producer MARK FORSTATER Assisted By EARL J. LLAMA MIKE Q. LLAMA III SY LLAMA MERLE Z. LLAMA IX Directed By 40 SPECIALLY TRAINED ECUADORIAN MOUNTAIN LLAMAS 6 VENEZUELAN RED LLAMAS 142 MEXICAN WHOOPING LLAMAS 14 NORTH CHILEAN GUANACOS (CLOSELY RELATED TO THE LLAMA) REG LLAMA OF BRIXTON 76000 BATTERY LLAMAS FROM "LLAMA-FRESH" FARMS LTD. NEAR PARAGUAY and TERRY GILLIAM & TERRY JONES`}
          />
          <Toast content="asdplfkjasfd jf " />
        </div>
        <div className="flex bg-base-200 rounded-b-xl items-center px-2 py-1 justify-between z-10">
          <textarea
            className="textarea textarea-accent textarea-xs"
            placeholder="Bio"
          ></textarea>
          <button className="btn btn-secondary">Send</button>
        </div>
      </div>
    </div>
  );
}
