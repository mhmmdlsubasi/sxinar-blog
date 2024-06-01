---
title: "GSI nedir nasıl kurulur?"
date: 2024-06-01
tags: ["Custom Rom", "Android"]
#author: "Yazar"
draft: false
---

Merhaba` 

Bugün yazımda Custom rom derlenmeyen-destek almayan cihazlar için alternatif rom olan "**GSI**" nedir onu anlatacağım.

GSI nedir?
GSI'nın açılımı Generic System İmage olup Türkçe olarak Genel Sistem İmajı (Jenerik olarak da söylenebilir). Ayrıca Project Treble olarak geçer. AOSP ve diğer Custom ROM dağıtımlarının GSI ları bulunmakta. GSI bir rom değildir! Ve bunların bir listesi mevcut. Aşağıda vereceğim.

GSI kurmanın en büyük 2 sebebi;
 * Daha yüksek Android sürümü
 * Ve insanların kendi arayüzlerini beğenmemesi

GSI kurmanın eksileri;
 * Cihazın garantisi artık (var ise) sayılmaz. Zaten Bootloader kilidini açtığınız an sayılmaz.
 * Artık cihaz kendi yazılımını kullanmaz.
 * Düzgün çalışacağının garantisi yok.

**Asla unutmayın GSI deneyseldir.**
**Her GSI cihazınız ile tam uyumlu çalışmaz. Bunun asla garantisi yoktur. Sadece seçerken resmi derlemeleri seçmeye özen göstermelisiniz. Resmi olmayan derlemeleri seçerken ise tanınmış geliştiricilerin GSI larını tercih edin. Mesela AndyYan veya eremitein gibi kişilerin GSI romları**.

Peki hangi cihazlara kurabilirim?
GSI Android 8 ile tanıtılmıştır. Kutudan Android 8 ve üstü ile çıkan tüm cihazlarda kullanılabilir. Ama ama eski bir sürüm ile gelen cihazlarda yükseltme yapılır ise bu mümkün olabilir (düşük ihtimal).

Ama benim cihazım Android 8 ile gelmiyor...
Bazı kişilerin Android sürümleri 8 ile gelmeyebilir. Belki 6 veya 7 ile gelmiş olabilir. Ama sonradan 8 sürümüne yükseltmiş olabilir. Cihazın destekliyip desteklemediğini anlamak için ADB kabuğunda şu komutu çalıştırın;


```adb shell getprop ro.treble.enabled```
Eğer çıktı sonucu true ise cihaz Project Treble destekliyor demektir. Eğer false ise desteklemiyor demektir.
Komut çalışmadımı? adb shell ekini kaldırın ve öyle deneyin.
Veya Treble Info uygulamasını kurun. Aşağıda verdim.

Cihazım Project Treble destekliyor. Şimdi ne yapmalıyım?
Şimdi cihazının hangi GSI lar ile uyumlu olduğunu anlamakta. Kolayca anlamak için cihazınıza şu uygulamayı kurun; Treble Info - Apps on Google Play
Uygulamayı açtığınız gibi karşınıza uyumluluk bilgisi gelecektir. Ama bu terimlerin anlamını açıklayayım;
Ama iki örnek verelim; system-arm64-ab.img.xz ve system-arm32-binder64-A-Only.img.xz
2. Kelime sonrasında (tam sona kadar değil) cihazınızın mimarisi hakkında bilgi verir. Bunlar sadece şunlar olabilir;
 * arm64 - 64-bit mimari.
 * arm32 - 32-bit mimari

Bunlar ne yaaa?

 * arm32-binder64 - 64-bit bağlayıcı. 64-bit atayıcıları olup 32-bit işlemci kullananları içindir.
 * ab - A/B bölümlü cihazlar için. Cihazda bir tane bile A/B bölüm var ise cihaz A/B sayılır.
 * A-Only -A-Only bölümlü cihazlar için.
Gerisinin bir anlamı yok.
Ama gereksinim belirlemesi bunlar ile bitmiyor. Treble Info uygulamasında ayrıntılar kısmına gidin. System-as-root (SaR) durumunu kontrol edin. A/B cihazlarda enabled (açık), A-Only cihazlarda ise disabled (kapalı) olacaktır. Kontrol etmekte fayda var. Ayrıca dinamik bölümlü olup olmadığını kontrol edin. Android 10 ve üstü gelen cihazlar da enabled diğerlerinde ise disabled olacaktır. Bu yükleme yaparken önemli olacaktır.

Şimdi GSI seçimimizi yapalım;
Treble Info uygulamasındaki "İmajları Araştır" butonuna basarak veya şu bağlantıdan; Generic System Image (GSI) list
GSI listemize girelim. Buradan Treble Info uygulamasından aldığımız bilgilere göre GSI seçmeliyiz. Seçim size kalmış. Sayfayı ilk açtığınız zaman alt kısımda bulunan "Legacy GSIs" butonuna basarak diğer GSI lara bakabilirsiniz.
**NOT 1**: Bazı cihazlar VNDKLİTE kullanır. Bu normal VNDK'nın daha hafif bir varyantıdır. Uyumluluk vb den ödün verir. VNDKLİTE GSI imajları normal VNDK cihazlar ile çalışabilir. Bu Treble uygulamasında gösterilir. Dikkat ediniz.

**NOT 2**: Cihazların VNDK sürümü çok etkendir. Genelde V28 ve üstüne destek olur (9.0). Veya üstü. Ama ne ilginçtir ki bazen V29 (10) desteği olmuyor. Kaldırılıyor. V27 (8.1) sürümünde GSI çok zorludur. Çünkü eski ve destek verilmez. Çok yeni VNDK sürümleri ile de ilk başlarda sorunlar olabilir.

Ya bu yazılar ne anlama geliyor???
GSI seçtiniz ve indireceksiniz. Ama son kısımda bulunan üçlü harf diziliminden anlamadız (bvN gibi)
Bu harflerin anlamı var.
 * 1. Harf;
Hangi cihaz bölümleri uygun olduğu hakkında bilgi verilir.

    - a - Cihaz bölüm tibi A-Only olan cihazlar için.
    - b - Cihaz bölüm tipi A/B olan cihazlar için.

 * 3. Harf;
GApss kurulu olup olmadığı hakkında bilgi verir. Zaten 3 harf kombinasyonu dışında olan ad kısmında belirtilebilir.

    - v - Vanilla demek. Yani GApss yok. Ama bu kurulamayacağı anlamına gelmez.
    - g - GApss kurulu demek.
    - o - GApss kurulu demek. Ama Android Go uygulamaları.

 * 3. Harf;
GSI imajında ROOT olup olmadığı hakkında bilgi. Eğer ROOT lu bir imaj kurarasanız, cihaza ROOT erişimi vermiş olursunuz.
    - N - No Su. Yani ROOT yok.
    - S - Su. Yani ROOT var. PHH Super user ile. İnternetten uygulamasını kurarsanız yönetebilirsiniz. Ama PHH Super user pek güzel değil. Önermem.
    - Z - eremitein in dinamik süper kullanıcılısı. Bu root var demek. Ama daha önce test etmedim.

Bunlar bu kadardı. İmajı indirin **.XZ** arşivinde olacaktır. Ayıklayın. Ve çıkan imaj adını system.img olarak yeniden adlandırın. Ve boyutu not alın. Çünkü gerekli olacak.
**NOT**: Eğer GSI boyutu sistem bölüm boyutundan fazla ise Android 10 altı ile gelen cihazlarda yüklenemez! Ama 10 üstünde bu mümkün.

Sistem bölüm boyutunu nasıl kontrol ederim?

 * Cihazın Stock ROM unu indirin. ROM daki system bölüm boyutunu kontrol edin.
 * TWRP ile kontrol edin.
 * Sanırım bunun için bir ADB komutu vardı. Ama şuan hatırlamıyorum.

GSI kurulumu için gereksinimler;
 * Bilgisayar
 * Bilgisayarı olmayanlar Bugjaeger android uygulaması.
 * Bugjaeger kullanacaklar için OTG kablosu.
 * Bilgisayar kullanacaklar için Platform Tools ve USB sürücüleri.
 * Cihazın bootloader kilidi açık olmalı.

Cihazda yapılması gereken ufak bir ayar;
 * USB hata ayıklamayı açın. Ayrıca eğer komutları çalıştırırken Bugjaeger kullanacak ise niz komutları vereceğiniz cihazında USB hata ayıklaması aktifleştirilmelidir.

Artık kuruluma geçelim;
Hem Android 10 ve üstü ile gelen cihazlar için hemde Android 10 altı ile gelen cihazlar için talimat vereceğim. Ayrıca TWRP ile yükleme. Ama fastboot (10 üstü fastbootd) kullanmanızı öneririm.
NOT: Bu işlemleri yapmadan önce bootloader kilidini açmayı unutmayın
NOT 2: Eğer cihazda AVB / Dm-verity aktif ise önce devre dışı bırakın.

Android 10 altı ile gelen cihazlar;
**NOT**: Bugjaeger kullanacak olanlar fastboot komutlarını ⚡ kısmından yapmalı :D

İlk olarak **Cihazı fastboot moda alın.**

 * ```adb reboot bootloader```

  Sistemi silin
 * ```fastboot erase system```

  GSI flaşlayın
 * ```fastboot flash system <dosya_yolu>```

  Cihazı sıfırlayın. Data ve metadata
 * ```fastboot -w```
Veya
 * ```fastboot erase userdata```
 * ```fastboot erase metadata```

  Cihazı yeniden başlatın.
 * ```fastboot reboot```

**Android 10 üstü ile gelen dinamik bölümlü cihazlar;**
NOT: Bugjaeger kullanacak olanlar fastboot komutlarını ⚡ kısmından yapmalı :D

  Cihazı fastboot moda alın
 * ```adb reboot bootloader```

  Cihazı fastbootd moda alın
 * ```fastboot reboot fastboot```

Eğer cihazınıza kuracağınız GSI boyutu sistem bölüm boyutundan fazla ise şu komutları çalıştırın;

  Product bölümünü temizleyin
 * ```fastboot erase product```

**Başarılı olur ise yüklemeye geçin.**

  Sistemi silin
 * ```fastboot erase system```

  GSI flaşlayın
 * ```fastboot flash system <dosya_yolu>```

  Cihazı sıfırlayın. Data ve metadata
* ```fastboot -w```
Veya
* ```fastboot erase userdata```
* ```fastboot erase metadata```

  Cihazı yeniden başlatın.
* ```fastboot reboot```

TWRP ile nasıl yükleyebilirim [**önermem**];
İndirdiğiniz xz dosyasını ayıklayın. Adını system.img olarak değiştirin (zorunlu değil). Cihazı recovery moda alın. Wipe> Advanced Wipe kısmına gelin. Sistem i seçin ve temizleyin. İşlem bitince, yükle kısmına gelin. İmaj yüklemeye tıklayın. GSI imajinı seçin. Size hangi bölüme yazma olacağını seçmenizi ister, Sistem i seçin. İşlem bitince yeniden Advanced Wipe kısmına gelin. Dalvik/ART Önbelleği, Veri, Önbellek ve isteğe bağlı dahili depolamayı seçin ve temizleyin. Eğer isterseniz (vanilla GSI lar için) GApps kurulumunu yapın. Cihazı yeniden başlatın.

Eğer sorunlar olur ise bazıları için çözümler tabii ki de var. Ama bazılarında maalesef.

Sorumluluk kabul etmem. Her şeyden yapan kişi sorumludur.


Mutlu günler.
