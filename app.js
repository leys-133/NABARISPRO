
// ===================================
// نبراس - منصة التعلم الذكية
// تطوير: SEVEN_CODE7
// ===================================

// المتغيرات العامة
let currentMode = 'learn';
let chatHistory = [];
let userStats = {
  questionsCount: 0,
  learningLevel: 1,
  pointsCount: 0,
  streakCount: 0,
  totalTime: 0,
  lastResponseTime: 0
};
let isTyping = false;
let currentLanguage = 'ar'; // الافتراضي عربي
let isDarkMode = false;
let responseLength = 'detailed'; // detailed or brief
let notificationsEnabled = true;
let soundEnabled = true;

// ترجمات النصوص
const translations = {
  ar: {
    welcome: 'مرحباً بك في نبراس!',
    welcomeDesc: 'منصة التعلم الذكية المدعومة بالذكاء الاصطناعي',
    aiWriting: 'الذكاء الاصطناعي يكتب',
    send: 'إرسال',
    clearMemory: 'مسح الذاكرة',
    export: 'تصدير',
    settings: 'الإعدادات',
    theme: 'الوضع',
    light: 'فاتح',
    dark: 'داكن',
    auto: 'تلقائي',
    fontSize: 'حجم الخط',
    small: 'صغير',
    medium: 'متوسط',
    large: 'كبير',
    notifications: 'الإشعارات',
    sound: 'أصوات التنبيه',
    aiDetail: 'مستوى التفصيل',
    brief: 'مختصر',
    detailed: 'مفصل',
    save: 'حفظ الإعدادات',
    reset: 'إعادة تعيين',
    teacherMode: 'المعلم الافتراضي العميق',
    examplesMode: 'مولد الأمثلة',
    practiceMode: 'التدريب والاختبار',
    workshopMode: 'ورشة العمل',
    plannerMode: 'المخطط الدراسي',
    labMode: 'المختبر البرمجي',
    libraryMode: 'المكتبة التعليمية',
    challengesMode: 'التحديات اليومية',
    analyticsMode: 'الإحصائيات المتقدمة',
    questionsAnswered: 'أسئلة تم الإجابة عليها',
    learningLevel: 'مستوى التعلم',
    pointsEarned: 'النقاط المكتسبة',
    lastResponseTime: 'مدة آخر استجابة',
    streakDays: 'سلسلة الأيام',
    totalTime: 'إجمالي الوقت',
    progress: 'تقدمك',
    beginner: 'المبتدئ',
    subscribe: 'اشترك',
    exploreContent: 'استكشف المحتوى',
    newFeatures: 'المزايا الجديدة',
    codeLab: 'المختبر البرمجي',
    codeLabDesc: 'اكتب وجرّب أكواد برمجية مباشرة في المتصفح مع دعم لغات متعددة',
    educationalLibrary: 'المكتبة التعليمية',
    educationalLibraryDesc: 'مجموعة واسعة من المقالات والدروس في مختلف المجالات',
    dailyChallenges: 'التحديات اليومية',
    dailyChallengesDesc: 'تحديات جديدة كل يوم لتحفيزك على التعلم المستمر',
    advancedAnalytics: 'إحصائيات متقدمة',
    advancedAnalyticsDesc: 'تتبع تقدمك بدقة مع رسوم بيانية تفاعلية',
    voiceInput: 'الإدخال الصوتي',
    voiceInputDesc: 'تحدث مع الذكاء الاصطناعي بصوتك بدلاً من الكتابة',
    multipleThemes: 'أوضاع متعددة',
    multipleThemesDesc: 'وضع فاتح وداكن مع إمكانية تخصيص الألوان',
    nibras: 'نبراس',
    poweredByAI: 'منصة التعلم الذكية المدعومة بالذكاء الاصطناعي',
    sevenCode7Credit: 'بدعم من SEVEN_CODE7 💻',
    quickLinks: 'روابط سريعة',
    contactUs: 'تواصل معنا',
    allRightsReserved: 'جميع الحقوق محفوظة',
    developedBy: 'تطوير SEVEN_CODE7',
    dragDropImages: 'اسحب وأسقط الصور هنا. اضغط على الصورة للمعاينة.',
    enterTopic: 'أدخل موضوعاً...',
    start: 'ابدأ',
    voice: 'التحدث بالصوت',
    editLast: 'تحرير آخر رسالة',
    repeat: 'إعادة إرسال',
    fullscreen: 'ملء الشاشة',
    attachImage: 'إرفاق صورة',
    addEmoji: 'إضافة إيموجي',
    whatIsAI: 'ما هو الذكاء الاصطناعي؟',
    learnProgramming: 'كيف أبدأ تعلم البرمجة؟',
    mathChallenge: 'أريد تحدياً في الرياضيات',
    searchPlaceholder: 'ابحث في المحادثات...',
    language: 'اللغة',
    arabic: 'العربية',
    english: 'الإنجليزية',
    turkish: 'التركية'
  },
  en: {
    welcome: 'Welcome to Nibras!',
    welcomeDesc: 'AI-powered intelligent learning platform',
    aiWriting: 'AI is writing',
    send: 'Send',
    clearMemory: 'Clear Memory',
    export: 'Export',
    settings: 'Settings',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    auto: 'Auto',
    fontSize: 'Font Size',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    notifications: 'Notifications',
    sound: 'Sound Alerts',
    aiDetail: 'Detail Level',
    brief: 'Brief',
    detailed: 'Detailed',
    save: 'Save Settings',
    reset: 'Reset',
    teacherMode: 'Deep Virtual Teacher',
    examplesMode: 'Examples Generator',
    practiceMode: 'Training & Testing',
    workshopMode: 'Workshop',
    plannerMode: 'Study Planner',
    labMode: 'Programming Lab',
    libraryMode: 'Educational Library',
    challengesMode: 'Daily Challenges',
    analyticsMode: 'Advanced Analytics',
    questionsAnswered: 'Questions Answered',
    learningLevel: 'Learning Level',
    pointsEarned: 'Points Earned',
    lastResponseTime: 'Last Response Time',
    streakDays: 'Day Streak',
    totalTime: 'Total Time',
    progress: 'Your Progress',
    beginner: 'Beginner',
    subscribe: 'Subscribe',
    exploreContent: 'Explore Content',
    newFeatures: 'New Features',
    codeLab: 'Programming Lab',
    codeLabDesc: 'Write and test code directly in the browser with support for multiple languages',
    educationalLibrary: 'Educational Library',
    educationalLibraryDesc: 'Wide collection of articles and lessons in various fields',
    dailyChallenges: 'Daily Challenges',
    dailyChallengesDesc: 'New challenges every day to motivate continuous learning',
    advancedAnalytics: 'Advanced Analytics',
    advancedAnalyticsDesc: 'Track your progress precisely with interactive charts',
    voiceInput: 'Voice Input',
    voiceInputDesc: 'Speak with AI instead of typing',
    multipleThemes: 'Multiple Themes',
    multipleThemesDesc: 'Light and dark modes with customizable colors',
    nibras: 'Nibras',
    poweredByAI: 'AI-powered intelligent learning platform',
    sevenCode7Credit: 'Powered by SEVEN_CODE7 💻',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    allRightsReserved: 'All rights reserved',
    developedBy: 'Developed by SEVEN_CODE7',
    dragDropImages: 'Drag and drop images here. Click on image to preview.',
    enterTopic: 'Enter a topic...',
    start: 'Start',
    voice: 'Voice',
    editLast: 'Edit Last',
    repeat: 'Repeat',
    fullscreen: 'Fullscreen',
    attachImage: 'Attach Image',
    addEmoji: 'Add Emoji',
    whatIsAI: 'What is Artificial Intelligence?',
    learnProgramming: 'How do I start learning programming?',
    mathChallenge: 'I want a math challenge',
    searchPlaceholder: 'Search conversations...',
    language: 'Language',
    arabic: 'Arabic',
    english: 'English',
    turkish: 'Turkish'
  },
  tr: {
    welcome: 'Nibras\'a hoş geldiniz!',
    welcomeDesc: 'AI destekli akıllı öğrenme platformu',
    aiWriting: 'AI yazıyor',
    send: 'Gönder',
    clearMemory: 'Belleği Temizle',
    export: 'Dışa Aktar',
    settings: 'Ayarlar',
    theme: 'Tema',
    light: 'Açık',
    dark: 'Koyu',
    auto: 'Otomatik',
    fontSize: 'Yazı Boyutu',
    small: 'Küçük',
    medium: 'Orta',
    large: 'Büyük',
    notifications: 'Bildirimler',
    sound: 'Ses Uyarıları',
    aiDetail: 'Detay Seviyesi',
    brief: 'Kısa',
    detailed: 'Detaylı',
    save: 'Ayarları Kaydet',
    reset: 'Sıfırla',
    teacherMode: 'Derin Sanal Öğretmen',
    examplesMode: 'Örnek Üreteci',
    practiceMode: 'Eğitim ve Test',
    workshopMode: 'Atölye',
    plannerMode: 'Çalışma Planlayıcısı',
    labMode: 'Programlama Laboratuvarı',
    libraryMode: 'Eğitim Kütüphanesi',
    challengesMode: 'Günlük Mücadeleler',
    analyticsMode: 'Gelişmiş Analitik',
    questionsAnswered: 'Cevaplanan Sorular',
    learningLevel: 'Öğrenme Seviyesi',
    pointsEarned: 'Kazanılan Puanlar',
    lastResponseTime: 'Son Yanıt Süresi',
    streakDays: 'Gün Serisi',
    totalTime: 'Toplam Süre',
    progress: 'İlerlemeniz',
    beginner: 'Başlangıç',
    subscribe: 'Abone Ol',
    exploreContent: 'İçeriği Keşfet',
    newFeatures: 'Yeni Özellikler',
    codeLab: 'Programlama Laboratuvarı',
    codeLabDesc: 'Birden fazla dil desteğiyle tarayıcıda doğrudan kod yazın ve test edin',
    educationalLibrary: 'Eğitim Kütüphanesi',
    educationalLibraryDesc: 'Çeşitli alanlarda geniş makale ve ders koleksiyonu',
    dailyChallenges: 'Günlük Mücadeleler',
    dailyChallengesDesc: 'Sürekli öğrenmeyi motive etmek için her gün yeni mücadeleler',
    advancedAnalytics: 'Gelişmiş Analitik',
    advancedAnalyticsDesc: 'Etkileşimli grafikler ile ilerlemenizi hassas şekilde takip edin',
    voiceInput: 'Ses Girişi',
    voiceInputDesc: 'Yazmak yerine AI ile konuşun',
    multipleThemes: 'Çoklu Temalar',
    multipleThemesDesc: 'Özelleştirilebilir renklerle açık ve koyu modlar',
    nibras: 'Nibras',
    poweredByAI: 'AI destekli akıllı öğrenme platformu',
    sevenCode7Credit: 'SEVEN_CODE7 tarafından desteklenmektedir 💻',
    quickLinks: 'Hızlı Bağlantılar',
    contactUs: 'Bize Ulaşın',
    allRightsReserved: 'Tüm hakları saklıdır',
    developedBy: 'SEVEN_CODE7 tarafından geliştirildi',
    dragDropImages: 'Resimleri buraya sürükleyip bırakın. Önizlemek için resme tıklayın.',
    enterTopic: 'Bir konu girin...',
    start: 'Başla',
    voice: 'Ses',
    editLast: 'Sonuncuyu Düzenle',
    repeat: 'Tekrarla',
    fullscreen: 'Tam Ekran',
    attachImage: 'Resim Ekle',
    addEmoji: 'Emoji Ekle',
    whatIsAI: 'Yapay Zeka nedir?',
    learnProgramming: 'Programlamayı nasıl öğrenmeye başlarım?',
    mathChallenge: 'Matematik mücadelesi istiyorum',
    searchPlaceholder: 'Sohbetlerde ara...',
    language: 'Dil',
    arabic: 'Arapça',
    english: 'İngilizce',
    turkish: 'Türkçe'
  }
};

