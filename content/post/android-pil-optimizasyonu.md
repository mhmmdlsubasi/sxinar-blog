Merhaba sevgili okurlarım.
Biliyorsunuz Andoid 7 öncesinde telefonlarda uygulamalar optimize ediliyor diye bir ifade çıkardı.
Android 7 sonrası bu optimizasyonu Android kaldırdı.(sanırım Samsung devam ettiriyor)
Aslında Android 7 ve sonrası eğer bu şartları karşılaşmamış olmanız halinde kendisi yapıyor.
Şartlar:
1. telefonunuzun şarja takılı olması gerekiyor.
2. 100% şarj durumunda olması gerekiyor.
3. telefon açık durumda olmalı. Yani kapalı olmamalı.
4. telefon kullanılmamalı.
5. telefonda aktiv bir işlem yapılmamalı (örnek muzik çalmamalı, video izlenmemeli) ( en az 30 dakika )
Aslında uygulama optimizasyonu pil için gerekli bir şey olduğu için ve yukarıdaki şartları karşılamayanlar için bugün ADB ile nasıl uygulama optimizasyonu yapacağınızı göstereceğim.
Öncelikle ayarlar menüsüne giriyoruz.
MIUI sürüm numarasına tıklıyoruz 5-6 defa (diğerleri için çekirdek sürümüne) sonra geliştirici seçeneklerinde USB hata ayıklama açıyoruz.

Minimal adb and fastboot programını bilgisayara indiriyoruz.
Sonra telefinu bilgisayara bağlıyoruz.
Su komutları ADB satırlarına giriyoruz.

adb devices
adb shell "cmd package bg-dexopt-job" 
Komutunu girin.

Eğer Android 10 ve üzeri kullanıyorsanız işlem bitdiğinde success yazısı çıkacaktır. Android 7-9 sürümlerindeyse işlem bitince komut penceresinde yeni satıra gecilecektir. Oradan işlemin bitdiğini anlayabilirsiniz. Bu işlemi yeni ROM kurdukdan sonra veya romunuzu güncelledikden sonra (örnek haftalık ROM'lar kullanıyorsanız her hafta yeni güncellemeden sonra bu işlemi yapın) yapmanız önerilir. TWRP üzerinden Wipe/Cache ve Wipe/Dalvik yaptıkdan sonra da bu işlemi yapmanız önerilir. Uygulamalarınız güncellemeden sonra yavaş açılıyorsa, bu işlemi yapmanız cihaza iyi gelecektir.
Mutlu günler :)
