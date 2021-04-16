exports.wait = () => {
	return`*「WAIT」YOUR COMMAND IS IN PROGRESS*`
}

exports.succes = () => {
	return`*「SUCCESS」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`* LEVEL kamu MASIH KOSONG*`
}

exports.baned = () => {
	return`*「❗」Sorry you've been banned!*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「BELUM DAFTAR」*\n\n*daftar dulu ya sayang, dengan cara ${prefix}daftar nama|ukamur*\n*contoh = ${prefix}daftar Iyan|15*`
}

exports.rediregis = () => {
	return`*「SUDAH DAFTAR」*\n\n*kamu sudah terdaftar di database yan-bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf sayang link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*yan-bot should be an admin first*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*masalah telah di laporkan ke owner yan-bot, laporan palsu/main² tidak akan ditanggapi!*`
}

exports.wrongf = () => {
	return`*maaf kamungkin format atau text salah*`
}

exports.clears = () => {
	return`*clear all success*`
}

exports.pc = () => {
	return`*「REGISTRASI」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang Iyan kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomor bot*`
}

exports.registered = (namaUser, ukamurUser, serialUser, time, sender) => {
	return`*「 DATA RAHASIA」*\n\nkamu sudah terdaftar dengan data \n\n┏━➤nama\n┗➤${namaUser}\n┏━➤nomor\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤ukamur\n┗➤${ukamurUser}\n┏━➤waktu pendaftaran\n┗➤${time}\n\n┏━❉ *code* ❉━\n┣⊱${serialUser}\n┗➤NOTE : jangan pernah lupakan code rahasianya, itu *penting!* ${prefix}rules sebelum menggunakan yan-bot`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「Info」*
┏𖥻ꦼꦽ➳ *Nama* : ${pushname}
┣𖥻ꦼꦽ➳ *Nomor* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf sayang ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 22:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「LIMIT USER」*
sisa limit anda : ${limitCounts}

🍻NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍻`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nama* : ${pushname}\n┣𖥻ꦼꦽ➳ *Nomor* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
