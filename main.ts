// Absurd Micro-Startup Pitch-Off — u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
//
// Kandidat yang dipertimbangkan (semua draf sendiri, satu kalimat, <= 200 karakter):
// 1. (151) "A lazy agent that rewrites your ex's 3 a.m. breakup texts into polite
//    corporate memos, charging $2 per apology to heartbroken founders who can't sleep."
// 2. (151) "An agent that renames your 400 untitled screenshots for $0.10 each, so
//    divorced dads can find their kid's birthday photo without opening a single file."
// 3. (145) "A subscription agent that apologizes to your landlord in your voice every
//    time rent is late, $5 a month, so you never have to type 'sorry' again."
// 4. (140) "A lazy agent that watches your houseplant's webcam and texts your roommate
//    'water me' in your voice, $3 a month from forgetful plant owners."
// 5. (148) "An agent that ghostwrites breakup voicemails for your smart fridge, $4 per
//    message, paid by appliance brands that want their gadgets to sound human."
// 6. (150) "A lazy agent that unsubscribes you from every newsletter you never read,
//    charging $1 per 100 emails to inbox-zero addicts who can't click unsubscribe."
//
// Alasan pilihan pemenang (kandidat 1):
// - Kriteria 1 & 2: momen paling absurd-spesifik — pesan putus jam 3 pagi diubah jadi
//   memo korporat yang sopan; bukan kategori umum, melainkan satu tugas kecil yang
//   aneh dan konkret.
// - Kriteria 3: pembeli jelas (founder patah hati yang tidak bisa tidur) dan model
//   pendapatan jelas ($2 per permintaan maaf) — konyol DAN bisa dijual.
// - Kriteria 4: peran agent malas eksplisit ("lazy agent") dan pekerjaannya remeh:
//   menulis ulang teks pendek, tanpa pengawasan.
// - Kriteria 5: absurditas dan kasus bisnisnya mendarat dalam sekali baca.
// Kandidat 2 dan 3 kalah tipis karena peran "malas"-nya kurang eksplisit; kandidat 5
// pembelinya paling lemah (merek peralatan tidak punya alasan membayar); kandidat 6
// paling tidak absurd (produk unsubscribe sudah umum).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A lazy agent that rewrites your ex's 3 a.m. breakup texts into polite corporate memos, charging $2 per apology to heartbroken founders who can't sleep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Deterministik: tidak ada input acak, waktu, atau jaringan — setiap run menulis
// byte yang sama persis, tanpa newline di akhir file.
