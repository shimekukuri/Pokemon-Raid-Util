import React from 'react';
import Layout from '@/components/Layout/Layout';
import { useForm } from 'react-hook-form';

export default function CreateLobby() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-4 lg:col-span-4 gap-4">
        <div className="bg-primary rounded-2xl shadow-xl py-4">
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
    </Layout>
  );
}
