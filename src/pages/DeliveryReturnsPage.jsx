export default function DeliveryReturnsPage() {
  return (
    <div className="bg-[#FBF8F3] min-h-screen py-20 px-6 md:px-16 text-[#0E2340]">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif">Delivery and Returns</h1>
        <div className="space-y-4 text-sm leading-relaxed text-[#0E2340]/90">
          <h2 className="text-lg font-bold">Shipping Information</h2>
          <p>We offer standard and express delivery options worldwide. Orders are typically processed and shipped within 1–2 business days.</p>
          <h2 className="text-lg font-bold pt-4">Returns & Exchanges</h2>
          <p>We accept unworn, unwashed items in their original packaging within 30 days of delivery for a full refund or exchange.</p>
        </div>
      </div>
    </div>
  );
}