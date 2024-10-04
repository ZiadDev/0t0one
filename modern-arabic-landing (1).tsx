import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Bot, BarChart3, Zap, MessageCircle } from 'lucide-react';

const ModernArabicLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      title: "تطوير بدون برمجة",
      description: "حول أفكارك إلى منتجات في أسابيع",
      color: "bg-gradient-to-br from-indigo-500/10 to-indigo-500/30"
    },
    {
      icon: <Bot className="w-8 h-8 text-teal-500" />,
      title: "روبوتات المحادثة الذكية",
      description: "أتمتة تفاعلات العملاء بذكاء",
      color: "bg-gradient-to-br from-teal-500/10 to-teal-500/30"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-fuchsia-500" />,
      title: "تحليل الأعمال",
      description: "استراتيجيات مدروسة لنمو سريع",
      color: "bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/30"
    },
    {
      icon: <Rocket className="w-8 h-8 text-amber-500" />,
      title: "إدارة المنتجات",
      description: "تطوير فعّال يحقق النتائج",
      color: "bg-gradient-to-br from-amber-500/10 to-amber-500/30"
    }
  ];

  const caseStudies = [
    {
      client: "كيوبارتس",
      description: "نظام RFQ متكامل",
      achievement: "٣ أسابيع للإطلاق",
      icon: "🚗"
    },
    {
      client: "كيو باي",
      description: "نظام CRM ذكي",
      achievement: "تتبع مخصص للعملاء",
      icon: "💳"
    },
    {
      client: "SDTPS الإمارات",
      description: "روبوت محادثة NLP",
      achievement: "تفاعل عملاء محسّن",
      icon: "🤖"
    },
    {
      client: "كافيه كونكت",
      description: "نظام طلبات ذكي",
      achievement: "طلبات سهلة عبر واتساب",
      icon: "☕"
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800 font-arabic">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-500"
          >
            0to.one
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['خدماتنا', 'قصص النجاح', 'عن الشركة'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            سرّع نمو شركتك الناشئة 
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-500">
              من الصفر إلى الواحد
            </span>
          </h1>
          <p className="text-xl mb-12 text-gray-600">
            حلول مبتكرة وسريعة لتحويل أفكارك إلى واقع ملموس
          </p>
          <motion.a 
            href="https://wa.me/201552349490"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="ml-2" />
            تواصل معنا على واتساب
          </motion.a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="خدماتنا" className="container mx-auto px-6 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          خدماتنا المميزة <Sparkles className="inline ml-2 text-amber-500" />
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 ${service.color} backdrop-blur-sm`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="قصص النجاح" className="container mx-auto px-6 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          قصص نجاح عملائنا
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{study.icon}</div>
              <h3 className="text-xl font-bold mb-2">{study.client}</h3>
              <p className="text-gray-600 mb-2">{study.description}</p>
              <p className="text-indigo-600 font-semibold">{study.achievement}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="عن الشركة" className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            عن زياد الشاذلي
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <ul className="space-y-4">
              {[
                "أطلق أكثر من ٢٠ ميزة محسّنة للكفاءة بنسبة ٣٠٪",
                "قاد أكثر من ٤٠ سبرنت لتعزيز نشر الميزات",
                "قام بهندسة عكسية لأكثر من ٥ أنظمة ERP"
              ].map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <Sparkles className="w-6 h-6 text-amber-500 ml-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-8">هل أنت مستعد لتسريع نمو شركتك الناشئة؟</h2>
          <p className="text-xl mb-8 text-gray-600">
            احصل على جلسة مجانية لمدة ساعة لتحديد احتياجاتك ومتطلباتك
          </p>
          <motion.a 
            href="https://wa.me/201552349490"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="ml-2" />
            لنتحدث - تواصل معنا الآن
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2024 0to.one. جميع الحقوق محفوظة
            </div>
            <motion.a 
              href="https://wa.me/201552349490"
              whileHover={{ scale: 1.1 }}
              className="text-green-500 hover:text-green-600"
            >
              <MessageCircle size={24} />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernArabicLanding;
