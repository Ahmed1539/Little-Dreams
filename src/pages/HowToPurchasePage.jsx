export default function HowToPurchasePage() {
  return (
    <div className="bg-[#FBF8F3] min-h-screen py-20 px-6 md:px-16 text-[#0E2340]">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif">How To Purchase</h1>
        <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed text-[#0E2340]/90">
          <li>Browse our New Arrivals or explore looks via our 3D Interactive Stage.</li>
          <li>Select your preferred color variant and size (in years).</li>
          <li>Click <span className="font-bold">Add to Bag</span> or <span className="font-bold">Buy Now</span>.</li>
          <li>Proceed to checkout, enter your shipping details, and select your preferred secure payment method (Apple Pay, Credit Card, or Cash on Delivery).</li>
        </ol>
      </div>
    </div>
  );
}