// دوال المساعدة
function t(key) {
  return translations[currentLanguage][key] || key;
}

function updateLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  updateUI();
}

function updateUI() {
  // تحديث النصوص في الواجهة
  document.querySelector('.welcome-message h2').textContent = t('welcome');
  document.querySelector('.welcome-message p').textContent = t('welcomeDesc');
  document.querySelector('.typing span').textContent = t('aiWriting');
  document.querySelector('#sendBtn').innerHTML = `<i class="fas fa-paper-plane"></i> ${t('send')}`;
  document.querySelector('#clearBtn span').textContent = t('clearMemory');
  document.querySelector('#exportBtn span').textContent = t('export');
  document.querySelector('#settingsBtn span').textContent = t('settings');
  document.querySelector('#themeBtn span').textContent = document.body.dataset.theme === 'dark' ? t('light') : t('dark');
  document.querySelector('#messageInput').placeholder = t('searchPlaceholder');
  document.querySelector('.hint').textContent = t('dragDropImages');

  // تحديث العناوين
  document.querySelector('#chatTitle').innerHTML = `<i class="fas fa-comments"></i> ${t(currentMode + 'Mode')}`;

  // تحديث الإحصائيات
  document.querySelector('.stat:nth-child(1) .lbl').textContent = t('questionsAnswered');
  document.querySelector('.stat:nth-child(2) .lbl').textContent = t('learningLevel');
  document.querySelector('.stat:nth-child(3) .lbl').textContent = t('pointsEarned');
  document.querySelector('.stat:nth-child(4) .lbl').textContent = t('lastResponseTime');
  document.querySelector('.stat:nth-child(5) .lbl').textContent = t('streakDays');
  document.querySelector('.stat:nth-child(6) .lbl').textContent = t('totalTime');

  // تحديث القائمة الجانبية
  document.querySelectorAll('.menu .item span')[0].textContent = t('teacherMode');
  document.querySelectorAll('.menu .item span')[1].textContent = t('examplesMode');
  document.querySelectorAll('.menu .item span')[2].textContent = t('practiceMode');
  document.querySelectorAll('.menu .item span')[3].textContent = t('workshopMode');
  document.querySelectorAll('.menu .item span')[4].textContent = t('plannerMode');
  document.querySelectorAll('.menu .item span')[5].textContent = t('labMode');
  document.querySelectorAll('.menu .item span')[6].textContent = t('libraryMode');
  document.querySelectorAll('.menu .item span')[7].textContent = t('challengesMode');
  document.querySelectorAll('.menu .item span')[8].textContent = t('analyticsMode');

  // تحديث الميزات
  document.querySelector('.section-title').textContent = t('newFeatures');
  document.querySelectorAll('.feature-item h3')[0].textContent = t('codeLab');
  document.querySelectorAll('.feature-item p')[0].textContent = t('codeLabDesc');
  document.querySelectorAll('.feature-item h3')[1].textContent = t('educationalLibrary');
  document.querySelectorAll('.feature-item p')[1].textContent = t('educationalLibraryDesc');
  document.querySelectorAll('.feature-item h3')[2].textContent = t('dailyChallenges');
  document.querySelectorAll('.feature-item p')[2].textContent = t('dailyChallengesDesc');
  document.querySelectorAll('.feature-item h3')[3].textContent = t('advancedAnalytics');
  document.querySelectorAll('.feature-item p')[3].textContent = t('advancedAnalyticsDesc');
  document.querySelectorAll('.feature-item h3')[4].textContent = t('voiceInput');
  document.querySelectorAll('.feature-item p')[4].textContent = t('voiceInputDesc');
  document.querySelectorAll('.feature-item h3')[5].textContent = t('multipleThemes');
  document.querySelectorAll('.feature-item p')[5].textContent = t('multipleThemesDesc');

  // تحديث التذييل
  document.querySelector('.footer-section h3').innerHTML = `🎓 ${t('nibras')}`;
  document.querySelector('.footer-section p').textContent = t('poweredByAI');
  document.querySelector('.studio-credit').textContent = t('sevenCode7Credit');
  document.querySelector('.footer-section h4').textContent = t('quickLinks');
  document.querySelector('.footer-section:nth-child(2) h4').textContent = t('contactUs');
  document.querySelector('.footer-bottom p').innerHTML = `&copy; 2024 ${t('nibras')} - ${t('allRightsReserved')} | ${t('developedBy')}`;

  // تحديث الإعدادات
  document.querySelector('.settings-header h2').innerHTML = `<i class="fas fa-cog"></i> ${t('settings')}`;
  document.querySelector('.setting-group h3').innerHTML = `<i class="fas fa-palette"></i> ${t('theme')}`;
  document.querySelectorAll('.setting-item label')[0].textContent = t('theme');
  document.querySelectorAll('.setting-item label')[1].textContent = t('fontSize');
  document.querySelector('.setting-group:nth-child(2) h3').innerHTML = `<i class="fas fa-font"></i> ${t('fontSize')}`;
  document.querySelector('.setting-group:nth-child(3) h3').innerHTML = `<i class="fas fa-bell"></i> ${t('notifications')}`;
  document.querySelectorAll('.setting-item label')[2].textContent = t('notifications');
  document.querySelectorAll('.setting-item label')[3].textContent = t('sound');
  document.querySelector('.setting-group:nth-child(4) h3').innerHTML = `<i class="fas fa-robot"></i> AI`;
  document.querySelectorAll('.setting-item label')[4].textContent = t('aiDetail');
  document.querySelector('.settings-footer .btn').innerHTML = `<i class="fas fa-save"></i> ${t('save')}`;
  document.querySelector('.settings-footer .btn.outline').innerHTML = `<i class="fas fa-undo"></i> ${t('reset')}`;
}

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  loadSettings();
  setupEventListeners();
  updateStats();
  updateUI();
  hideLoadingScreen();

  // إضافة اختيار اللغة في الإعدادات
  const settingsBody = document.querySelector('.settings-body');
  const languageGroup = document.createElement('div');
  languageGroup.className = 'setting-group';
  languageGroup.innerHTML = `
    <h3><i class="fas fa-language"></i> ${t('language')}</h3>
    <div class="setting-item">
      <label>${t('language')}</label>
      <select id="languageSelect" onchange="changeLanguage(this.value)">
        <option value="ar">${t('arabic')}</option>
        <option value="en">${t('english')}</option>
        <option value="tr">${t('turkish')}</option>
      </select>
    </div>
  `;
  settingsBody.insertBefore(languageGroup, settingsBody.lastElementChild);

  // إضافة زر البحث
  const headerContent = document.querySelector('.header-content');
  const searchBtn = document.createElement('button');
  searchBtn.id = 'searchBtn';
  searchBtn.className = 'btn ghost';
  searchBtn.title = t('searchPlaceholder');
  searchBtn.innerHTML = '<i class="fas fa-search"></i>';
  headerContent.insertBefore(searchBtn, headerContent.lastElementChild);

  // إضافة شريط البحث
  const searchBar = document.createElement('div');
  searchBar.id = 'searchBar';
  searchBar.className = 'search-bar';
  searchBar.style.display = 'none';
  searchBar.innerHTML = `
    <input type="text" id="searchInput" placeholder="${t('searchPlaceholder')}" class="text">
    <button class="btn" onclick="performSearch()"><i class="fas fa-search"></i></button>
    <button class="btn outline" onclick="closeSearch()"><i class="fas fa-times"></i></button>
  `;
  document.querySelector('.container').insertBefore(searchBar, document.querySelector('.stats-bar'));
}

