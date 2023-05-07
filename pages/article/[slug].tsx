import React from 'react';
import db from '@/utilities/db/db';
import User from '@/models/User';
import Layout from '@/components/Layout/Layout';

export default function Aritcle({ slug }) {
  console.log(slug);
  return (
    <Layout>
      <div>Test</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  // await db.connect();
  // let data = await User.findOne({ name: id }).lean();
  // // @ts-expect-error
  // data._id = data._id.toString();
  // console.log(data);
  // await db.disconnect();
  // if (!data) {
  //   return { props: { user: `Not Found` } };
  // }

  // return { props: { user: { _id: data._id, friends: data.friends } } };

  return { props: { slug: slug } };
}
