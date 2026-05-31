// Konfigurasi Autentikasi
const USER_AUTH = { user: "AK3U", pass: "Kernaden17" };

// Database Materi TBM Lengkap 1 Bulan
const tbmData = {
    "W1": {
        title: "Disiplin & Kesadaran Dasar",
        days: {
            "Senin": {
                topic: "Kedisiplinan APD (Bukan Sekadar Syarat)",
                open: "Assalamualaikum warahmatullahi wabarakatuh, Selamat pagi rekan-rekan semua! Bagaimana kabarnya hari ini? Masih semangat?<br><br>Sebelum kita mulai, saya minta tolong cek kawan di sebelah kiri dan kanan kalian. Pastikan mereka sudah memakai helm dan sepatu safety dengan benar. Kalau ada yang belum, silakan diingatkan sekarang juga karena kita adalah satu tim yang harus saling jaga.",
                core: "Rekan-rekan, hari ini saya ingin mengingatkan kembali bahwa APD bukan sekadar pajangan atau syarat administrasi biar tidak kena tegur. APD adalah benteng terakhir pertahanan nyawa kita.<br><br>• <strong>Helm:</strong> Pastikan tali dagu terpasang. Ingat, benturan tidak memberi aba-aba.<br>• <strong>Sepatu Safety:</strong> Pastikan dalam kondisi layak, jangan ada yang licin atau sobek.<br>• <strong>Rompi/Vest:</strong> Agar rekan kita dan operator alat berat bisa melihat keberadaan kita dengan jelas.<br><br>Perintah saya hari ini: Jangan ada yang memulai pekerjaan sebelum APD lengkap terpasang. Jika kalian melihat APD kawan yang rusak, segera lapor ke saya untuk kita ganti.",
                close: "Ingat rekan-rekan, di rumah ada keluarga yang sedang menunggu kita pulang dalam keadaan utuh. Jangan biarkan kecerobohan kecil hari ini merusak kebahagiaan mereka nanti sore.<br><br>Mari kita tutup dengan doa agar pekerjaan kita hari ini diberikan kelancaran dan perlindungan. Berdoa menurut agama masing-masing, mulai... Selesai.<br><br><strong>Safety! (YES!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Silakan menuju pos masing-masing dan selamat bekerja!"
            },
            "Selasa": {
                topic: "Safety Tools & Peralatan Kerja",
                open: "Selamat pagi rekan-rekan semua! Sebelum kita mulai memegang alat masing-masing, mari kita pastikan tangan kita memegang alat yang benar.<br><br>Coba periksa peralatan yang kalian bawa sekarang. Apakah sudah siap pakai, atau malah berpotensi mencelakai?",
                core: "Rekan-rekan, peralatan kerja yang rusak atau tidak standar adalah ancaman nyata di depan mata. Ingat, alat yang tidak layak bisa menjadi penyebab kecelakaan fatal.<br><br>• <strong>Pengecekan Rutin:</strong> Selalu cek kondisi kabel, mesin, atau kunci-kunci sebelum digunakan. Jangan tunggu rusak baru lapor.<br>• <strong>Gunakan Sesuai Fungsi:</strong> Jangan gunakan alat tangan sebagai pengganti alat lain (contoh: tang digunakan sebagai palu). Ini sangat berbahaya.<br>• <strong>Penyimpanan (5R):</strong> Setelah digunakan, bersihkan dan letakkan kembali alat pada tempatnya. Alat yang berserakan adalah sumber bahaya tersandung.<br><br>Perintah saya: Jika kalian menemukan alat yang rusak atau tidak layak pakai, segera pisahkan dan beri tanda, lalu lapor ke saya untuk perbaikan atau penggantian.",
                close: "Kerja hebat dimulai dari alat yang sehat. Jangan memaksakan diri bekerja dengan peralatan yang membahayakan nyawa Anda.<br><br>Mari kita berdoa agar seluruh peralatan yang kita gunakan hari ini membawa manfaat dan keamanan bagi kita semua. Berdoa mulai... Selesai.<br><br><strong>Safety Tools! (READY!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Silakan lanjutkan pekerjaan dengan waspada dan hati-hati!"
            },
            "Rabu": {
                topic: "Ergonomi & Cara Angkat Manual",
                open: "Selamat pagi rekan-rekan! Sebelum kita menguras tenaga hari ini, mari kita bicara tentang aset paling berharga kalian: Tubuh Anda sendiri.<br><br>Barang yang rusak bisa kita beli lagi, tapi kalau saraf punggung Anda yang terjepit, itu akan terasa sakitnya seumur hidup.",
                core: "Rekan-rekan, tulang belakang kita bukan tuas besi. Mengangkat beban berat dengan posisi membungkuk adalah cara tercepat merusak kesehatan Anda. Mari terapkan prinsip <strong>Power Position</strong>:<br><br>• <strong>Pijakan Kokoh:</strong> Buka kaki selebar bahu dan letakkan satu kaki sedikit di depan beban agar keseimbangan maksimal.<br>• <strong>Gunakan Kaki, Bukan Punggung:</strong> Tekuk lutut Anda (posisi jongkok), jaga punggung tetap tegak saat mulai mengangkat. Biarkan otot paha yang menanggung beban.<br>• <strong>Peluk Beban:</strong> Dekatkan benda sedekat mungkin dengan pusar atau dada Anda. Semakin jauh beban dari tubuh, semakin berat tekanan pada pinggang.<br>• <strong>Jangan Memelintir (Twisting):</strong> Jika ingin berbelok, gerakkan seluruh kaki Anda. Jangan memutar badan di bagian pinggang saat sedang memikul beban.<br><br>Perintah saya: Jika beban terlalu berat atau besar hingga menghalangi pandangan mata, <strong>STOP!</strong> Minta bantuan rekan atau gunakan alat bantu mekanis.",
                close: "Bekerjalah dengan cerdas, bukan hanya dengan otot. Jaga kondisi fisik Anda agar tetap bugar sampai masa tua nanti.<br><br>Mari kita berdoa agar diberikan kekuatan fisik dan kesehatan tulang yang terjaga selama bekerja. Berdoa mulai... Selesai.<br><br><strong>Ergonomic! (STAY UPRIGHT!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Jaga punggung Anda, tetap fokus, dan selamat bekerja!"
            },
            "Kamis": {
                topic: "Pinch Points (Bahaya Titik Jepit)",
                open: "Selamat pagi rekan-rekan! Hari ini kita akan membahas bahaya diam yang sering mengincar jemari dan tangan kita, yaitu Titik Jepit atau Pinch Points.<br><br>Coba perhatikan tangan kalian. Pastikan hari ini kalian pulang dengan jumlah jari yang masih lengkap dan utuh.",
                core: "Rekan-rekan, titik jepit ada di mana saja: di antara dua benda bergerak, di antara pintu, rantai, gear, hingga saat pemindahan material berat.<br><br>• <strong>Identifikasi Bahaya:</strong> Selalu waspada pada area 'Line of Fire'. Jangan letakkan tangan di area yang bisa terjepit saat benda bergerak atau bergeser.<br>• <strong>Gunakan Alat Bantu:</strong> Gunakan stick pengait atau alat bantu lainnya saat memposisikan beban. Jangan gunakan tangan kosong sebagai ganjal.<br>• <strong>Komunikasi Operator:</strong> Pastikan ada kontak mata dengan operator alat berat sebelum Anda mendekati area kerja yang memiliki risiko jepit.<br>• <strong>Pemasangan Guarding:</strong> Pastikan semua pelindung mesin (guarding) terpasang sempurna. Jangan pernah melepasnya saat mesin beroperasi.<br><br>Perintah saya: Jika kalian ragu di mana titik jepit suatu alat, STOP! Tanya ke saya atau pengawas sebelum melanjutkan.",
                close: "Benda keras tidak akan mengalah pada tulang kita. Sekali terjepit, kerusakannya bisa permanen.<br><br>Mari kita berdoa agar tangan dan kaki kita selalu dilindungi dalam setiap langkah kerja hari ini. Berdoa mulai... Selesai.<br><br><strong>Hands & Fingers! (WATCH THEM!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Tetap fokus, perhatikan tangan Anda, dan selamat bekerja!"
            },
            "Jumat": {
                topic: "Housekeeping (Kerapian & Kebersihan Area Kerja)",
                open: "Selamat pagi rekan-rekan semua! Sebelum kita mulai bekerja, mari kita lihat sekeliling kita.<br><br>Apakah area kita sudah rapi? Ingat, area kerja yang berantakan bukan hanya tidak enak dipandang, tapi adalah jebakan yang menunggu kawan kita celaka.",
                core: "Rekan-rekan, housekeeping atau kerapian area bukan tugas cleaning service saja, tapi tanggung jawab kita semua. Area yang rapi mencerminkan profesionalisme kerja kita.<br><br>• <strong>Ringkas & Rapi:</strong> Pisahkan barang yang dipakai dan tidak dipakai. Jangan biarkan kabel atau selang melintang di jalur pejalan kaki.<br>• <strong>Resik:</strong> Pastikan tidak ada ceceran oli atau sampah kimia di lantai. Jika ada tumpahan, segera bersihkan jangan tunggu nanti.<br>• <strong>Rawat:</strong> Kembalikan peralatan ke raknya masing-masing setelah digunakan. Jangan dibiasakan menumpuk material di depan alat pemadam (APAR) atau kotak P3K.<br>• <strong>Rajin:</strong> Lakukan pembersihan area 5 menit sebelum bekerja dan 5 menit sebelum pulang.<br><br>Perintah saya: Jalur evakuasi dan akses APAR harus bebas hambatan 100%. Jika saya temukan material menghalangi akses darurat, pekerjaan akan saya hentikan sampai area bersih.",
                close: "Lingkungan kerja yang bersih membuat pikiran jernih dan kerja lebih aman. Mari kita jaga rumah kedua kita ini.<br><br>Mari kita berdoa agar hari ini kita diberikan kelancaran dan pulang ke rumah dengan keadaan selamat. Berdoa mulai... Selesai.<br><br><strong>Housekeeping! (CLEAN & SAFE!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Rapi areanya, aman kerjanya. Silakan mulai beraktivitas!"
            },
            "Sabtu": {
                topic: "Near Miss (Kejadian Hampir Celaka)",
                open: "Semangat pagi rekan-rekan! Sebelum kita mengakhiri minggu ini, saya ingin bertanya.<br><br>Siapa di sini yang pernah hampir terpeleset, hampir tertimpa benda, atau hampir tersenggol alat berat tapi masih selamat? Itulah yang disebut Near Miss.",
                core: "Rekan-rekan, Near Miss atau 'Hampir Celaka' adalah peringatan gratis dari Tuhan sebelum kecelakaan nyata terjadi. Jangan dianggap sepele atau sekadar keberuntungan.<br><br>• <strong>Jangan Malu Lapor:</strong> Melaporkan Near Miss bukan berarti Anda salah, tapi Anda sedang menyelamatkan nyawa kawan Anda di masa depan.<br>• <strong>Analisa Bahaya:</strong> Jika Anda hampir tersandung kabel, lapor! Agar kabelnya bisa kita rapikan sebelum ada orang lain yang benar-benar jatuh dan patah tulang.<br>• <strong>Pelajaran Bersama:</strong> Kejadian yang Anda alami hari ini adalah pelajaran berharga bagi tim lain agar tidak mengalami hal yang sama.<br><br>Perintah saya: Tidak ada hukuman bagi yang melapor Near Miss. Justru saya akan berikan apresiasi karena Anda peduli pada keselamatan tim.",
                close: "Kecelakaan besar selalu didahului oleh banyak kejadian hampir celaka yang diabaikan. Jangan biarkan satu pun peringatan terlewat.<br><br>Mari kita berdoa sebagai rasa syukur kita masih diberikan keselamatan hingga hari ini, dan semoga hari esok tetap aman. Berdoa mulai... Selesai.<br><br><strong>Near Miss! (REPORT IT!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Selamat berakhir pekan dengan keluarga, pulanglah dalam keadaan sehat dan utuh!"
            }
        }
    },
    "W2": {
        title: "Prosedur & Teknis Lapangan",
        days: {
            "Senin": {
                topic: "Izin Kerja Aman (Permit to Work)",
                open: "Assalamualaikum! Semangat pagi rekan-rekan di minggu kedua ini!<br><br>Sebelum alat dinyalakan dan material dipindah, saya ingin bertanya: Apakah 'SIM' kalian untuk bekerja hari ini sudah siap? Tanpa Izin Kerja, tidak ada aktivitas di lapangan.",
                core: "Rekan-rekan, Izin Kerja Aman atau PTW bukan sekadar formalitas kertas. Ini adalah bukti bahwa kita sudah mengidentifikasi bahaya dan menyiapkan langkah pencegahannya.<br><br>• <strong>Kesesuaian Lokasi:</strong> Pastikan izin kerja sesuai dengan lokasi dan jenis pekerjaan yang dilakukan. Jangan gunakan izin 'Kerja Dingin' untuk 'Kerja Panas'.<br>• <strong>Validitas Waktu:</strong> Cek masa berlaku izin. Jika shift sudah berganti atau pekerjaan tertunda lama, izin harus divalidasi ulang.<br>• <strong>Pemeriksaan Lapangan:</strong> Izin kerja hanya sah jika pengawas sudah mengecek langsung kondisi lapangan, bukan sekadar tanda tangan di atas meja.<br>• <strong>Alat Proteksi:</strong> Pastikan semua syarat yang tertulis di dalam izin (seperti APAR, barikade, atau gas detector) sudah tersedia dan berfungsi.<br><br>Perintah saya: Siapa pun yang memulai pekerjaan risiko tinggi tanpa mengantongi izin sah, akan saya hentikan pekerjaannya seketika demi keselamatan kalian.",
                close: "Lebih baik kita menunda pekerjaan 10 menit untuk mengurus izin, daripada kita kehilangan nyawa selamanya karena kecerobohan.<br><br>Mari kita berdoa agar sistem pengamanan kita hari ini berjalan sempurna dan kita semua dilindungi. Berdoa mulai... Selesai.<br><br><strong>Permit to Work! (APPROVED!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Patuhi prosedur, selamatkan nyawa. Silakan mulai beraktivitas!"
            },
            "Selasa": {
                topic: "Bekerja di Ketinggian (Working at Height)",
                open: "Selamat pagi rekan-rekan! Hari ini kita akan bekerja melawan gravitasi.<br><br>Ingat, gravitasi tidak pernah libur dan tidak pernah memaafkan kesalahan. Satu langkah salah di ketinggian bisa berakibat fatal seumur hidup.",
                core: "Rekan-rekan, bekerja di atas 1.8 meter wajib menggunakan alat pelindung jatuh yang standar. Jangan pernah merasa 'sudah biasa' lalu meremehkan ketinggian.<br><br>• <strong>Full Body Harness:</strong> Gunakan harness lengkap, bukan hanya sabuk pinggang. Pastikan kedua hook (kait) terpasang pada titik tambat (anchorage) yang kuat.<br>• <strong>100% Tie-Off:</strong> Terapkan prinsip satu kait terpasang saat kait lainnya berpindah. Jangan pernah membiarkan diri tanpa pengaman saat di atas.<br>• <strong>Pengecekan Alat:</strong> Cek jahitan harness dan masa kadaluwarsa webbing. Jika ada yang rontok atau sobek, segera lapor untuk diganti.<br>• <strong>Barikade Bawah:</strong> Pastikan area di bawah pekerjaan ketinggian dipasang barikade dan tanda bahaya agar tidak ada rekan yang tertimpa material jatuh.<br><br>Perintah saya: Jika Anda merasa pusing atau kondisi cuaca mulai hujan/angin kencang, segera turun. Keselamatan nyawa Anda lebih utama dari target progres.",
                close: "Keluarga Anda menanti di rumah untuk melihat Anda berjalan masuk lewat pintu depan, bukan diantar dengan mobil ambulans.<br><br>Mari kita berdoa agar kita selalu diberikan keseimbangan dan perlindungan selama bekerja di ketinggian. Berdoa mulai... Selesai.<br><br><strong>Working at Height! (HOOK ON!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Tetap waspada, perhatikan pijakan Anda, dan selamat bekerja!"
            },
            "Rabu": {
                topic: "Bahaya Listrik (Electrical Safety)",
                open: "Semangat pagi rekan-rekan! Hari ini kita bicara tentang bahaya yang tidak terlihat, tidak berbau, tapi bisa menghentikan detak jantung dalam sekejap: Listrik.<br><br>Jangan biarkan kelalaian kecil pada kabel membuat Anda menjadi jalur aliran arus listrik hari ini.",
                core: "Rekan-rekan, listrik hanya aman jika kita mengikuti jalurnya dan menghormati kekuatannya. Mari perhatikan poin keselamatan berikut:<br><br>• <strong>Kondisi Kabel:</strong> Pastikan kabel tidak ada yang terkelupas atau disambung dengan isolasi seadanya. Kabel yang terbuka adalah ancaman nyawa.<br>• <strong>Stop Kontak & Beban:</strong> Jangan menumpuk steker pada satu stop kontak (overload). Panas berlebih bisa memicu percikan api dan kebakaran.<br>• <strong>Tangan Basah:</strong> Jangan pernah menyentuh panel atau saklar dengan tangan basah. Air adalah konduktor listrik yang sangat baik.<br>• <strong>Grounding & LOTO:</strong> Pastikan peralatan memiliki grounding. Jika sedang perbaikan, wajib pasang LOTO agar tidak ada orang lain yang menyalakan arus secara tidak sengaja.<br><br>Perintah saya: Jika kalian melihat percikan api atau mencium bau kabel terbakar, segera matikan power utama dan lapor kepada tim teknis. Jangan mencoba memperbaiki sendiri jika bukan ahlinya.",
                close: "Listrik tidak memberikan kesempatan kedua. Satu kesalahan bisa berakibat fatal bagi Anda dan rekan di sekitar.<br><br>Mari kita berdoa agar seluruh instalasi dan alat yang kita gunakan hari ini tetap aman terkendali. Berdoa mulai... Selesai.<br><br><strong>Electrical Safety! (INSULATED!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Waspada arus listrik, perhatikan kabel Anda, dan selamat bekerja!"
            },
            "Kamis": {
                topic: "Kebakaran & Penggunaan APAR",
                open: "Selamat pagi rekan-rekan! Api bisa menjadi kawan, tapi dalam sekejap bisa menjadi lawan yang menghancurkan segalanya.<br><br>Apakah kalian tahu di mana posisi APAR terdekat dari tempat kalian bekerja sekarang? Jika terjadi api kecil, apakah kalian siap bertindak?",
                core: "Rekan-rekan, kesiapsiagaan kita terhadap api adalah kunci agar tempat kerja kita tidak hangus terbakar. Jika melihat api kecil, segera gunakan APAR dengan teknik <strong>PASS</strong>:<br><br>• <strong>P (Pull):</strong> Tarik pin pengaman APAR. Jangan panik, pastikan segel terlepas.<br>• <strong>A (Aim):</strong> Arahkan corong atau selang ke pangkal api, bukan ke pucuk apinya.<br>• <strong>S (Squeeze):</strong> Tekan tuas atau pemicu untuk mengeluarkan media pemadam.<br>• <strong>S (Sweep):</strong> Sapukan secara merata dari sisi ke sisi sampai api benar-benar padam.<br><br>Perintah saya: Perhatikan arah angin! Selalu membelakangi angin saat memadamkan api agar api tidak menyambar balik ke arah Anda. Jika api sudah terlalu besar, segera tinggalkan area dan lapor tim pemadam.",
                close: "Hanya butuh hitungan menit bagi api untuk melahap seluruh aset dan membahayakan nyawa kita. Jangan anggap remeh satu percikan pun.<br><br>Mari kita berdoa agar hari ini kita dijauhkan dari bahaya kebakaran dan bencana apa pun. Berdoa mulai... Selesai.<br><br><strong>Fire Safety! (READY TO FIGHT!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Waspada percikan api, pastikan jalur evakuasi aman, dan selamat bekerja!"
            },
            "Jumat": {
                topic: "Komunikasi Keselamatan (Safety Communication)",
                open: "Semangat pagi rekan-rekan semua! Di hari terakhir minggu kedua ini, saya ingin menekankan satu hal: Keselamatan bukan tugas saya sendiri, tapi tugas kita semua.<br><br>Apakah kalian berani menegur rekan kerja, atau bahkan menegur saya, jika melihat ada tindakan yang tidak aman?",
                core: "Rekan-rekan, komunikasi yang buruk di lapangan adalah awal dari kecelakaan. Satu instruksi yang salah dengar bisa berakibat fatal. Mari kita perbaiki cara kita berkomunikasi:<br><br>• <strong>Gunakan Kontak Mata:</strong> Saat memberi instruksi, terutama kepada operator alat berat atau crane, pastikan ada kontak mata dan tanda yang jelas.<br>• <strong>Tegur dengan Sopan:</strong> Jika melihat kawan lupa mengikat tali dagu helm atau tidak pakai harness, segera tegur. Jangan mendiamkan bahaya karena 'sungkan' atau tidak enak hati.<br>• <strong>Metode Re-Confirm:</strong> Jika menerima instruksi melalui radio atau di area bising, ulangi kembali perintah tersebut untuk memastikan Anda tidak salah tangkap.<br>• <strong>Lapor Kondisi Bahaya:</strong> Jangan simpan bahaya di dalam hati. Jika ada lantai yang licin atau kabel terkelupas, sampaikan agar semua orang tahu dan waspada.<br><br>Perintah saya: Tidak ada istilah 'junior' atau 'senior' dalam keselamatan. Siapa pun berhak menghentikan pekerjaan jika melihat ada potensi bahaya nyata.",
                close: "Satu teguran tulus dari Anda hari ini bisa menyelamatkan nyawa kawan Anda untuk selamanya. Jangan biarkan kawan kita pulang dalam peti jenazah hanya karena kita diam.<br><br>Mari kita berdoa sebagai rasa syukur kita masih utuh hingga akhir pekan ini. Berdoa mulai... Selesai.<br><br><strong>Safety Communication! (SPEAK UP!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Terima kasih atas kerja kerasnya minggu ini, salam untuk keluarga di rumah, dan selamat beristirahat!"
            },
            "Sabtu": {
                topic: "Pemeriksaan Unit & Kendaraan (P2H)",
                open: "Semangat pagi rekan-rekan! Sebelum kita menutup minggu ini dengan operasional penuh, mari kita pastikan kendaraan dan unit alat berat kita dalam kondisi sehat.<br><br>Jangan paksa unit yang 'sakit' untuk bekerja, karena nyawa Anda taruhannya di balik kemudi.",
                core: "Rekan-rekan, pemeriksaan harian (P2H) bukan sekadar mengisi form di atas kertas, tapi memastikan fungsi mekanis berjalan normal demi keselamatan.<br><br>• <strong>Sistem Pengereman & Ban:</strong> Cek tekanan angin dan ketebalan ban. Pastikan rem berfungsi 100%, jangan ada istilah 'rem blong' di lapangan kita.<br>• <strong>Kebocoran Cairan:</strong> Periksa di bawah unit, apakah ada ceceran oli, air radiator, atau minyak rem. Kebocoran oli bisa menyebabkan slip atau kebakaran.<br>• <strong>Sistem Kelistrikan & Lampu:</strong> Pastikan lampu sen, lampu utama, dan alarm mundur (back alarm) berfungsi dengan nyaring agar rekan di sekitar tetap waspada.<br>• <strong>Kebersihan Kabin:</strong> Jangan biarkan ada botol bekas atau benda lepas di lantai kabin yang bisa mengganjal pedal rem atau kopling.<br><br>Perintah saya: Jika ditemukan kerusakan pada sistem vital (Rem, Kemudi, Lampu), unit wajib <strong>BREAKDOWN</strong> atau diberi label 'DO NOT OPERATE' sampai diperbaiki.",
                close: "Ingat, Anda adalah pengendali mesin besar ini. Kendalikan dengan penuh tanggung jawab agar Anda bisa pulang menemui keluarga dengan selamat.<br><br>Mari kita berdoa agar seluruh unit operasional kita hari ini berjalan lancar tanpa kendala teknis. Berdoa mulai... Selesai.<br><br><strong>Vehicle Check! (READY TO DRIVE!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Selamat berakhir pekan, tetap waspada saat berkendara, dan selamat bekerja!"
            }
        }
    },
    "W3": {
        title: "Fokus pada Lingkungan & Alat Spesifik",
        days: {
            "Senin": {
                topic: "Penguncian Energi (Lock Out Tag Out - LOTO)",
                open: "Assalamualaikum! Semangat pagi rekan-rekan di awal minggu ketiga!<br><br>Hari ini kita bicara tentang nyawa kedua saat melakukan perbaikan mesin. Pernahkah kalian membayangkan mesin tiba-tiba menyala saat tangan kalian masih di dalam? Itulah gunanya LOTO.",
                core: "Rekan-rekan, LOTO adalah prosedur wajib untuk memastikan energi (listrik, mekanik, hidrolik, atau gas) sudah benar-benar mati dan terkunci selama pekerjaan berlangsung.<br><br>• <strong>Lock Out (Gembok):</strong> Pasang gembok pada titik isolasi energi. Hanya orang yang mengerjakan yang boleh memegang kuncinya.<br>• <strong>Tag Out (Label):</strong> Pasang label bahaya yang berisi nama, departemen, dan jenis pekerjaan. Ini adalah tanda peringatan bagi orang lain: JANGAN DINYALAKAN!<br>• <strong>Uji Energi Nol (Verification):</strong> Setelah dikunci, coba nyalakan mesin untuk memastikan tidak ada sisa energi yang tertinggal dalam sistem.<br>• <strong>Satu Orang Satu Gembok:</strong> Jika ada tiga orang yang bekerja di mesin tersebut, maka harus ada tiga gembok yang terpasang.<br><br>Perintah saya: Jangan pernah meminjamkan kunci gembok LOTO Anda kepada siapa pun, dan jangan pernah melepas gembok milik rekan kerja tanpa izin resmi.",
                close: "Gembok ini kecil, tapi ia adalah penjaga nyawa Anda saat bekerja di area berbahaya. Jangan ambil risiko demi kecepatan pekerjaan.<br><br>Mari kita berdoa agar prosedur penguncian energi kita hari ini berjalan disiplin dan aman. Berdoa mulai... Selesai.<br><br><strong>LOTO! (LOCK IT, TAG IT!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Pastikan energi nol sebelum bekerja, dan selamat beraktivitas!"
            },
            "Selasa": {
                topic: "Bekerja di Cuaca Ekstrem (Panas & Hujan)",
                open: "Semangat pagi rekan-rekan! Cuaca di lapangan sering tidak menentu, terkadang panas menyengat, terkadang hujan badai.<br><br>Tubuh kita punya batasan. Jangan paksa bekerja melampaui kemampuan fisik Anda saat cuaca tidak mendukung.",
                core: "Rekan-rekan, cuaca ekstrem bisa memicu kelelahan hebat hingga kecelakaan kerja. Mari waspadai hal berikut:<br><br>• <strong>Cegah Heat Stress:</strong> Saat panas terik, pastikan minum air putih lebih sering. Jangan tunggu haus, karena dehidrasi bisa membuat Anda pusing dan hilang fokus.<br>• <strong>Waspada Hujan & Petir:</strong> Jika hujan mulai lebat atau terdengar petir, segera hentikan pekerjaan di ketinggian atau di area terbuka. Petir adalah ancaman nyata.<br>• <strong>Permukaan Licin:</strong> Setelah hujan, waspadai lantai kerja dan tangga yang licin. Pastikan langkah kaki Anda mantap dan gunakan pegangan tangan.<br><br>Perintah saya: Jika Anda merasa gejala pusing atau kram karena panas, segera lapor dan beristirahat di tempat teduh. Kesehatan Anda adalah prioritas.",
                close: "Alam tidak bisa kita kendalikan, tapi perlindungan diri bisa kita siapkan. Mari tetap waspada terhadap perubahan cuaca.<br><br>Mari berdoa agar hari ini kita senantiasa diberikan kekuatan dan cuaca yang mendukung. Berdoa mulai... Selesai.<br><br><strong>Climate Safety! (STAY HYDRATED!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Tetap waspada dan selamat bekerja!"
            },
            "Rabu": {
                topic: "Bahaya Kebisingan (Noise Hazard)",
                open: "Selamat pagi! Hari ini kita akan membahas bahaya yang tidak terlihat, tapi bisa mencuri pendengaran Anda secara perlahan.<br><br>Banyak yang tidak sadar telinganya rusak sampai semuanya sudah terlambat. Mari kita jaga pendengaran kita hari ini.",
                core: "Rekan-rekan, paparan bising di atas 85 desibel dalam waktu lama akan merusak saraf telinga secara permanen. Pendengaran yang hilang tidak bisa kembali.<br><br>• <strong>Earplug/Earmuff:</strong> Wajib gunakan pelindung telinga jika bekerja di dekat mesin, generator, atau aktivitas blasting/gerinda.<br>• <strong>Komunikasi Terbatas:</strong> Sadari bahwa di area bising, Anda mungkin tidak mendengar teriakan peringatan atau alarm. Gunakan isyarat tangan yang jelas.<br>• <strong>Batas Paparan:</strong> Jangan berada di area bising terlalu lama tanpa jeda. Berikan waktu bagi telinga Anda untuk beristirahat di area yang tenang.<br><br>Perintah saya: Jangan pernah melepas earplug di area bising hanya karena merasa tidak nyaman. Ketidaknyamanan itu jauh lebih baik daripada kehilangan pendengaran selamanya.",
                close: "Ingat, suara tawa keluarga di rumah adalah suara terindah yang harus tetap bisa Anda dengar sampai masa tua nanti.<br><br>Mari kita berdoa agar hari ini kita bekerja dengan aman dan sehat. Berdoa mulai... Selesai.<br><br><strong>Hearing Safety! (PROTECT YOUR EARS!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Gunakan APD Anda dan selamat bekerja!"
            },
            "Kamis": {
                topic: "Jalur Pejalan Kaki & Alat Berat (Pedestrian Safety)",
                open: "Selamat pagi rekan-rekan! Di area kerja kita, alat berat dan manusia bergerak di ruang yang sama.<br><br>Ingat, dalam benturan antara tubuh manusia dan besi alat berat, manusia tidak akan pernah menang. Mari jaga jarak aman.",
                core: "Rekan-rekan, area operasi alat berat adalah zona bahaya tinggi. Blind spot (titik buta) operator sangatlah luas.<br><br>• <strong>Gunakan Jalur Hijau:</strong> Selalu berjalan di jalur pedestrian yang sudah ditentukan. Jangan memotong jalan di jalur lintas alat berat.<br>• <strong>Kontak Mata:</strong> Jangan pernah melintas di depan atau di belakang alat berat sebelum Anda melakukan kontak mata dan mendapat kode aman dari operator.<br>• <strong>Dilarang Bermain HP:</strong> Jangan berjalan sambil melihat HP! Fokus mata dan telinga Anda harus 100% pada lingkungan sekitar.<br><br>Perintah saya: Siapa pun yang melanggar jalur merah atau area terbatas akan saya beri teguran keras. Jangan ambil risiko demi jalan pintas.",
                close: "Alat berat tidak bisa berhenti mendadak seperti mobil pribadi. Tetaplah berada di zona aman agar Anda tetap selamat.<br><br>Mari kita berdoa agar koordinasi antara kru dan operator hari ini berjalan lancar. Berdoa mulai... Selesai.<br><br><strong>Pedestrian Safety! (WATCH YOUR STEP!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Waspada sekitar Anda dan selamat bekerja!"
            },
            "Jumat": {
                topic: "Pencegahan Polusi & Limbah (Environment)",
                open: "Selamat pagi! Hari ini kita bicara tentang tanggung jawab kita pada bumi dan tempat kita mencari nafkah.<br><br>Lingkungan yang tercemar akan menjadi sumber penyakit bagi kita sendiri dan anak cucu kita nantinya.",
                core: "Rekan-rekan, menjaga kebersihan lingkungan adalah bagian dari profesionalisme kerja kita di lapangan.<br><br>• <strong>Ceceran Oli & Kimia:</strong> Jika ada tumpahan oli, segera tutup dengan serbuk gergaji atau pasir. Jangan biarkan mengalir ke parit atau laut.<br>• <strong>Pemisahan Sampah:</strong> Buang sampah sesuai jenisnya. Limbah B3 (seperti bekas oli, baterai, majun terkontaminasi) jangan dicampur dengan sampah umum.<br>• <strong>Hemat Energi:</strong> Matikan mesin dan peralatan jika tidak digunakan. Kurangi emisi gas buang yang tidak perlu.<br><br>Perintah saya: Setiap tumpahan bahan kimia harus dilaporkan segera agar bisa kita lakukan penanganan darurat (spill kit). Jangan mencoba menyembunyikan pencemaran.",
                close: "Kerja aman bukan hanya tentang selamat dari kecelakaan, tapi juga selamat dari penyakit akibat lingkungan yang kotor.<br><br>Mari kita berdoa agar hari ini kita diberikan kelancaran dalam bekerja dan menjaga alam. Berdoa mulai... Selesai.<br><br><strong>Green Safety! (PROTECT OUR EARTH!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Bersihkan area kerja Anda dan selamat bekerja!"
            },
            "Sabtu": {
                topic: "Evaluasi Mingguan & Near Miss",
                open: "Semangat pagi rekan-rekan! Kita sudah sampai di penghujung minggu ketiga.<br><br>Mari kita evaluasi: Selama seminggu ini, adakah kejadian hampir celaka yang kita alami namun kita diamkan?",
                core: "Rekan-rekan, mengevaluasi Near Miss adalah cara paling cerdas untuk mencegah kecelakaan di minggu depan.<br><br>• <strong>Belajar dari Nyaris:</strong> Jika kemarin Anda hampir tersandung kabel, hari ini kabel itu harus sudah rapi. Jangan tunggu ada korban baru bertindak.<br>• <strong>Budaya Saling Ingatkan:</strong> Evaluasi perilaku kita. Apakah kita masih sering malas memakai masker atau harness? Mari perbaiki di minggu depan.<br>• <strong>Apresiasi Laporan:</strong> Terima kasih kepada rekan-rekan yang sudah berani melapor kondisi tidak aman selama minggu ini. Anda adalah pahlawan keselamatan tim.<br><br>Perintah saya: Tulis atau laporkan setiap temuan bahaya yang kalian lihat hari ini sebelum pulang, agar hari Senin kita mulai dengan area yang lebih aman.",
                close: "Mari kita akhiri minggu ini dengan kebanggaan bahwa kita semua pulang dalam keadaan sehat dan lengkap tanpa kurang satu apapun.<br><br>Mari kita mengucap syukur kepada Tuhan atas perlindungan-Nya selama seminggu ini. Berdoa mulai... Selesai.<br><br><strong>Near Miss! (EVALUATE & ACTION!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Selamat berakhir pekan dan salam untuk keluarga di rumah!"
            }
        }
    },
    "W4": {
        title: "Fokus pada Perilaku & Kesiagaan Darurat",
        days: {
            "Senin": {
                topic: "Sikap Kerja Selamat (Safety Behavior)",
                open: "Assalamualaikum! Semangat pagi rekan-rekan di minggu terakhir bulan ini!<br><br>Hari ini kita tidak bicara soal mesin atau alat, kita bicara soal apa yang ada di dalam pikiran kita saat bekerja. Apakah keselamatan sudah jadi karakter Anda?",
                core: "Rekan-rekan, 80% kecelakaan kerja disebabkan oleh faktor manusia atau perilaku tidak aman. Mari kita koreksi sikap kita:<br><br>• <strong>Hindari Jalan Pintas:</strong> Jangan ambil risiko hanya demi cepat selesai. Prosedur dibuat bukan untuk memperlambat, tapi untuk memastikan Anda pulang dengan selamat.<br>• <strong>Saling Mengingatkan:</strong> Jadilah 'Safety Officer' bagi rekan di sebelah Anda. Jika melihat kawan berbuat salah, tegur dengan sopan. Itu tanda Anda peduli.<br>• <strong>Konsisten:</strong> Tetap disiplin pakai APD meskipun sedang tidak diawasi pengawas. Keselamatan adalah untuk Anda, bukan untuk saya.<br><br>Perintah saya: Tunjukkan bahwa kita adalah pekerja profesional dengan selalu mengikuti SOP di setiap langkah kerja kita.",
                close: "Keselamatan adalah cerminan harga diri seorang pekerja. Mari tunjukkan perilaku kerja yang berkelas dan aman.<br><br>Mari berdoa agar hari ini perilaku kita selalu terjaga dari kelalaian. Berdoa mulai... Selesai.<br><br><strong>Safety Behavior! (START WITH ME!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Selamat bekerja dengan integritas!"
            },
            "Selasa": {
                topic: "Tanggap Darurat (Emergency Response)",
                open: "Selamat pagi rekan-rekan! Musibah bisa terjadi kapan saja tanpa pemberitahuan.<br><br>Saat alarm darurat berbunyi, apakah kalian sudah tahu harus lari ke mana? Jangan sampai kepanikan justru mencelakai Anda.",
                core: "Rekan-rekan, dalam kondisi darurat, waktu adalah nyawa. Setiap dari kita harus paham prosedur dasar penyelamatan:<br><br>• <strong>Jalur Evakuasi:</strong> Hafalkan jalur evakuasi di area kerja Anda. Pastikan jalur tersebut bersih dari tumpukan barang atau material.<br>• <strong>Titik Kumpul (Assembly Point):</strong> Jika mendengar alarm, segera tinggalkan pekerjaan, matikan mesin (jika aman), dan berjalan cepat menuju titik kumpul.<br>• <strong>Lapor Personel:</strong> Saat di titik kumpul, segera melapor ke pengawas agar dilakukan penghitungan jumlah kru. Jangan kembali ke area kerja sebelum ada instruksi aman.<br><br>Perintah saya: Jika melihat kondisi darurat (kebakaran/kecelakaan besar), segera teriak 'Emergency!' atau tekan tombol alarm. Jangan mencoba menjadi pahlawan sendirian jika tidak mampu.",
                close: "Kesiapsiagaan kita hari ini adalah jaminan keselamatan kita di masa sulit. Mari tetap waspada.<br><br>Mari berdoa agar kita selalu dijauhkan dari marabahaya, namun tetap siap menghadapinya. Berdoa mulai... Selesai.<br><br><strong>Emergency Ready! (STAY CALM!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Tetap waspada dan perhatikan rambu evakuasi!"
            },
            "Rabu": {
                topic: "Ergonomi: Bahaya Posisi Tubuh Statis",
                open: "Semangat pagi! Hari ini kita bahas bahaya dari 'diam'.<br><br>Banyak dari kita yang harus berdiri lama atau duduk lama saat bekerja. Tahukah Anda bahwa posisi statis yang terlalu lama juga bisa merusak otot dan saraf?",
                core: "Rekan-rekan, tubuh kita diciptakan untuk bergerak. Berada dalam satu posisi terlalu lama bisa menghambat aliran darah dan menyebabkan kekakuan otot.<br><br>• <strong>Lakukan Peregangan:</strong> Setiap 1-2 jam, lakukan peregangan ringan selama 5 menit. Gerakkan leher, bahu, dan pergelangan tangan.<br>• <strong>Variasi Posisi:</strong> Jika pekerjaan Anda menuntut berdiri lama, usahakan sesekali menggeser beban tumpuan kaki atau berjalan kecil di area sekitar.<br>• <strong>Postur Tegak:</strong> Jangan membungkuk saat bekerja. Jaga punggung tetap tegak agar tulang belakang tidak terbebani secara berlebihan.<br><br>Perintah saya: Manfaatkan waktu istirahat untuk benar-benar merelaksasi otot, bukan hanya duduk sambil bermain HP dengan posisi leher menekuk.",
                close: "Jaga kesehatan fisik Anda, karena tubuh yang sehat adalah modal utama untuk mencari nafkah bagi keluarga.<br><br>Mari berdoa agar otot dan sendi kita selalu kuat dan sehat dalam bekerja. Berdoa mulai... Selesai.<br><br><strong>Ergonomic! (MOVE & STRETCH!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Jangan lupa regangkan badan, dan selamat bekerja!"
            },
            "Kamis": {
                topic: "Penanganan Barang Tajam & Panas",
                open: "Selamat pagi! Di lingkungan kita, besi tajam dan suhu panas adalah makanan sehari-hari.<br><br>Ingat, kulit kita sangat tipis dibandingkan material yang kita kerjakan. Jangan biarkan luka gores atau luka bakar merusak hari Anda.",
                core: "Rekan-rekan, bekerja dengan material tajam dan panas memerlukan fokus tinggi dan perlindungan ekstra:<br><br>• <strong>Sarung Tangan Sesuai:</strong> Gunakan sarung tangan kulit atau anti-cut saat memegang plat besi tajam. Jangan gunakan tangan telanjang.<br>• <strong>Bahaya Luka Bakar:</strong> Saat menangani alat panas (seperti bekas pengelasan atau gas cutting), pastikan material sudah dingin atau gunakan alat penjepit.<br>• <strong>Kerapihan Material:</strong> Jangan tinggalkan sisa potongan besi (scrap) berserakan di lantai. Bagian tajamnya bisa melukai kaki kawan kita.<br><br>Perintah saya: Jika Anda terluka, sekecil apa pun, segera lapor dan bersihkan luka di kotak P3K. Jangan didiamkan sampai infeksi.",
                close: "Hargai keselamatan anggota tubuh Anda. Luka kecil yang diabaikan bisa menjadi masalah besar di kemudian hari.<br><br>Mari berdoa agar tangan dan kaki kita selalu terlindungi dari segala cedera. Berdoa mulai... Selesai.<br><br><strong>Hand Safety! (HANDLE WITH CARE!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Gunakan sarung tangan Anda dan tetap fokus!"
            },
            "Jumat": {
                topic: "Mental Health & Konsentrasi Kerja",
                open: "Selamat pagi rekan-rekan! Kerja aman bukan cuma soal fisik, tapi juga soal pikiran.<br><br>Apakah ada di sini yang sedang banyak pikiran atau kurang tidur? Pikiran yang kosong adalah awal dari kecelakaan kerja.",
                core: "Rekan-rekan, kecelakaan sering terjadi saat badan ada di sini, tapi pikiran melayang ke tempat lain. Mari kita jaga kesehatan mental kita:<br><br>• <strong>Istirahat Cukup:</strong> Kurang tidur menurunkan tingkat reaksi Anda sebanding dengan orang mabuk. Pastikan Anda cukup istirahat sebelum berangkat kerja.<br>• <strong>Kelola Stres:</strong> Jika ada masalah pribadi, coba tenangkan diri sejenak sebelum mulai bekerja dengan risiko tinggi. Jangan bawa emosi ke dalam operasional alat berat.<br>• <strong>Fokus Penuh:</strong> Saat bekerja, lupakan sejenak urusan di luar. Konsentrasi Anda adalah pelindung nyawa Anda dan kawan di sebelah Anda.<br><br>Perintah saya: Jika Anda merasa sangat tidak fokus atau merasa sakit secara mental/fisik, bicarakan dengan saya. Kita cari solusinya bersama sebelum terjadi hal yang tidak diinginkan.",
                close: "Pulanglah ke rumah dengan pikiran yang tenang dan tubuh yang sehat. Kebahagiaan keluarga dimulai dari kesehatan Anda.<br><br>Mari berdoa agar kita diberikan ketenangan hati dan konsentrasi tinggi hari ini. Berdoa mulai... Selesai.<br><br><strong>Mental Health! (STAY FOCUSED!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Tenangkan pikiran, fokuskan mata, dan selamat bekerja!"
            },
            "Sabtu": {
                topic: "Penutupan Bulan & Komitmen Selamat",
                open: "Semangat pagi rekan-rekan semua! Kita sudah berada di penghujung bulan.<br><br>Terima kasih atas kerja keras dan kedisiplinan kalian selama sebulan ini. Kita berhasil melewati tantangan demi tantangan dengan selamat.",
                core: "Rekan-rekan, keselamatan bukan kampanye sebulan sekali, tapi komitmen seumur hidup. Mari kita perbarui janji kita:<br><br>• <strong>Evaluasi Mandiri:</strong> Apa yang sudah kita lakukan dengan baik bulan ini? Dan apa yang masih perlu kita perbaiki di bulan depan?<br>• <strong>Pertahankan Budaya:</strong> Jangan kendurkan pengawasan. Jika bulan ini kita nihil kecelakaan (Zero Accident), mari kita targetkan hal yang sama di bulan-bulan berikutnya.<br>• <strong>Komitmen Bersama:</strong> Keselamatan adalah warisan terbaik yang bisa kita berikan untuk keluarga kita di rumah.<br><br>Perintah saya: Sebelum pulang hari ini, pastikan area kerja benar-benar bersih dan mesin sudah mati sempurna. Mari kita tutup bulan ini dengan rasa bangga sebagai pekerja yang aman.",
                close: "Selamat berakhir pekan rekan-rekan. Terima kasih telah menjaga diri dan menjaga kawan. Sampai jumpa di bulan depan dengan semangat baru!<br><br>Mari mengucap syukur atas perlindungan Tuhan selama satu bulan penuh ini. Berdoa mulai... Selesai.<br><br><strong>End of Month! (ZERO ACCIDENT!)</strong><br><strong>Safety! (YES!)</strong><br><strong>Kecelakaan! (NO!)</strong><br><br>Selamat berakhir pekan dan salam untuk keluarga tercinta!"
            }
        }
    }
};