// إخفاء شاشة التحميل
function hideLoadingScreen() {
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hidden');
  }, 2000);
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
  // إرسال الرسائل
  document.getElementById('sendBtn').addEventListener('click', sendMessage);
  document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // تبديل النمط
  document.getElementById('themeBtn').addEventListener('click', toggleTheme);

  // مسح الذاكرة
  document.getElementById('clearBtn').addEventListener('click', clearMemory);

  // تصدير الجلسة
  document.getElementById('exportBtn').addEventListener('click', exportSession);

  // الإعدادات
  document.getElementById('settingsBtn').addEventListener('click', openSettings);
  document.getElementById('closeSettingsBtn').addEventListener('click', closeSettings);

  // البحث
  document.getElementById('searchBtn').addEventListener('click', toggleSearch);

  // رفع الصور
  document.getElementById('uploadBtn').addEventListener('click', () => document.getElementById('fileInput').click());
  document.getElementById('fileInput').addEventListener('change', handleFileUpload);

  // السحب والإسقاط
  const dropZone = document.getElementById('dropZone');
  dropZone.addEventListener('dragover', handleDragOver);
  dropZone.addEventListener('drop', handleDrop);

  // الإيموجي
  document.getElementById('emojiBtn').addEventListener('click', toggleEmojiPicker);

  // الرسائل السريعة
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      sendQuickMessage(this.textContent.trim());
    });
  });

  // تبديل الأوضاع
  document.querySelectorAll('.menu .item').forEach(item => {
    item.addEventListener('click', function() {
      switchMode(this.dataset.mode);
    });
  });

  // إغلاق النوافذ المنبثقة
  document.addEventListener('click', function(e) {
    if (e.target === document.getElementById('imageModal')) {
      closeModal();
    }
    if (!document.getElementById('emojiPicker').contains(e.target) && e.target !== document.getElementById('emojiBtn')) {
      document.getElementById('emojiPicker').style.display = 'none';
    }
  });
}

