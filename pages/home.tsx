import Layout from '@/components/Layout/Layout';
import React, { Children, useEffect, useState } from 'react';
import NewsCard_1 from '@/components/card/NewsCard_1';
import HeroHome from '@/components/hero/HeroHome';
import Hero from '@/components/hero/Hero';

interface tData {
  colSpan: number;
}

const testData: tData[] = [
  { colSpan: 1 },
  { colSpan: 2 },
  { colSpan: 3 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 1 },
  { colSpan: 3 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 2 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 3 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 3 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 1 },
  { colSpan: 3 },
  { colSpan: 3 },
  { colSpan: 3 },
  { colSpan: 3 },
  { colSpan: 2 },
  { colSpan: 3 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 3 },
];

const sortData = (arr: tData[]): any[] => {
  let span1 = [];
  let span2 = [];
  let span3 = [];
  let ansr = [];

  const flush = (arr1, arr2) => {
    ansr.push([...arr1, ...arr2]);
  };

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].colSpan) {
      case 1: {
        span1.push(arr[i]);
        break;
      }
      case 2: {
        span2.push(arr[i]);
        break;
      }
      case 3: {
        span3.push(arr[i]);
        break;
      }
    }

    if (span3.length > 1 && span1.length >= 3) {
      ansr.push([span3.pop(), span1.splice(0, 3)]);
      continue;
    }

    if (span2.length >= 1 && span1.length >= 4) {
      ansr.push([span2.pop(), span1.splice(0, 4)]);
      continue;
    }

    if (span2.length >= 2) {
      ansr.push([span2.pop(), span2.pop()]);
      continue;
    }
  }

  ansr = [...ansr, ...span1, ...span2, ...span3];

  return ansr;
};

export default function Home() {
  const [gridLayoutArray, setGridLayoutArray] = useState();
  const [prevPost, setPrevPost] = useState<number>();
  const [storedPost, setStoredPost] = useState([]);

  const PostContainer = ({
    className,
    children,
  }: {
    className?: string;
    children: any;
  }) => {
    // const arr = className.split(' ').filter((x) => x !== '');

    // const test = arr[arr.length - 1];

    // switch (test) {
    //   case 'md:col-span-2': {
    //     setPrevPost(() => 2);
    //     console.log(prevPost);
    //     break;
    //   }
    //   case 'md:col-span-3': {
    //     setPrevPost(3);
    //     console.log(prevPost);
    //     break;
    //   }
    // }

    return <div className={`${className} p-2 flex`}>{children}</div>;
  };

  return (
    <Layout>
      <HeroHome />

      {sortData(testData).map((x, i) => {
        if (
          typeof x[0] === 'object' &&
          x[0].colSpan === 3 &&
          x[1].length === 3
        ) {
          const r = Math.floor(Math.random() * 100) % 2;

          if (r) {
            return (
              <div
                key={'news' + i}
                className={`col-span-4 grid md:grid-cols-4`}
              >
                <PostContainer className="col-span-3">
                  <NewsCard_1></NewsCard_1>
                </PostContainer>
                <div className="md:grid-rows-3">
                  {x[1].map((x, ii) => {
                    return (
                      <PostContainer key={'col' + i + ii} className="">
                        <NewsCard_1></NewsCard_1>
                      </PostContainer>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={'news' + i}
                className={`col-span-4 grid md:grid-cols-4`}
              >
                <div className="md:-rows-3">
                  {x[1].map((x, ii) => {
                    return (
                      <PostContainer key={'col' + i + ii} className="">
                        <NewsCard_1></NewsCard_1>
                      </PostContainer>
                    );
                  })}
                </div>
                <PostContainer className="col-span-3">
                  <NewsCard_1></NewsCard_1>
                </PostContainer>
              </div>
            );
          }
        }

        if (
          typeof x[0] === 'object' &&
          x[0].colSpan === 2 &&
          x[1].length === 4
        ) {
          const r = Math.floor(Math.random() * 100) % 2;

          if (r) {
            return (
              <div
                key={'news' + i}
                className={`col-span-4 grid md:grid-cols-4`}
              >
                <PostContainer className="col-span-2">
                  <NewsCard_1></NewsCard_1>
                </PostContainer>
                <div className=" col-span-2 grid md:grid-rows-2 md:grid-cols-2">
                  {x[1].map((x, ii) => {
                    return (
                      <PostContainer key={'col' + i + ii} className="">
                        <NewsCard_1></NewsCard_1>
                      </PostContainer>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={'news' + i}
                className={`col-span-4 grid md:grid-cols-4`}
              >
                <div className=" col-span-2 grid md:grid-rows-2 grid-cols-2">
                  {x[1].map((x, ii) => {
                    return (
                      <PostContainer key={'col' + i + ii} className="">
                        <NewsCard_1></NewsCard_1>
                      </PostContainer>
                    );
                  })}
                </div>
                <PostContainer className="col-span-2">
                  <NewsCard_1></NewsCard_1>
                </PostContainer>
              </div>
            );
          }
        }

        if (typeof x[0] === 'object' && typeof x[1] === 'object') {
          return (
            <div key={'news' + i} className="col-span-4 grid md:grid-cols-4">
              <PostContainer className="col-span-2">
                <NewsCard_1></NewsCard_1>
              </PostContainer>
              <PostContainer className="col-span-2">
                <NewsCard_1></NewsCard_1>
              </PostContainer>
            </div>
          );
        }

        return (
          <div key={i} className="sm:col-span-4 md:col-span-1">
            <PostContainer>
              <NewsCard_1 />
            </PostContainer>
          </div>
        );
      })}
    </Layout>
  );
}

Home.auth = true;