// --- LOGIKA APLIKASI ---

document.addEventListener("DOMContentLoaded", () => {
    buildMenu();
    if(localStorage.getItem("isAuth") === "true") showApp();
    
    const trigger = document.getElementById("menu-trigger");
    if(trigger) {
        trigger.onclick = (e) => {
            e.stopPropagation();
            document.getElementById("menu-list").classList.toggle("show");
        };
    }
    
    window.onclick = () => {
        const list = document.getElementById("menu-list");
        if(list) list.classList.remove("show");
    };
});

function buildMenu() {
    const list = document.getElementById("menu-list");
    if(!list) return;

    let html = `
        <a href="javascript:void(0)" class="m-item item-home" onclick="showDashboard()">
            <i class="fas fa-house-chimney"></i> BERANDA
        </a>
    `;

    for (let w in tbmData) {
        html += `<div class="m-title">MINGGU ${w.replace('W','')}</div>`;
        const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        days.forEach(day => {
            if(tbmData[w].days[day]) {
                html += `<a href="#" class="m-item" onclick="renderContent('${w}','${day}')">${day}</a>`;
            }
        });
    }
    list.innerHTML = html;
}

// Fungsi Beranda dengan Landasan Hukum AK3U Lengkap
function showDashboard() {
    const label = document.getElementById("label-jadwal");
    const area = document.getElementById("content-area");

    if(label) label.innerText = "Dashboard Utama";
    
    if(area) {
        area.innerHTML = `
            <section class="dashboard-hero animate-in">
                <div class="welcome-text">
                    <div class="badge-ak3u-main">
                        <i class="fas fa-certificate"></i> Verified Ahli K3 Umum
                    </div>
                    <h1>Selamat Pagi, <span>Safety Leader</span>!</h1>
                    <p>Monitoring kepatuhan dan materi Toolbox Meeting berdasarkan regulasi nasional.</p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <i class="fas fa-calendar-check"></i>
                        <div class="stat-info">
                            <h3>24 Hari</h3>
                            <p>Materi Standar SMK3</p>
                        </div>
                    </div>
                    <div class="stat-card accent-card">
                        <i class="fas fa-scale-balanced"></i>
                        <div class="stat-info">
                            <h3>AK3U</h3>
                            <p>Regulatory Compliance</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-heart-pulse"></i>
                        <div class="stat-info">
                            <h3>Zero</h3>
                            <p>Accident Goal</p>
                        </div>
                    </div>
                </div>

                <div class="law-reference-card">
                    <div class="law-header">
                        <i class="fas fa-book-bookmark"></i>
                        <h4>Landasan Hukum & Kepatuhan K3</h4>
                    </div>
                    
                    <div class="law-detail-grid">
                        <div class="law-category">
                            <div class="category-title">Pilar Utama (SMK3)</div>
                            <div class="law-item-detail">
                                <span class="law-tag">UU No. 1/1970</span>
                                <p>Keselamatan Kerja (Dasar Utama)</p>
                            </div>
                            <div class="law-item-detail">
                                <span class="law-tag">PP No. 50/2012</span>
                                <p>Penerapan Sistem Manajemen K3</p>
                            </div>
                            <div class="law-item-detail">
                                <span class="law-tag">UU No. 13/2003</span>
                                <p>Ketenagakerjaan (Pasal 86 & 87)</p>
                            </div>
                        </div>

                        <div class="law-category">
                            <div class="category-title">Norma Teknis & Lingkungan</div>
                            <div class="law-item-detail">
                                <span class="law-tag">Permenaker 5/2018</span>
                                <p>K3 Lingkungan Kerja (Fisika, Kimia, Ergonomi)</p>
                            </div>
                            <div class="law-item-detail">
                                <span class="law-tag">Permenaker 8/2020</span>
                                <p>K3 Pesawat Angkat & Angkut</p>
                            </div>
                            <div class="law-item-detail">
                                <span class="law-tag">Permenaker 9/2016</span>
                                <p>K3 Bekerja di Ketinggian (WAH)</p>
                            </div>
                        </div>

                        <div class="law-category">
                            <div class="category-title">Proteksi & Penunjang</div>
                            <div class="law-item-detail">
                                <span class="law-tag">Permenaker 12/2015</span>
                                <p>Keselamatan Listrik di Tempat Kerja</p>
                            </div>
                            <div class="law-item-detail">
                                <span class="law-tag">Kepmenaker 186/1999</span>
                                <p>Unit Penanggulangan Kebakaran</p>
                            </div>
                            <div class="law-item-detail">
                                <span class="law-tag">Permenaker 4/1987</span>
                                <p>Kelembagaan P2K3 & Ahli K3 Umum</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="alert-box">
                    <div class="alert-icon"><i class="fas fa-shield-halved"></i></div>
                    <div class="alert-text">
                        <strong>Kepatuhan Regulasi:</strong>
                        Seluruh materi Toolbox Meeting dalam sistem ini telah disesuaikan dengan kurikulum pembinaan **Ahli K3 Umum**.
                    </div>
                </div>

                <div class="promo-grid">
                    <div class="promo-item">
                        <i class="fas fa-file-signature"></i>
                        <h4>Audit Ready</h4>
                        <p>Memudahkan pelaporan SMK3 untuk kebutuhan audit.</p>
                    </div>
                    <div class="promo-item">
                        <i class="fas fa-ship"></i>
                        <h4>Shipyard Optimized</h4>
                        <p>Mencakup regulasi ruang terbatas dan hot work.</p>
                    </div>
                </div>
            </section>
        `;
    }
    document.getElementById("menu-list").classList.remove("show");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderContent(wKey, day) {
    const data = tbmData[wKey].days[day];
    const label = document.getElementById("label-jadwal");
    const area = document.getElementById("content-area");

    if(label) label.innerText = `M${wKey.replace('W','')} - ${day}`;
    
    if(area) {
        area.innerHTML = `
            <div class="card animate-in">
                <p style="color:var(--accent); font-weight:bold; margin-bottom:5px;">
                    MINGGU ${wKey.replace('W','')}: ${tbmData[wKey].title}
                </p>
                <h2 style="margin-top:0;">${day}: ${data.topic}</h2>
                <div class="box box-open">
                    <h4><i class="fas fa-comment"></i> Pembuka</h4>
                    <p>"${data.open}"</p>
                </div>
                <div class="box box-core">
                    <h4><i class="fas fa-exclamation-triangle"></i> Isi & Perintah</h4>
                    <p>${data.core}</p>
                </div>
                <div class="box box-close">
                    <h4><i class="fas fa-hands-praying"></i> Penutup</h4>
                    <p>${data.close}</p>
                </div>
            </div>
        `;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const loginForm = document.getElementById("login-form");
if(loginForm) {
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById("username").value;
        const p = document.getElementById("password").value;

        if(u === USER_AUTH.user && p === USER_AUTH.pass) {
            localStorage.setItem("isAuth", "true");
            showApp();
        } else {
            alert("Username atau Password Salah!");
        }
    };
}

function showApp() {
    const screen = document.getElementById("login-screen");
    const app = document.getElementById("main-app");
    if(screen) screen.classList.add("hidden");
    if(app) app.classList.remove("hidden");
}

function logout() {
    localStorage.removeItem("isAuth");
    location.reload();
}