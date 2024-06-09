---
title: "TWRP derleme rehberi "
description: Android cihazlar için detaylı TWRP derleme rehberimi okumaktasınız iyi okumalar
---
*   Herkese merhaba, sevgili okurlarım, bugün sizlere güncel şekilde nasıl TWRP derleneceğini anlatacağım. Umarım rehberi beğenirsiniz.  
      
    **Yapacağınız işlemlerin sorumluluğu size aittir.**  
      
    **Gereksinimler**:  
    
*   100 GB depolama.
    
*   Linux (ben Manjaro kullandım)
    
*   Ve tabii ki de benim rehberim :)
    

<h3 style="text-align: start">1 - TWRP cihaz ağacı oluşturma​</h3>

TWRP cihaz ağacı oluşturmak aslında oldukça basittir. Piyasadaki çoğu cihazın cihaz ağacı genelde derlenmiş olarak verilir. Ancak bazı cihaz ağaçları çalışmayabilir veya sizin cihaz ağacınız bulunmayabilir. İşte cihaz ağacı oluşturma adımları:  
  
`mkdir <cihazagaci>`  
`cd <cihazagaci>`  
`pip install twrpdtgen`  
  
Bu aşamada stock ROM içinden **recovery.img** almanız gerekmektedir. **recovery.img**'yi bu dizine kopyalayın ve daha sonra:  
  
`python3 -m twrpdtgen recovery.img`  
  
Komutunu girin. Cihaz ağacınız `output/<marka>/<cihaz kod adı>` klasörüne gelecektir.  
  

<h3 style="text-align: start">2 - Gerekli derleme dosyalarının indirilmesi​</h3>

  
Bu adımda sağlam bir internet bağlantınızın olmasını öneririm. Uzun sürebilir.  
  
Önceki adımdan `cd` komudu ile ana dizine gelin ve daha sonra:  
  
`mkdir twrp`  
`cd twrp`  
`repo init -u https://github.com/minimal-manifest-twrp/platform_manifest_twrp_omni.git -b twrp-9.0`  
`repo sync`  
  
Komutlarını girin. Dosyaların indirilmesi dediğim gibi uzun sürebilir.  
  

<h3 style="text-align: start">3 - TWRP'nin derlenmesi ve test​</h3>

  
Şimdi 1. adımda yaptığımız cihaz ağacını, TWRP konumuna gidip `device/<cihaz markası>/<cihaz model numarası>` konumuna kopyalayın.  
  
**Not: Dosyaları siz oluşturmalısınız, eğer hazır bir cihaz ağacı kullanacaksanız** `git clone cihazagaciurl device/<marka>/<model kodu>` girerek indirebilirsiniz.  
Bu işlemleri de tamamladığınıza göre, artık derlemeye geçebiliriz.  
  
Öncelikle `export ALLOW_MISSING_DEPENDENCIES=true` diyoruz.  
Daha sonra `. build/envsetup.sh` diyoruz. Çıkan şey hata gibi gelse de değildir.  
Daha sonra `lunch` komutunu giriyoruz. Ekrana birkaç tane şey gelecektir. Buradan cihaz modelinizin yanında **\-eng** yazanı kopyalıyoruz. **örnek: omni\_a505f-eng** gibi.  
Daha sonra lunch komutunu girip yanında yapıştırın. Örnek: lunch omni\_a505f-eng  
Daha sonra `mka recoveryimage` komudunu giriyoruz ve derlenmesini bekliyoruz. Bittiğinde **recovery. İmg** sisteminizde olmalı.  
  
Artık TWRP derlendi. Cihazınız vbmeta istiyorsa, **vbmeta.img** ile bir ZIP'e sıkıştırarak kurulum gerçekleştirebilirsiniz.  
  
Umarım rehber işinize yaramıştır. Tüm sorularınızı aşağıda sorabilirsiniz. İyi günler dilerim.