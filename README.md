# 💕 Valentine Gallery Website

Website galeri Valentine yang indah dengan fitur musik, edit foto, dan customize teks. Dibangun dengan Next.js, React, Tailwind CSS, dan Framer Motion.

## ✨ Fitur Utama

- 🎵 **Tambah Musik** - Support MP3 dari Catbox.moe atau hosting lain
- 📸 **Edit Foto** - Ganti foto dan label dengan mudah
- ✏️ **Edit Teks** - Klik judul & subtitle untuk custom
- 🎨 **Animasi Smooth** - Powered by Framer Motion
- 📱 **Responsive** - Sempurna di mobile, tablet, desktop
- 💾 **Real-time** - Semua perubahan langsung terlihat

## 🚀 Quick Start

### 1. Clone atau Download Repository

```bash
git clone <repository-url>
cd valentine-vercel
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Edit dan Customize

- **Foto:** Hover foto → Klik ikon pensil → Edit URL & label
- **Judul:** Klik judul untuk edit
- **Subtitle:** Klik subtitle untuk edit
- **Musik:** Klik "Tambah Musik" → Paste URL MP3

## 📤 Deploy ke Vercel (RECOMMENDED)

### Cara Tercepat:

#### A. Pakai Vercel CLI
```bash
npm i -g vercel
vercel
```

Ikuti instruksi, pilih folder project, dan selesai!

#### B. Pakai GitHub + Vercel Dashboard
1. Push code ke GitHub
2. Buka [https://vercel.com](https://vercel.com)
3. Login dengan GitHub
4. Klik "New Project"
5. Pilih repository ini
6. Klik "Deploy"
7. Selesai! 🎉

#### C. Pakai Vercel Dashboard Langsung
1. Buka [https://vercel.com/new](https://vercel.com/new)
2. Upload folder ini
3. Klik "Deploy"

### Setelah Deploy:
- Link website Anda: `https://valentine-gallery-<random>.vercel.app`
- Share ke pacar! 💕

## 🎵 Cara Upload Musik

### Opsi 1: Catbox.moe (PALING MUDAH)
1. Buka [https://catbox.moe](https://catbox.moe)
2. Drag & drop file MP3
3. Copy link yang muncul
4. Paste di "Tambah Musik"

### Opsi 2: File Hosting Lain
- Firebase Storage
- AWS S3
- Google Drive (dengan format khusus)
- Dropbox Public Link

⚠️ **Penting:** Link harus support CORS dan bisa diakses publik

## 📸 Cara Upload Foto

### Opsi 1: ImgBB (PALING MUDAH)
1. Buka [https://imgbb.com](https://imgbb.com)
2. Upload foto
3. Copy URL
4. Hover foto di website → Klik ikon pensil → Paste URL

### Opsi 2: Unsplash
1. Cari foto di [https://unsplash.com](https://unsplash.com)
2. Copy URL asli foto
3. Gunakan di website

### Opsi 3: Google Drive
1. Upload foto ke Drive
2. Share (Anyone with link)
3. Ubah URL format:
   ```
   Awal: https://drive.google.com/open?id=FILE_ID
   Ubah: https://drive.google.com/uc?export=view&id=FILE_ID
   ```

## 🛠️ Struktur Project

```
valentine-vercel/
├── app/
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── valentine-page.tsx # Main component
│   └── ui/                # shadcn/ui components
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static files
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🔧 Teknologi

- **Framework:** Next.js 14
- **UI:** React 18 + Tailwind CSS
- **Components:** shadcn/ui
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Font:** Geist

## 📝 Customization

### Ubah Warna Tema
Edit `app/globals.css` dan cari section CSS variables:
```css
:root {
  --accent: 346 77% 50%;  /* Rose/Pink color */
}
```

### Ubah Font
Edit `app/layout.tsx` dan `tailwind.config.ts`

### Ubah Foto Default
Edit `components/valentine-page.tsx` dan cari `DEFAULT_PHOTOS`

## 🐛 Troubleshooting

### Musik tidak putar?
- ✓ Cek URL benar dan bisa diakses publik
- ✓ Format harus MP3
- ✓ Klik tombol Play (browser blocking autoplay)
- ✓ Cek browser console untuk error

### Foto tidak muncul?
- ✓ Cek URL tidak typo
- ✓ Cek format gambar supported (JPG, PNG, WebP)
- ✓ Cek link bisa diakses publik

### Deploy ke Vercel gagal?
- ✓ Pastikan punya akun Vercel
- ✓ Pastikan git initialized dan di-push ke GitHub
- ✓ Cek versi Node.js compatible

## 📞 Support

Ada pertanyaan atau bug? Buat issue di repository atau hubungi saya!

## 💕 Selamat Valentine!

Website ini dibuat dengan cinta untuk orang terkasih. Semoga membuat harinya lebih spesial! ✨

---

Made with ❤️ for you
