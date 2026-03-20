import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="w-full h-16 bg-gradient-to-b from-[#202808] to-[#F3F3EA]"></div>
      <div className="min-h-screen w-full flex justify-center bg-[#F3F3EA] p-4 pt-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl border border-[#202808]/5 h-fit">
          <div className="w-full md:w-5/12 bg-[#202808] p-8 flex flex-col justify-center text-center items-center text-[#F3F3EA] relative" style={{ backgroundColor: '#202808', backgroundImage: `url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply' }}>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold mb-2 leading-tight">Let's Get Started</h2>
              <p className="text-xs opacity-70 leading-relaxed max-w-[160px] mx-auto">Join our community of curators.</p>
            </div>
          </div>
          <div className="w-full md:w-7/12 p-8 bg-white flex flex-col justify-center">
            <h1 className="text-xl font-semibold text-[#2A1B10] mb-6">{isLogin ? "Sign In" : "Sign Up"}</h1>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (<input type="text" placeholder="Name" className="w-full border-b border-[#202808]/10 py-1.5 text-sm focus:border-[#202808] outline-none transition-colors" />)}
              <input type="email" placeholder="Email" className="w-full border-b border-[#202808]/10 py-1.5 text-sm focus:border-[#202808] outline-none transition-colors" />
              <input type="password" placeholder="Password" className="w-full border-b border-[#202808]/10 py-1.5 text-sm focus:border-[#202808] outline-none transition-colors" />
              <button className="w-full bg-[#202808] text-[#F3F3EA] py-2.5 rounded-md font-medium mt-4 text-sm hover:bg-[#2A1B10] transition-all">{isLogin ? "Sign In" : "Sign Up"}</button>
            </form>
            <div className="mt-6 pt-4 border-t border-[#202808]/5 flex flex-col items-center">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#202808]/10 hover:bg-[#F3F3EA] transition-colors text-[#202808]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.896 4.14-1.224 1.224-3.132 2.58-6.42 2.58-5.184 0-9.216-4.164-9.216-9.348s4.032-9.348 9.216-9.348c2.808 0 4.908 1.104 6.396 2.52l2.316-2.316C18.42 1.056 15.684 0 12.48 0 5.688 0 0 5.688 0 12.48s5.688 12.48 12.48 12.48c3.708 0 6.516-1.212 8.712-3.516 2.268-2.268 2.988-5.46 2.988-8.004 0-.768-.06-1.5-.18-2.184H12.48z"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-tighter">Google</span>
              </button>
            </div>
            <p className="mt-6 text-center text-xs text-[#5A4632]">
              <button onClick={() => setIsLogin(!isLogin)} className="text-[#202808] font-bold hover:underline">
                {isLogin ? "Create an account" : "Already a member? Sign In"}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}