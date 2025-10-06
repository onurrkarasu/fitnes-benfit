# 🏋️ Benfit Fitness - Egzersiz Kütüphanesi

Modern, profesyonel ve kullanıcı dostu bir spor salonu egzersiz uygulaması. React + Vite + Tailwind CSS ile geliştirildi.

## 🚀 Özellikler

- ✅ 12 farklı egzersiz videosu
- 🔍 Gerçek zamanlı arama
- 📁 Kategori filtreleme (Bacak, Göğüs, Sırt, Omuz, Core, Kol)
- 📊 Zorluk seviyesi filtreleme (Başlangıç, Orta, İleri)
- 🎥 Video modal popup
- 📱 Tam responsive tasarım
- 🌙 Modern dark theme
- ⚡ Hızlı ve optimize

## 📁 Proje Yapısı

```
fitness-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Üst navbar ve arama
│   │   ├── Sidebar.jsx         # Filtre sidebar'ı
│   │   ├── ExerciseGrid.jsx    # Grid layout container
│   │   ├── ExerciseCard.jsx    # Tek egzersiz kartı
│   │   └── VideoModal.jsx      # Video popup modal
│   ├── data/
│   │   └── exercises.js        # Egzersiz verileri
│   ├── utils/
│   │   └── helpers.js          # Yardımcı fonksiyonlar
│   ├── App.jsx                 # Ana component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global stiller
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
