export default function SizeGuidePage() {
  return (
    <div className="bg-[#FBF8F3] min-h-screen py-20 px-6 md:px-16 text-[#0E2340]">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif">Size & Fit Guide</h1>
        <p className="text-sm text-[#0E2340]/90">Our pieces are tailored with comfortable allowances for active children's movement. Refer to the age-based milestones below:</p>
        <div className="border border-[#0E2340]/15 rounded-2xl overflow-hidden bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0E2340] text-white">
              <tr>
                <th className="p-4">Size (Years)</th>
                <th className="p-4">Height (cm)</th>
                <th className="p-4">Chest (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0E2340]/10">
              <tr><td className="p-4 font-bold">4Y</td><td className="p-4">98-104</td><td className="p-4">56</td></tr>
              <tr><td className="p-4 font-bold">6Y</td><td className="p-4">110-116</td><td className="p-4">61</td></tr>
              <tr><td className="p-4 font-bold">8Y</td><td className="p-4">122-128</td><td className="p-4">67</td></tr>
              <tr><td className="p-4 font-bold">10Y</td><td className="p-4">134-140</td><td className="p-4">73</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}