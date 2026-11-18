export default function ContactPage() {
  return (
    <div className="bg-[#FBF8F3] min-h-screen py-20 px-6 md:px-16 text-[#0E2340]">
      <div className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-3xl border border-[#0E2340]/10 shadow-sm">
        <h1 className="text-3xl font-extrabold font-serif">Contact Us</h1>
        <p className="text-sm text-[#0E2340]/70">Have questions about an order or sizing? Reach out to our concierge team.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">Your Name</label>
            <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-[#0E2340]/20 text-sm focus:outline-none focus:border-[#0E2340]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">Email Address</label>
            <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-[#0E2340]/20 text-sm focus:outline-none focus:border-[#0E2340]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">Message</label>
            <textarea rows="4" required className="w-full px-4 py-2.5 rounded-xl border border-[#0E2340]/20 text-sm focus:outline-none focus:border-[#0E2340]"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-[#0E2340] text-white rounded-full font-extrabold text-xs tracking-wider uppercase hover:bg-[#193863] transition-all cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}