// تبديل النمط
function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.dataset.theme = isDarkMode ? 'dark' : 'light';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateUI();
}

// تغيير اللغة
function changeLanguage(lang) {
  updateLanguage(lang);
  localStorage.setItem('language', lang);
}

// تبديل البحث
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  searchBar.style.display = searchBar.style.display === 'none' ? 'flex' : 'none';
  if (searchBar.style.display === 'flex') {
    document.getElementById('searchInput').focus();
  }
}

// إغلاق البحث
function closeSearch() {
  document.getElementById('searchBar').style.display = 'none';
}

// البحث في المحادثات
function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const messages = document.querySelectorAll('.msg');

  messages.forEach(msg => {
    const text = msg.textContent.toLowerCase();
    if (text.includes(query)) {
      msg.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
      msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      msg.style.backgroundColor = '';
    }
  });
}

// إرسال رسالة
async function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (!message) return;

  addMessage(message, 'user');
  input.value = '';
  userStats.questionsCount++;
  updateStats();

  showTypingIndicator();

  try {
    const response = await getAIResponse(message);
    hideTypingIndicator();
    addMessage(response, 'ai');
    userStats.pointsCount += 10;
    updateStats();
  } catch (error) {
    hideTypingIndicator();
    showNotification('حدث خطأ في الاتصال بالذكاء الاصطناعي', 'error');
    addMessage('عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.', 'ai');
  }
}

