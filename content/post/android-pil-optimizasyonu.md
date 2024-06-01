---
title: "ADB ile sistem pil optimize etme
"
date: 2024-05-01
tags: ["android", "pil-optimize"]
#author: "Yazar"
draft: false
---
Merhaba.
Biliyorsunuz Andoid 7 itibariyle sistem açılışında telefon uygulamalarının optimasyonunu kaldırdı.
Aslında Android 7 ve sonrası eğer bu şartları karşılaşmamış olmanız halinde kendisi yapıyor.
Şartlar:
* Telefonunuzun şarja takılı olması gerekiyor.
* 100% şarj durumunda olması gerekiyor.
* Telefon açık durumda olmalı. Yani kapalı olmamalı.
* Telefon kullanılmamalı.
* Telefonda aktif olarak bir işlem yapılmamalı (örnek muzik çalmamalı, video izlenmemeli) ( en az 30 dakika )
Aslında uygulama optimizasyonu pil için gerekli bir şey olduğu için ve yukarıdaki şartları karşılamayanlar için bugün ADB ile nasıl uygulama optimizasyonu yapacağınızı göstereceğim.
Gerçekten pil kullanımına etkisi çok verimli oluyor.
Öncelikle ayarlar menüsüne giriyoruz.
* MIUI sürüm numarasına tıklıyoruz 5-6 defa (diğer cihaz markaları için Hakkında->çekirdek sürümüne) sonra geliştirici seçeneklerinde USB hata ayıklama açıyoruz.
* [Buraya tıklayarak Minimal ADB And Fastboot]([https://www.youtube.com/@herkesicinlinux](https://xiaomitools.com/download/minimal-adb-ve-fastboot-v1-4-3/?wpdmdl=1402&refresh=665b0ef0a43461717243632&ind=0&filename=minimal_adb_fastboot_v1.4.3.zip&lazykey=665b0ef492d59)! programını bilgisayara indiriyoruz.
*Sonra telefonumuzu data kablosu ile bilgisayara bağlıyoruz.
Sonrasında ise komutları ADB satırlarına giriyoruz.

İlk olarak ```adb devices``` komutunu giriyoruz.
Eğer Bilgisayarımız telefonumuzu görüyorsa telefonumuzdan bir izin isteyecektir.
Eğer bilgisayarımız görmüyorsa bunun sebebi yüksek ihtimalle sürücü eksikliği dolayısıyladır.
Driver indirmek için [Buraya tıklayarak Android için sunulan resmi sürücüyü .zip dosyası olarak indiriyoruz.](https://dl.google.com/android/repository/usb_driver_r13-windows.zip?hl=tr) daha sonra ise arşiv dosyamızı ayıklayıp .inf dosyamıza sağ tıklayarak 'Yükle' seçeneğine tıklayarak sürücümüzün indirmesini bekliyoruz.İşlemler gerçekleştikten sonra bilgisayarımızı yeniden başlatıyoruz.
Daha sonra tekrar ```adb devices``` komutunu giriyoruz ve onay veriyoruz.
İzini verdikten sonra komut satırında bir kod çıkacaktır.
Cihazı gördüğünü teyit ettikten sonra ise bu komutu yazarak işlemin bitmesini bekliyoruz.
```adb shell "cmd package bg-dexopt-job"```
Komutlarını komut satırına girin.

Eğer Android 10 ve üzeri kullanıyorsanız işlem bitdiğinde success yazısı çıkacaktır. Android 7-9 sürümlerindeyse işlem bitince komut penceresinde yeni satıra gecilecektir. Oradan işlemin bitdiğini anlayabilirsiniz. Bu işlemi yeni ROM kurdukdan sonra veya romunuzu güncelledikden sonra (örnek haftalık ROM'lar kullanıyorsanız her hafta yeni güncellemeden sonra bu işlemi yapın) yapmanız önerilir. TWRP üzerinden Wipe/Cache ve Wipe/Dalvik yaptıkdan sonra da bu işlemi yapmanız önerilir. Uygulamalarınız güncellemeden sonra yavaş açılıyorsa, bu işlemi yapmanız cihaza iyi gelecektir.
Mutlu günler :)
