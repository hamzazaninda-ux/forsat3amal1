import React, { useEffect } from 'react';

// TypeScript declaration for the TikTok Pixel function on the window object
declare global {
  interface Window {
    ttq: any;
  }
}

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KlonXD68AEV0Nedmq64st1";

// Fix: Replaced JSX.Element with React.ReactNode to resolve the "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="mb-4 text-emerald-300">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-200">{description}</p>
  </div>
);

const App: React.FC = () => {

  // Function to handle the click and track the event
  const handleJoinClick = () => {
    if (window.ttq) {
      // Using 'SubmitForm' as a standard event for completing the main action
      window.ttq.track('SubmitForm');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleJoinClick(); // Track the event before redirecting
      window.location.href = WHATSAPP_GROUP_LINK;
    }, 500); // Redirect after 0.5 seconds

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white font-[Cairo,sans-serif]">
      <main className="container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">

          <div className="mb-8">
            <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              حصرياً للسيدات
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            حققي استقلالكِ المادي من راحة منزلك
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            فرصة حقيقية للانضمام إلى فريق عمل نسائي ناجح. ابدئي رحلتك نحو تحقيق أهدافك المالية والشخصية بمرونة تامة.
          </p>

          <div className="mb-12">
             {/* Redirect Message */}
            <div className="mt-8">
              <p className="text-lg text-gray-300 animate-pulse">
                ... جاري توجيهك تلقائيًا للإنضمام
              </p>
              <div className="mt-4">
                  <svg className="animate-spin h-10 w-10 text-emerald-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
              title="عمل من المنزل"
              description="أديري عملكِ بالكامل من أي مكان يناسبكِ."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="أوقات عمل مرنة"
              description="نظام عمل يتناسب مع مسؤولياتكِ والتزاماتكِ الأخرى."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              title="أرباح متنامية"
              description="فرص حقيقية لزيادة دخلكِ وتحقيق أرباح مجزية."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="دعم وتدريب"
              description="نقدم لكِ تدريبًا شاملاً ودعمًا مستمرًا لضمان نجاحك."
            />
          </div>
        </div>
      </main>

      <footer className="text-center py-6">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()}. كل الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default App;