// إرسال رسالة سريعة
function sendQuickMessage(message) {
  document.getElementById('messageInput').value = message;
  sendMessage();
}

// إضافة رسالة إلى المحادثة
function addMessage(content, type) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `row ${type === 'user' ? 'justify-end' : ''}`;

  const msgDiv = document.createElement('div');
  msgDiv.className = `msg ${type}`;
  msgDiv.innerHTML = formatMessage(content);

  const timestamp = document.createElement('div');
  timestamp.className = 'ts';
  timestamp.textContent = new Date().toLocaleTimeString(currentLanguage === 'ar' ? 'ar-SA' : currentLanguage === 'tr' ? 'tr-TR' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  msgDiv.appendChild(timestamp);
  messageDiv.appendChild(msgDiv);
  chatMessages.appendChild(messageDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatHistory.push({ content, type, timestamp: Date.now() });
}

// تنسيق الرسالة
function formatMessage(content) {
  // تحويل الروابط إلى روابط قابلة للنقر
  content = content.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');

  // تحويل الأكواد
  content = content.replace(/```(\w+)?\n?([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');

  // تحويل النصوص المائلة
  content = content.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // تحويل النصوص الغامقة
  content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  return content;
}

// الحصول على رد من الذكاء الاصطناعي
async function getAIResponse(message) {
  const startTime = Date.now();

  const preInstruction = getPreInstructionForMode(currentMode);
  const fullPrompt = `${preInstruction}\n\nالسؤال: ${message}\n\n${responseLength === 'brief' ? 'يرجى تقديم إجابة مختصرة.' : 'يرجى تقديم إجابة مفصلة وتعليمية.'}`;

  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBLhfN8Zmo6r_IBAdW9lFO3RQXarCvKhKA', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: fullPrompt
        }]
      }]
    })
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json();
  const aiResponse = data.candidates[0].content.parts[0].text;

  const endTime = Date.now();
  userStats.lastResponseTime = endTime - startTime;

  return aiResponse;
}

// الحصول على التعليمات المسبقة حسب الوضع
function getPreInstructionForMode(mode) {
  const baseInstruction = "You are a professional designer and developer from Seven_Code7 studio, created by Laith Mahmoud Moatasem. You are a teacher within the Nibras application. Provide detailed, educational answers tailored to web development, design, and user experience.";

  const modeInstructions = {
    learn: baseInstruction + " Focus on teaching fundamental concepts clearly and progressively.",
    examples: baseInstruction + " Generate practical examples and code snippets for learning purposes.",
    practice: baseInstruction + " Create exercises and quizzes to test understanding.",
    workshop: baseInstruction + " Guide through hands-on projects and implementations.",
    planner: baseInstruction + " Help create structured learning plans and roadmaps.",
    lab: baseInstruction + " Assist with coding problems and debugging.",
    library: baseInstruction + " Recommend resources and explain complex topics.",
    challenges: baseInstruction + " Create engaging daily challenges and puzzles.",
    analytics: baseInstruction + " Explain data analysis and visualization concepts."
  };

  return modeInstructions[mode] || baseInstruction;
}

// عرض مؤشر الكتابة
function showTypingIndicator() {
  isTyping = true;
  document.getElementById('typing').classList.add('active');
}

// إخفاء مؤشر الكتابة
function hideTypingIndicator() {
  isTyping = false;
  document.getElementById('typing').classList.remove('active');
}

// تحديث الإحصائيات
function updateStats() {
  document.getElementById('questionsCount').textContent = userStats.questionsCount;
  document.getElementById('learningLevel').textContent = userStats.learningLevel;
  document.getElementById('pointsCount').textContent = userStats.pointsCount;
  document.getElementById('timer').textContent = formatTime(userStats.lastResponseTime);
  document.getElementById('streakCount').textContent = userStats.streakCount;
  document.getElementById('totalTime').textContent = formatTime(userStats.totalTime);

  // تحديث شريط التقدم
  const progressPercent = Math.min((userStats.questionsCount / 100) * 100, 100);
  document.getElementById('progressBar').style.width = `${progressPercent}%`;
  document.getElementById('progressText').textContent = `${Math.round(progressPercent)}%`;

  // حفظ الإحصائيات
  localStorage.setItem('userStats', JSON.stringify(userStats));
}

// تنسيق الوقت
function formatTime(ms) {
  if (ms < 1000) return `${ms}ms`;
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  return `${minutes}m ${seconds % 60}s`;
}

// تبديل الأوضاع
function switchMode(mode) {
  currentMode = mode;

  // تحديث القائمة النشطة
  document.querySelectorAll('.menu .item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

  // تحديث العنوان
  document.getElementById('chatTitle').innerHTML = `<i class="fas fa-comments"></i> ${t(mode + 'Mode')}`;

  // إخفاء/إظهار منطقة إدخال الموضوع
  const topicArea = document.getElementById('topicInputArea');
  if (mode === 'learn') {
    topicArea.style.display = 'flex';
  } else {
    topicArea.style.display = 'none';
  }

  // تحميل محتوى الوضع
  loadModeContent(mode);
}

// تحميل محتوى الوضع
function loadModeContent(mode) {
  const chatMessages = document.getElementById('chatMessages');

  // مسح الرسائل الحالية
  while (chatMessages.children.length > 1) {
    chatMessages.removeChild(chatMessages.lastChild);
  }

  // إضافة رسالة ترحيب للوضع
  const welcomeMessages = {
    learn: 'مرحباً! أنا معلمك الافتراضي. يمكنك البدء بإدخال موضوع تريد تعلمه.',
    examples: 'سأساعدك في إنشاء أمثلة عملية للمفاهيم المختلفة.',
    practice: 'دعنا نختبر معرفتك من خلال تمارين وأسئلة.',
    workshop: 'ورشة عمل لتطبيق المعرفة عملياً.',
    planner: 'سأساعدك في تخطيط رحلتك التعليمية.',
    lab: 'المختبر البرمجي جاهز للتجارب!',
    library: 'اكتشف مجموعة واسعة من الموارد التعليمية.',
    challenges: 'تحديات يومية لتعزيز مهاراتك.',
    analytics: 'تحليل بيانات تقدمك التعليمي.'
  };

  addMessage(welcomeMessages[mode] || 'مرحباً بك في هذا الوضع!', 'ai');
}

// بدء التعلم
function startLearning() {
  const topic = document.getElementById('topicInput').value.trim();
  if (topic) {
    sendQuickMessage(`أريد تعلم ${topic}`);
    document.getElementById('topicInput').value = '';
  }
}

// مسح الذاكرة
function clearMemory() {
  if (confirm('هل أنت متأكد من مسح جميع الرسائل؟')) {
    const chatMessages = document.getElementById('chatMessages');
    while (chatMessages.children.length > 1) {
      chatMessages.removeChild(chatMessages.lastChild);
    }
    chatHistory = [];
    showNotification('تم مسح الذاكرة بنجاح', 'success');
  }
}

// تصدير الجلسة
function exportSession() {
  const data = {
    chatHistory,
    userStats,
    exportDate: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `nibras-session-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);

  showNotification('تم تصدير الجلسة بنجاح', 'success');
}

// فتح الإعدادات
function openSettings() {
  document.getElementById('settingsModal').classList.add('active');
}

// إغلاق الإعدادات
function closeSettings() {
  document.getElementById('settingsModal').classList.remove('active');
}

// حفظ الإعدادات
function saveSettings() {
  const theme = document.getElementById('themeSelect').value;
  const fontSize = document.getElementById('fontSize').value;
  const notifications = document.getElementById('notificationsEnabled').checked;
  const sound = document.getElementById('soundEnabled').checked;
  const detailLevel = document.getElementById('detailLevel').value;
  const primaryColor = document.getElementById('primaryColor').value;
  const language = document.getElementById('languageSelect').value;

  // تطبيق الإعدادات
  if (theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.dataset.theme = prefersDark ? 'dark' : 'light';
  } else {
    document.body.dataset.theme = theme;
  }

  document.documentElement.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';
  document.documentElement.style.setProperty('--brand', primaryColor);

  notificationsEnabled = notifications;
  soundEnabled = sound;
  responseLength = detailLevel;
  updateLanguage(language);

  // حفظ في التخزين المحلي
  localStorage.setItem('settings', JSON.stringify({
    theme,
    fontSize,
    notifications,
    sound,
    detailLevel,
    primaryColor,
    language
  }));

  closeSettings();
  showNotification('تم حفظ الإعدادات بنجاح', 'success');
}

// إعادة تعيين الإعدادات
function resetSettings() {
  if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات؟')) {
    localStorage.removeItem('settings');
    location.reload();
  }
}

