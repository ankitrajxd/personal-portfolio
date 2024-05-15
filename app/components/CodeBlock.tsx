/* eslint-disable react/no-unescaped-entities */

const CodeBlock = () => {
  return (
    <div className="bg-zinc-900 rounded-lg select-none border border-blue-850 relative text-sm">
      <div className="px-5 py-5">
        <div className="flex flex-row space-x-2">
          <div className="rounded-full bg-red-500 w-3 h-3"></div>
          <div className="rounded-full bg-orange-500 w-3 h-3"></div>
          <div className="rounded-full bg-green-400 w-3 h-3"></div>
        </div>
      </div>
      <div className="px-5 py-8 border-zinc-600 overflow-hidden">
        <code className="font-jetbrains">
          <div className="blink" data-aos="fade-in-left">
            <span className="text-pink-500 mr-2">const</span>
            <span className="text-white mr-2">dev</span>
            <span className="text-pink-500 mr-2">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="100">
            <span className="text-white ml-8 mr-2">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">Ankit Raj</span>
            <span className="text-gray-400">',</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="200">
            <span className="text-white ml-8 mr-2">skills:</span>
            <span className="text-gray-400">['</span>
            <span className="text-amber-300">frontend</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">devops</span>
            <span className="text-gray-400">'],</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="300">
            <span className="text-white ml-8 mr-2">hardWorker:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="400">
            <span className="text-white ml-8 mr-2">problemSolver:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="500">
            <span className="text-green-400 ml-8 mr-2">hireable:</span>
            <span className="text-orange-400">function</span>
            <span className="text-gray-400">() {"{"}</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="600">
            <span className="text-orange-400 ml-16 mr-2">return</span>
            <span className="text-gray-400">(</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="700">
            <span className="text-cyan-400 ml-24">this.</span>
            <span className="text-white mr-2">hardWorker</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="800">
            <span className="text-cyan-400 ml-24">this.</span>
            <span className="text-white mr-2">problemSolver</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="900">
            <span className="text-cyan-400 ml-24">this.</span>
            <span className="text-white mr-2">skills.length</span>
            <span className="text-amber-300 mr-2">&gt;=</span>
            <span className="text-orange-400">2</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="1000">
            <span className="text-gray-400 ml-16 mr-2">);</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="1100">
            <span className="text-gray-400 ml-8">{"}"}</span>
          </div>
          <div data-aos="fade-in-left" data-aos-delay="1200">
            <span className="text-gray-400">{"}"}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default CodeBlock;
