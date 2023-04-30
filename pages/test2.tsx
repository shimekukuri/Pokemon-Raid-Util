import Layout from '@/components/Layout/Layout';
import LayoutFlex from '@/components/Layout/LayoutFlex';
import React from 'react';

export default function Test2() {
  return (
    <LayoutFlex>
      <div className="flex-1 max-h-full grid grid-cols-4 gap-4 justify-center items-center w-full">
        <div className="col-span-1 bg-primary h-full rounded-2xl shadow-xl"></div>
        <div className="col-span-3 glass min-h-full max-h-full rounded-2xl shadow-xl flex flex-col justify-between">
          <div className="min-h-12">Test 1</div>
          <div className="flex-1 max-h-full overflow-y-scroll">
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
          <div className="min-h-16 bg-accent rounded-b-2xl bg-opacity-50 flex justify-between p-2 gap-12">
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
            <div className="flex justify-center items-center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </LayoutFlex>
  );
}
