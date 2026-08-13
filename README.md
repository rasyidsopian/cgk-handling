# CGK Handling PWA v11

## Add schedule
1. Klik `+` di tanggal untuk input manual.
2. Klik `Import Schedule` untuk paste itinerary atau upload Excel/CSV/PDF/Word (.docx).

Import otomatis membuat hanya event `CGK` berangkat dan `CGK` tiba. Untuk arrival, jam yang dipakai adalah jam tiba di CGK (kolom waktu kedua pada segment `...CGK`), termasuk perhitungan `( +1 )`.

## Edit semua jadwal
Klik event apa pun di kalender → `Edit isi`.
- Event sumber PDF: perubahan disimpan sebagai override lokal; `Reset asli` mengembalikan nilai PDF.
- Event custom/import: perubahan tersimpan sebagai jadwal custom.

## File import
- Excel `.xlsx/.xls` dan CSV via SheetJS CDN
- PDF via PDF.js CDN (PDF teks; PDF scan/gambar tanpa text layer tidak akan terbaca)
- Word `.docx` via Mammoth CDN

Data edit/custom disimpan di browser yang dipakai.