// تحميل الإعدادات
function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('settings') || '{}');
  const stats = JSON.parse(localStorage.getItem('userStats') || '{}');

  if (settings.theme) {
    document.getElementById('themeSelect').value = settings.theme;
    if (settings.theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.dataset.theme = prefersDark ? 'dark' : 'light';
    } else {
      document.body.dataset.theme = settings.theme;
    }
  }

  if (settings.fontSize) {
    document.getElementById('fontSize').value = settings.fontSize;
    document.documentElement.style.fontSize = settings.fontSize === 'small' ? '14px' : settings.fontSize === 'large' ? '18px' : '16px';
  }

  if (settings.primaryColor) {
    document.getElementById('primaryColor').value = settings.primaryColor;
    document.documentElement.style.setProperty('--brand', settings.primaryColor);
  }

  if (settings.language) {
    document.getElementById('languageSelect').value = settings.language;
    updateLanguage(settings.language);
  }

  document.getElementById('notificationsEnabled').checked = settings.notifications !== false;
  document.getElementById('soundEnabled').checked = settings.sound !== false;
  document.getElementById('detailLevel').value = settings.detailLevel || 'detailed';

  notificationsEnabled = settings.notifications !== false;
  soundEnabled = settings.sound !== false;
  responseLength = settings.detailLevel || 'detailed';

  // تحميل الإحصائيات
  userStats = { ...userStats, ...stats };
}

