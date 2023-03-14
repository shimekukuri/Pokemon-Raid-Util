import React, { useContext } from 'react';
import { userContext, USER_ACTIONS } from '@/utilities/userState/UserReducer';
import db from '@/utilities/db/db';
import User from '@/models/User';
import Layout from '@/components/Layout/Layout';
import Card1 from '@/components/card/Card1';
import Card2 from '@/components/card/Card2';
import dynamic from 'next/dynamic';

function IDID({ user }) {
  const { userState, userDispatch } = useContext(userContext);

  const { image, name } = user;
  return (
    <Layout>
      <div className="md:col-span-4 flex justify-center">
        <div className="card w-full glass pt-4">
          <figure>
            <div className="rounded-full bg-accent bg-opacity-50">
              <img
                className="w-56"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`}
                alt="car!"
              />
            </div>
          </figure>
          <div className="card-body">
            <div className="w-full flex justify-center items-center">
              <h2 className="card-title text-5xl justify-self-center">
                {name}
              </h2>
            </div>
            <p>
              <div className="divider"></div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="w-full flex justify-center items-center flex-1 flex-col">
                  <h3 className="text-xl">Bio</h3>
                  <div className="flex-1 w-full bg-secondary bg-opacity-50 rounded-2xl p-4 shadow-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    volutpat orci eu tortor tempus efficitur. Donec quis nibh
                    sodales, tempus risus eu, auctor urna. Aenean auctor quis
                    nisl sed ultrices. Mauris at enim sit amet velit porttitor
                    efficitur eget et nibh. Cras nunc urna, vulputate et
                    lobortis a, tristique vitae orci. Nunc rhoncus pulvinar dui
                    sit amet tempus. Mauris malesuada accumsan nulla quis
                    condimentum. Donec sed condimentum erat. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Phasellus ut arcu justo. Vestibulum nec
                    aliquet elit, a rutrum diam. Cras aliquam scelerisque
                    turpis, nec aliquet velit laoreet ut. Cras faucibus justo
                    eget urna dapibus suscipit. Aliquam erat volutpat. Nulla
                    rhoncus vitae quam ac tempus. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Pellentesque augue elit,
                    maximus eget dui quis, aliquet fringilla libero. Nam sed
                    purus nisi. Donec hendrerit est non lorem ultrices auctor.
                  </div>
                </div>
                <div className="divider md:divider-horizontal"></div>
                <div className="flex-1 w-full flex justify-center items-center flex-col">
                  <h3 className="text-xl">Rating</h3>
                  <div className="rating gap-1">
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-red-400"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-yellow-400"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-lime-400"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-heart bg-green-400"
                    />
                  </div>
                </div>
              </div>
            </p>
            <div className="card-actions justify-between">
              <div className="dropdown dropdown-right dropdown-end">
                <label tabIndex={0} className="btn btn-primary mr-1">
                  Options
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a
                      onClick={() =>
                        userDispatch({
                          type: USER_ACTIONS.UPDATE_FRIENDS,
                          payload: user.name,
                        })
                      }
                    >
                      Add Friend
                    </a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <button className="btn btn-primary">Message</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  await db.connect();
  let data = await User.findOne({ name: id }).lean();
  // @ts-expect-error
  data._id = data._id.toString();
  console.log(data);
  await db.disconnect();
  if (!data) {
    return { props: { user: `Not Found` } };
  }

  return {
    props: {
      user: {
        name: data.name,
        friends: data.friends,
        bio: data.bio,
        posts: JSON.stringify(data.posts),
        rating: data.rating,
        confirmedPokemon: data.confirmedPokemon,
        image: data.image,
      },
    },
  };
}

export default dynamic(() => Promise.resolve(IDID), { ssr: false });
