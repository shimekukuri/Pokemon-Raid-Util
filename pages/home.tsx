import Layout from '@/components/Layout/Layout';
import React, { Children, useEffect, useState } from 'react';
import NewsCard_1 from '@/components/card/NewsCard_1';

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
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 1 },
  { colSpan: 3 },
  { colSpan: 1 },
  { colSpan: 2 },
  { colSpan: 2 },
  { colSpan: 1 },
  { colSpan: 3 },
  { colSpan: 2 },
  { colSpan: 3 },
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

  const PostContainer = ({ className, children }) => {
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
      {sortData(testData).map((x, i) => {
        if (x.length === 2) {
          console.log(x);
          return (
            <>
              <PostContainer className={`md:col-span-${x[0].colSpan}`}>
                <NewsCard_1 />
              </PostContainer>
              {x[1].length === 3 ? (
                <div className="grid grid-rows-3">
                  {x[1].map((x, i) => (
                    <PostContainer key={i + 'meep'} className={``}>
                      <NewsCard_1 />
                    </PostContainer>
                  ))}
                </div>
              ) : x[1].length === 4 ? (
                <div className="grid grid-col-2 grid-rows-2 col-span-2">
                  {x[1].map((x, i) => (
                    <PostContainer key={i + 'meep'} className={``}>
                      <NewsCard_1 />
                    </PostContainer>
                  ))}
                </div>
              ) : (
                ''
              )}

              <PostContainer className={`md:col-span-${x[1].colSpan}`}>
                <NewsCard_1 />
              </PostContainer>
            </>
          );
        }
        return (
          <PostContainer key={i} className={``}>
            <NewsCard_1 />
          </PostContainer>
        );
      })}
    </Layout>
  );
}

Home.auth = true;
