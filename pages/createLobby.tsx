import React from 'react';
import Layout from '@/components/Layout/Layout';
import { useForm } from 'react-hook-form';

export default function CreateLobby() {
  return (
    <Layout>
      <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-4 gap-2 content-center">
        <div className="bg-primary rounded-2xl shadow-xl py-4 col-span-1 hidden md:block">
          <div className="avatar rounded-full flex items-center justify-center">
            <div className="w-4/5 rounded-full bg-accent">
              <img src="https://images.alphacoders.com/121/1216117.jpg" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between flex-col col-span-3 ">
          <div className="bg-primary-focus rounded-t-2xl h-12 px-4 bg-opacity-50">
            y
          </div>

          <div className="overflow-y-scroll ">
            <div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
            </div>
          </div>
          <div className="bg-accent-focus bg-opacity-50  h-28 rounded-b-2xl px-4 py-2">
            y
          </div>
        </div>
      </div>
    </Layout>
  );
  {
    /* <div className="md:col-span-4 flex">
    <div className="flex-1 grid grid-cols-4 grid-rows-6">
      <div className="bg-primary rounded-2xl shadow-xl py-4 col-span-1">
        <div className="avatar rounded-full flex items-center justify-center">
          <div className="w-4/5 rounded-full bg-accent">
            <img src="https://images.alphacoders.com/121/1216117.jpg" />
          </div>
        </div>
      </div>
      <div className="card glass lg:col-span-3 rounded-2xl shadow-xl">
        {[...Array(9)].map((x, i) => {
          return <div key={`ques${i}`}></div>;
        })}
      </div>
    </div>
  </div> */
  }
}
