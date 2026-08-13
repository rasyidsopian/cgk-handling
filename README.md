# CGK Handling PWA v5

## Update penting
- TIBA selalu memakai **waktu kedatangan di CGK** dari flight segment terakhir yang berakhir di `CGK`.
- Waktu keberangkatan dari transit tidak dipakai sebagai jam handling TIBA.
- Contoh: `18AUG DOHCGK 0235 1535 QR956` → **18 Agustus, TIBA 15:35**.
- Event BERANGKAT tetap memakai waktu keberangkatan dari CGK.
- `(+1)` dihitung ke tanggal hari berikutnya.

## UI
Mengikuti referensi kedua: header compact, calendar card besar, right rail untuk legend/quick actions/catatan, pastel green/orange, dan drawer detail.

## Fungsi tombol
- Today
- Previous / Next
- Month selector
- Search / Ctrl K
- Export CSV
- Print
- Add Note
- Filter Events
- Theme
- Help / Notifications / Profile feedback
- Event detail drawer

## GitHub Pages
Upload **isi folder ini** ke root repository, bukan folder induknya.
Setelah commit, tunggu deployment selesai.

## PWA cache
Versi ini menggunakan cache `v5-20260813` dan file JS/CSS/data dengan query `?v=5` agar update data lama tidak tertahan oleh service worker versi sebelumnya.

Jika iPhone masih menampilkan versi lama setelah deployment, tutup aplikasi dari app switcher, buka kembali dari Home Screen, lalu refresh URL sekali di Safari.
