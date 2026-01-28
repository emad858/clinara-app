import React from 'react';
import { Activity, Users, Package, Wrench, Star, ShieldCheck, ChevronRight, MessageSquare, HeartPulse } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed" dir="rtl">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="text-3xl font-black text-blue-600 tracking-tighter">clinara<span className="text-slate-300">.ai</span></div>
        <div className="hidden md:flex space-x-8 space-x-reverse font-bold text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">المميزات</a>
          <a href="#ai" className="hover:text-blue-600 transition">الذكاء الاصطناعي</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">آراء الدكاترة</a>
        </div>
        <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-black hover:bg-blue-700 transition shadow-lg shadow-blue-200 active:scale-95">
          ابدأ مجاناً
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-8 py-24 bg-gradient-to-b from-white to-blue-50 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <span className="bg-blue-100 text-blue-700 px-6 py-1.5 rounded-full text-sm font-black mb-8 inline-block animate-bounce">
            مستقبل طب الأسنان في مصر وصل
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.15]">
            عيادتك مش محتاجة سكرتارية أكتر.. محتاجة <span className="text-blue-600">عقل أذكى.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium">
            Clinara هو أول مساعد افتراضي متكامل بيفهم دكاترة الأسنان. بنشخص معاك بالـ AI، بندير مرضى العيادة، بنراقب مخزنك، وبنصين أجهزتك.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl text-xl font-black hover:scale-105 transition shadow-2xl shadow-blue-300">
              احجز ديمو مجاني دلوقتي
            </button>
            <button className="w-full md:w-auto border-2 border-slate-200 bg-white text-slate-700 px-12 py-5 rounded-2xl text-xl font-black hover:bg-slate-50 transition">
              شوف المميزات
            </button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: '+1200', label: 'دكتور بيستخدمنا' },
            { num: '99%', label: 'دقة تشخيص الـ AI' },
            { num: '20%', label: 'توفير في المصاريف' },
            { num: '24/7', label: 'دعم تقني وصيانة' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-black text-blue-600 mb-2">{stat.num}</div>
              <div className="text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic">كل اللي عيادتك محتاجاه في مكان واحد</h2>
          <p className="text-slate-500 text-xl font-medium">صممنا Clinara عشان ننهي صداع الإدارة وتتفرغ أنت لمريضك ولشغلك وبس.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { 
              title: 'مساعد التشخيص الذكي', 
              desc: 'تحليل صور الأشعة ووضع خطة علاج مقترحة بدقة متناهية، بيساعدك تكتشف اللي العين متشوفوش.', 
              icon: <Activity className="text-blue-600" size={35}/>,
              color: 'bg-blue-50'
            },
            { 
              title: 'CRM لدكاترة الأسنان', 
              desc: 'متابعة المرضى، حجز مواعيد، ورسايل واتساب أوتوماتيكية عشان المريض يفضل فاكر عيادتك دايماً.', 
              icon: <Users className="text-emerald-600" size={35}/>,
              color: 'bg-emerald-50'
            },
            { 
              title: 'إدارة المخزن والموردين', 
              desc: 'تنبيهات قبل ما الخامات تخلص، وربط مباشر مع الموردين عشان تشتري بأحسن سعر في السوق.', 
              icon: <Package className="text-amber-600" size={35}/>,
              color: 'bg-amber-50'
            },
            { 
              title: 'صيانة الأجهزة الطبية', 
              desc: 'أول سيستم بيوفر لك فريق صيانة متخصص وتنبيهات دورية قبل ما أجهزتك تعطل وتوقف حالك.', 
              icon: <Wrench className="text-rose-600" size={35}/>,
              color: 'bg-rose-50'
            }
          ].map((f, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className={`${f.color} w-20 h-20 flex items-center justify-center rounded-3xl mb-8 group-hover:rotate-6 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{f.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Deep Dive */}
      <section id="ai" className="py-24 px-8 bg-blue-600 rounded-[4rem] mx-4 md:mx-12 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-right">
            <h2 className="text-4xl md:text-5xl font-black mb-8">التشخيص مش حيكون مجرد "توقع" بعد النهاردة</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle size={28} className="text-blue-200 mt-1 shrink-0" />
                <p className="text-xl font-bold">تحليل فوري لصور الأشعة الـ Digital X-Rays.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle size={28} className="text-blue-200 mt-1 shrink-0" />
                <p className="text-xl font-bold">اكتشاف تسوس الجذور والالتهابات المخفية بدقة الـ AI.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle size={28} className="text-blue-200 mt-1 shrink-0" />
                <p className="text-xl font-bold">تقارير علاجية احترافية بتطلع باسم المريض وعليها اللوجو بتاعك.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
             <div className="bg-slate-900 rounded-xl p-4 aspect-video flex items-center justify-center border-4 border-slate-800">
                <div className="text-center">
                  <HeartPulse className="mx-auto text-blue-400 animate-pulse mb-4" size={60} />
                  <p className="text-blue-200 font-black tracking-widest uppercase">AI Scanning in progress...</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">قالوا عن Clinara</h2>
            <p className="text-slate-500 text-xl font-medium italic">ثقة مئات الدكاترة في مصر هي اللي بتخلينا نطور السيستم كل يوم.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { name: 'د. مريم الصاوي', role: 'أخصائي تجميل أسنان', text: 'أكتر حاجة بهرتني هي الـ AI في التشخيص. بيخليني أشوف حاجات في الأشعة ممكن تقع مني في زحمة الشغل، والمريض بيثق جداً لما بيشوف التقرير.' },
              { name: 'د. عصام حجازي', role: 'صاحب مركز أسنان', text: 'الـ CRM بتاع كلينارا رجع لي مرضى مكنتش شوفتهم من سنتين. السيستم شاطر جداً في الـ Follow-up وبناء العلاقة مع المريض.' },
              { name: 'د. يحيى زكريا', role: 'جراح أسنان', text: 'موضوع صيانة الأجهزة ده عبقري. كنت بشيل هم لما اليونت تعطل، دلوقتي المهندس بيكلمني قبل ما أنا أطلب الصيانة أصلاً بفضل التنبيهات الذكية.' },
              { name: 'د. سارة الليثي', role: 'عيادة Dental Life', text: 'إدارة المخزون خلتني أوفر حوالي 20% من مصاريف الماتريال اللي كانت بتضيع أو بتنتهي صلاحيتها وأنا مش عارف.' }
            ].map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm relative group hover:bg-blue-50 transition-colors">
                <Star className="text-amber-400 absolute left-10 top-10" fill="currentColor" size={30} />
                <p className="text-2xl font-medium italic mb-10 text-slate-700 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl">
                    {t.name[2]}
                  </div>
                  <div>
                    <div className="font-black text-xl text-blue-900">{t.name}</div>
                    <div className="text-blue-500 font-bold">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-24 px-8 text-center bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-white shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10 leading-tight">جاهز تنقل عيادتك للمستقبل؟</h2>
          <p className="text-xl text-slate-400 mb-12 relative z-10 font-medium">
            انضم لجيل جديد من الدكاترة اللي قرروا يركزوا في نجاحهم ويسيبوا الإدارة والتشخيص لـ Clinara.
          </p>
          <button className="bg-blue-600 text-white px-16 py-5 rounded-2xl text-2xl font-black hover:bg-blue-700 transition-all hover:scale-105 relative z-10 shadow-xl shadow-blue-900">
            ابدأ تجربتك المجانية دلوقتي
          </button>
          <div className="mt-8 text-slate-500 font-bold">
            مش محتاجين بيانات فيزا حالياً - التجربة 14 يوم مجاناً
          </div>
        </div>
        <p className="mt-20 text-slate-400 font-bold">© 2026 Clinara.ai - بكل فخر لدكاترة الأسنان في مصر</p>
      </footer>
    </div>
  );
};

const CheckCircle = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default App;

