window.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const body = document.body;
  const nav = document.querySelector('#mainNav');
  const navLinks = document.querySelector('#navLinks');
  const menuToggle = document.querySelector('.menu-toggle');
  const languageButtons = document.querySelectorAll('[data-lang]');
  const status = document.querySelector('#formStatus');

  const translations = {
    ar: {
      announcement: 'استشارات تصميم خاصة لمساحاتكم القادمة', brandRole: 'مهندس ديكور', navAbout: 'عن كريم', navServices: 'الخدمات', navWork: 'المشاريع', navContact: 'تواصل', navCta: 'احجز استشارتك', heroEyebrow: 'تصميم داخلي فاخر', heroTitle: 'نصمم الهدوء<br><em>الذي تراه.</em>', heroCopy: 'هوية بصرية متكاملة لمساحاتكم، تبدأ من الفكرة وتنتهي بتفاصيل تُشبهكم.', heroButton: 'اكتشف المشاريع', heroLink: 'كيف نعمل', aboutLabel: 'الرؤية', aboutTitle: 'مساحات لا تكتفي بأن تُرى،<br><em>بل تُحس.</em>', aboutCopy: 'نؤمن أن الفخامة ليست في كثرة التفاصيل، بل في دقة الاختيار. نصنع لغة معمارية هادئة، راقية، ومتصلة تماماً بنمط حياتكم.', aboutLink: 'تحدث مع كريم', aboutNote: 'مشروعاً صُمم<br>بعناية وهدوء', servicesLabel: 'ماذا نقدم', servicesTitle: 'من الرؤية إلى<br><em>المشهد النهائي.</em>', service1Title: 'تصميم داخلي متكامل', service1Copy: 'تصور بصري، مخططات تنفيذية، واختيار مواد يصنع حضوراً متناسقاً من أول خطوة.', service2Title: 'استشارات فاخرة', service2Copy: 'جلسة مركزة تعيد ترتيب أولويات المساحة وتمنحكم قرارات واضحة بثقة أعلى.', service3Title: 'تشطيبات ومواصفات', service3Copy: 'إشراف على التفاصيل والمواد والإضاءة لضمان أن ما على الورق يطابق ما في الواقع.', projectsLabel: 'مختارات من الأعمال', projectsTitle: 'لكل مساحة<br><em>شخصيتها.</em>', projectsCopy: 'أعمال مختارة تُترجم فلسفتنا: مادة صادقة، نسب دقيقة، وتفاصيل تبقى.', project1Type: 'سكني · الرياض', project1Name: 'بيت الضوء', project2Type: 'جناح خاص · جدة', project2Name: 'سكون', project3Type: 'مطبخ · الدمام', project3Name: 'رخام ودفء', project4Type: 'فيلا · أبوظبي', project4Name: 'امتداد', processLabel: 'المنهج', processTitle: 'قرارات مدروسة.<br><em>نتائج خالدة.</em>', processCopy: 'لا نطارد الصيحات. نبني معكم أساساً بصرياً يعيش معكم ويتطور بهدوء.', step1: 'نستمع', step1Copy: 'نفهم ذوقكم، عاداتكم، وما تريدون أن تشعروا به في المساحة.', step2: 'نصوغ', step2Copy: 'نحوّل الرؤية إلى مفهوم متكامل وقرارات يمكن تنفيذها بثقة.', step3: 'نُتقن', step3Copy: 'نراجع كل تفصيلة حتى تصبح النتيجة كما تخيلتموها، وأكثر.', faqLabel: 'أسئلة شائعة', faqTitle: 'قبل أن<br><em>نبدأ.</em>', faq1Q: 'ما نوع المشاريع التي تعملون عليها؟', faq1A: 'نصمم الفلل والشقق والمقرات الإدارية الراقية، من التصور الأولي إلى تفاصيل التشطيب والتنفيذ.', faq2Q: 'كيف تبدأ الاستشارة؟', faq2A: 'أرسل تفاصيل مشروعك عبر النموذج، وسنعود إليك عبر واتساب لتحديد الخطوة الأنسب.', faq3Q: 'هل تقدمون إشرافاً على التنفيذ؟', faq3A: 'نعم، يمكن أن يتضمن نطاق العمل مراجعة المواد والمواصفات والإشراف على التفاصيل حسب احتياج المشروع.', contactLabel: 'لنبدأ الحديث', contactTitle: 'مساحتكم القادمة<br><em>تبدأ هنا.</em>', contactCopy: 'اتركوا لنا تفاصيل بسيطة عن مشروعكم، وسنحوّلها إلى محادثة واضحة على واتساب.', formName: 'الاسم', formPhone: 'رقم الهاتف', formProperty: 'نوع العقار', formSelect: 'اختر نوع العقار', formApartment: 'شقة', formVilla: 'فيلا', formOffice: 'مقر إداري', formMessage: 'رسالتك', formSubmit: 'إرسال إلى واتساب', formNote: 'لن يتم حفظ بياناتك داخل الموقع. سيتم فتح واتساب برسالة منظمة.', whatsappLabel: 'تحدث معنا', footerCopy: 'نصمم الهدوء الذي تراه.', sent: 'تم تجهيز رسالتك. سيتم فتح واتساب الآن.'
    },
    en: {
      announcement: 'Private design consultations for your next space', brandRole: 'INTERIOR ARCHITECT', navAbout: 'About', navServices: 'Services', navWork: 'Projects', navContact: 'Contact', navCta: 'Book a consultation', heroEyebrow: 'Luxury interior design', heroTitle: 'We design the calm<br><em>you can see.</em>', heroCopy: 'A considered visual identity for your space, from the first idea to the details that feel like you.', heroButton: 'Explore projects', heroLink: 'Our approach', aboutLabel: 'The vision', aboutTitle: 'Spaces made to be seen,<br><em>and felt.</em>', aboutCopy: 'Luxury is not about more details. It is about better choices. We create a quiet, refined architectural language connected to the way you live.', aboutLink: 'Talk to Karim', aboutNote: 'projects designed<br>with intent and ease', servicesLabel: 'What we do', servicesTitle: 'From vision to<br><em>the final scene.</em>', service1Title: 'Full-service interiors', service1Copy: 'Visual direction, technical drawings and material selections that create a coherent presence from day one.', service2Title: 'Private consultations', service2Copy: 'A focused session that clarifies priorities and gives your space confident, actionable decisions.', service3Title: 'Finishes & specifications', service3Copy: 'A close eye on materials, lighting and details so the built result matches the design intent.', projectsLabel: 'Selected work', projectsTitle: 'Every space has<br><em>a point of view.</em>', projectsCopy: 'A selection of work shaped by honest materials, precise proportions and details that last.', project1Type: 'Residential · Riyadh', project1Name: 'House of Light', project2Type: 'Private suite · Jeddah', project2Name: 'Stillness', project3Type: 'Kitchen · Dammam', project3Name: 'Marble & warmth', project4Type: 'Villa · Abu Dhabi', project4Name: 'Continuum', processLabel: 'The method', processTitle: 'Considered decisions.<br><em>Enduring results.</em>', processCopy: 'We do not chase trends. We build a visual foundation that lives and evolves with you.', step1: 'Listen', step1Copy: 'We understand your taste, rituals and how you want the space to feel.', step2: 'Shape', step2Copy: 'We turn your vision into a coherent concept and decisions built for confidence.', step3: 'Refine', step3Copy: 'We review every detail until the result feels like what you imagined, and more.', faqLabel: 'FAQ', faqTitle: 'Before<br><em>we begin.</em>', faq1Q: 'What kind of projects do you take on?', faq1A: 'We design refined villas, apartments and offices, from the first concept through finishes and execution details.', faq2Q: 'How does a consultation start?', faq2A: 'Share your project details through the form and we will follow up on WhatsApp with the best next step.', faq3Q: 'Do you offer execution supervision?', faq3A: 'Yes. The scope can include reviewing materials, specifications and on-site details based on the project needs.', contactLabel: 'Start a conversation', contactTitle: 'Your next space<br><em>starts here.</em>', contactCopy: 'Leave us a few project details and we will turn them into a clear WhatsApp conversation.', formName: 'Name', formPhone: 'Phone number', formProperty: 'Property type', formSelect: 'Choose property type', formApartment: 'Apartment', formVilla: 'Villa', formOffice: 'Office', formMessage: 'Your message', formSubmit: 'Send to WhatsApp', formNote: 'Your details are not stored on this site. WhatsApp will open with an organised message.', whatsappLabel: 'Chat with us', footerCopy: 'We design the calm you can see.', sent: 'Your message is ready. WhatsApp will open now.'
    }
  };

  function setLanguage(lang) {
    const copy = translations[lang];
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.innerHTML = copy[key];
    });
    document.querySelectorAll('[data-lang]').forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
    const form = document.querySelector('#contactForm');
    if (form) {
      document.querySelector('#name').placeholder = lang === 'ar' ? 'الاسم الكامل' : 'Full name';
      document.querySelector('#message').placeholder = lang === 'ar' ? 'أخبرنا قليلاً عن مشروعك...' : 'Tell us a little about your project...';
    }
    document.title = lang === 'ar' ? 'م. كريم الشريف | مهندس ديكور وتصميم داخلي فاخر' : 'Karim Al Sharif | Luxury Interior Architect';
    if (status) status.textContent = '';
    localStorage.setItem('portfolio-language', lang);
  }

  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  const savedLanguage = localStorage.getItem('portfolio-language');
  setLanguage(savedLanguage === 'en' ? 'en' : 'ar');

  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open', !expanded);
  });
  navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelector('#contactForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const isArabic = root.lang === 'ar';
    const message = isArabic
      ? `مرحباً م. كريم، أود الاستفسار عن استشارة تصميم ديكور.\n\nالاسم: ${form.get('name')}\nالهاتف: ${form.get('phone')}\nنوع العقار: ${form.get('property')}\nالتفاصيل: ${form.get('message')}`
      : `Hello Eng. Karim, I would like to enquire about an interior design consultation.\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nProperty: ${form.get('property')}\nDetails: ${form.get('message')}`;
    status.textContent = translations[root.lang].sent;
    window.open(`https://wa.me/966500000000?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
