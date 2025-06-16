import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden text-center relative px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Cipherly 🔐</h1>

      <p className="text-lg max-w-xl mx-auto">
        Cipherly is your private, secure, and simple password vault.<br />
        Navigate to
        <b className="text-transparent bg-gradient-to-r from-white via-cyan-200 to-[#00f2ff] bg-clip-text"> Vault</b> to start managing your passwords.
      </p>

      {/* ✅ Bottom-left footer */}
      <div className="absolute bottom-4 left-5 text-sm text-gray-300">
        <p>Made with love — @Shara</p>
      </div>
    </div>
  );
};

export default Home;
