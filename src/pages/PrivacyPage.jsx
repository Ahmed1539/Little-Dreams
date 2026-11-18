export default function PrivacyPage() {
  return (
    <div className="bg-[#FBF8F3] min-h-screen py-20 px-6 md:px-16 text-[#0E2340]">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif">Privacy Policy</h1>
        <p className="text-sm text-[#0E2340]/70">Last updated: November 2026</p>
        <div className="space-y-4 text-sm leading-relaxed text-[#0E2340]/90">
          <p>At Little Dreams, we respect your privacy and are committed to protecting your personal data.</p>
          <h2 className="text-lg font-bold pt-4">Information We Collect</h2>
          <p>We collect information you provide directly to us when making a purchase, signing up for our newsletter, or contacting customer service.</p>
          <h2 className="text-lg font-bold pt-4">How We Use Your Information</h2>
          <p>Your information is used strictly to fulfill orders, improve our product offerings, and send curated updates if opted in.</p>
        </div>
      </div>
    </div>
  );
}