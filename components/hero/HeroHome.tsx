import react from 'react';

export default function HeroHome() {
  return (
    <div
      className="hero min-h-screen col-span-4"
      style={{
        backgroundImage: `url("https://images.alphacoders.com/121/1216117.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
          <p className="mb-5">
            Check out our getting started page to learn about the featuers and
            how you can use them on this website.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