// عرض الإشعارات
function showNotification(message, type = 'info') {
  const container = document.getElementById('notificationContainer');
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;

  const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';

  notification.innerHTML = `
    <div class="notification-icon">
      <i class="fas fa-${icon}"></i>
    </div>
    <div class="notification-content">
      <div class="notification-title">${type === 'success' ? 'نجح' : type === 'error' ? 'خطأ' : 'تنبيه'}</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;

  container.appendChild(notification);

  // تشغيل صوت التنبيه إذا كان مفعلاً
  if (soundEnabled) {
    playNotificationSound();
  }

  // إزالة الإشعار تلقائياً
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// تشغيل صوت التنبيه
function playNotificationSound() {
  // إنشاء صوت بسيط
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.3);
}

// معالجة رفع الملفات
function handleFileUpload(event) {
  const files = event.target.files;
  handleFiles(files);
}

// معالجة السحب والإسقاط
function handleDragOver(event) {
  event.preventDefault();
  event.currentTarget.classList.add('drag-over');
}

function handleDrop(event) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');
  const files = event.dataTransfer.files;
  handleFiles(files);
}

// معالجة الملفات
function handleFiles(files) {
  for (let file of files) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        addImageToInput(e.target.result, file.name);
      };
      reader.readAsDataURL(file);
    }
  }
}

// إضافة صورة إلى منطقة الإدخال
function addImageToInput(src, name) {
  const thumbs = document.getElementById('thumbs');
  const thumb = document.createElement('div');
  thumb.className = 'thumb';

  thumb.innerHTML = `
    <img src="${src}" alt="${name}" onclick="previewImage('${src}')">
    <button class="x" onclick="removeImage(this)">
      <i class="fas fa-times"></i>
    </button>
  `;

  thumbs.appendChild(thumb);
}

// معاينة الصورة
function previewImage(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modalImg.src = src;
  modal.classList.add('active');
}

// إغلاق المعاينة
function closeModal() {
  document.getElementById('imageModal').classList.remove('active');
}

// إزالة الصورة
function removeImage(button) {
  button.parentElement.remove();
}

// تبديل منتقي الإيموجي
function toggleEmojiPicker() {
  const picker = document.getElementById('emojiPicker');
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}

// إدراج إيموجي
function insertEmoji(emoji) {
  const input = document.getElementById('messageInput');
  input.value += emoji;
  input.focus();
  document.getElementById('emojiPicker').style.display = 'none';
}

// تحسين إمكانية الوصول
document.addEventListener('keydown', function(e) {
  // إغلاق النوافذ المنبثقة بـ Escape
  if (e.key === 'Escape') {
    closeModal();
    closeSettings();
    document.getElementById('emojiPicker').style.display = 'none';
    closeSearch();
  }

  // اختصارات لوحة المفاتيح
  if (e.ctrlKey || e.metaKey) {
    switch(e.key) {
      case 'k':
        e.preventDefault();
        toggleSearch();
        break;
      case '/':
        e.preventDefault();
        document.getElementById('messageInput').focus();
        break;
      case 'Enter':
        if (document.activeElement === document.getElementById('messageInput')) {
          e.preventDefault();
          sendMessage();
        }
        break;
    }
  }
});

// تحديث الإعدادات عند تغيير تفضيلات النظام
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const settings = JSON.parse(localStorage.getItem('settings') || '{}');
  if (settings.theme === 'auto') {
    document.body.dataset.theme = e.matches ? 'dark' : 'light';
    updateUI();
  }
});

// تصدير الإحصائيات كصورة
function exportStatsAsImage() {
  // استخدام html2canvas إذا كان متوفراً
  if (typeof html2canvas !== 'undefined') {
    html2canvas(document.querySelector('.stats-bar')).then(canvas => {
      const link = document.createElement('a');
      link.download = 'nibras-stats.png';
      link.href = canvas.toDataURL();
      link.click();
      showNotification('تم تصدير الإحصائيات كصورة', 'success');
    });
  } else {
    showNotification('مكتبة html2canvas غير متوفرة', 'warning');
  }
}

// مشاركة الجلسة
function shareSession() {
  if (navigator.share) {
    navigator.share({
      title: 'جلسة نبراس التعليمية',
      text: 'تحقق من جلسة التعلم الخاصة بي في نبراس!',
      url: window.location.href
    });
  } else {
    // نسخ الرابط إلى الحافظة
    navigator.clipboard.writeText(window.location.href).then(() => {
      showNotification('تم نسخ الرابط إلى الحافظة', 'success');
    });
  }
}

// تتبع النشاط
let activityTimeout;
function resetActivityTimeout() {
  clearTimeout(activityTimeout);
  activityTimeout = setTimeout(() => {
    // حفظ تلقائي للإحصائيات
    localStorage.setItem('userStats', JSON.stringify(userStats));
  }, 30000); // حفظ كل 30 ثانية
}

document.addEventListener('mousemove', resetActivityTimeout);
document.addEventListener('keypress', resetActivityTimeout);
document.addEventListener('click', resetActivityTimeout);

// تهيئة التتبع
resetActivityTimeout();

// دوال إضافية للوضع الداكن
function applyTheme(theme) {
  document.body.dataset.theme = theme;
  isDarkMode = theme === 'dark';
  updateUI();
}

// تحسين معالجة الأخطاء
window.addEventListener('error', function(e) {
  console.error('خطأ في التطبيق:', e.error);
  showNotification('حدث خطأ في التطبيق. يرجى إعادة تحميل الصفحة.', 'error');
});

window.addEventListener('unhandledrejection', function(e) {
  console.error('خطأ غير محتمل:', e.reason);
  showNotification('حدث خطأ غير متوقع.', 'error');
});

// تحسين الأداء
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// تحسين البحث
const debouncedSearch = debounce(performSearch, 300);

// تحديث دالة البحث
function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const messages = document.querySelectorAll('.msg');

  // إزالة التمييز السابق
  messages.forEach(msg => {
    msg.style.backgroundColor = '';
    msg.classList.remove('search-highlight');
  });

  if (query.length < 2) return;

  let foundCount = 0;
  messages.forEach(msg => {
    const text = msg.textContent.toLowerCase();
    if (text.includes(query)) {
      msg.classList.add('search-highlight');
      foundCount++;
      if (foundCount === 1) {
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  if (foundCount > 0) {
    showNotification(`تم العثور على ${foundCount} رسالة`, 'info');
  } else {
    showNotification('لم يتم العثور على نتائج', 'warning');
  }
}

// إضافة مستمع للبحث مع التأخير
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', debouncedSearch);
  }
});

// تحسين الردود التلقائية
const autoResponses = {
  'مرحبا': 'مرحباً! كيف يمكنني مساعدتك في رحلتك التعليمية اليوم؟',
  'hello': 'Hello! How can I help you with your learning journey today?',
  'merhaba': 'Merhaba! Bugün öğrenme yolculuğunuzda size nasıl yardımcı olabilirim?',
  'شكرا': 'العفو! أنا هنا دائماً لمساعدتك.',
  'thank you': 'You\'re welcome! I\'m always here to help.',
  'teşekkürler': 'Rica ederim! Her zaman yardıma hazırım.'
};

function checkAutoResponse(message) {
  const lowerMessage = message.toLowerCase();
  for (const [key, response] of Object.entries(autoResponses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }
  return null;
}

// تحديث دالة إرسال الرسالة
async function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (!message) return;

  // التحقق من الردود التلقائية
  const autoResponse = checkAutoResponse(message);
  if (autoResponse) {
    addMessage(message, 'user');
    input.value = '';
    userStats.questionsCount++;
    updateStats();

    setTimeout(() => {
      addMessage(autoResponse, 'ai');
      userStats.pointsCount += 5;
      updateStats();
    }, 1000);
    return;
  }

  addMessage(message, 'user');
  input.value = '';
  userStats.questionsCount++;
  updateStats();

  showTypingIndicator();

  try {
    const response = await getAIResponse(message);
    hideTypingIndicator();
    addMessage(response, 'ai');
    userStats.pointsCount += 10;
    updateStats();
  } catch (error) {
    hideTypingIndicator();
    console.error('خطأ في API:', error);
    showNotification('حدث خطأ في الاتصال بالذكاء الاصطناعي. يرجى المحاولة مرة أخرى.', 'error');
    addMessage('عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى لاحقاً.', 'ai');
  }
}

// إضافة المزيد من الوظائف التفاعلية
function addInteractiveElements() {
  // إضافة تأثيرات التمرير
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // مراقبة العناصر للتحريك
  document.querySelectorAll('.card, .feature-item, .stat').forEach(el => {
    observer.observe(el);
  });
}

// استدعاء إضافة العناصر التفاعلية
document.addEventListener('DOMContentLoaded', addInteractiveElements);

// تحسين تحميل الصور
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// استدعاء التحميل الكسول للصور
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// إضافة دعم PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('SW registered'))
      .catch(error => console.log('SW registration failed'));
  });
}

// تحسين إمكانية الوصول
function enhanceAccessibility() {
  // إضافة ARIA labels
  document.querySelectorAll('.btn').forEach(btn => {
    if (!btn.getAttribute('aria-label') && btn.textContent.trim()) {
      btn.setAttribute('aria-label', btn.textContent.trim());
    }
  });

  // تحسين التنقل بلوحة المفاتيح
  document.querySelectorAll('button, a, input, select, textarea').forEach(el => {
    el.setAttribute('tabindex', '0');
  });
}

document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// نهاية الملف