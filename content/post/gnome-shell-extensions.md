---
title: "Gnome Kabuk Eklentisini İşletim sistemimize ekleyelim!"
date: 2024-06-01
tags: ["linux","gnome","shell","extensions","ipuçları"]
author: "Yazar"
draft: false
---

Merhabalar.
Bugün Fedora kullanırken çok işime yarayan,linux kullanımımı çok işlevsel bir hale getiren **"Gnome Eklentileri"** uygulamasını nasıl Linux dağıtımımıza ekleyeceğimizi göstereceğim.


* Öncelikle kullanmakta olduğumuz tarayıcımıza "Gnome Kabuk Bağlantısı" uzantısını eklememiz gerekiyor.


    - Chrome tabanlı tarayıcılar için uzantıyı Chrome Web Mağazası'nı kullanarak yükleyin .


    - Firefox için uzantıyı Mozilla Eklentiler sitesinden manuel olarak yüklemelisiniz.Lütfen Firefox'un bağlayıcı sürüm 8'den beri desteklendiğini unutmayın.


* Tarayıcımıza uzantımızı eklediğimize göre artık dağıtımımıza bağdaştırıcı modeli terminal aracılığıyla yükleyeceğiz.

     - Arch Linux için
 
       ```pacman -Sy gnome-tarayıcı-bağlayıcısı``` komutunu giriyoruz terminale.

    - Debian tabanlı dağıtımlar için
 
      ```sudo apt-get install chrome-gnome-shell``` komutunu giriyoruz terminal satırına.

    - Fedora tabanlı dağıtımlar için
 
      ```dnf install gnome-browser-connector``` komutunu terminal satırına yapıştırıyoruz.
 
    - Gentoo tabanlı dağıtımlar için

      ```emerge -av gnome-extra/gnome-browser-connector``` komutunu terminal satırına yapıştırıyoruz.

    - Ubuntu tabanlı dağıtımlar için
 
      ```sudo apt-get install gnome-browser-connector``` komutunu terminal satırına yapıştırıyoruz.

      Daha sonra ise [Gnome eklenti Web sitesine buraya tıklayarak gidelim](https://extensions.gnome.org/) daha sonra onay için bir pop-up çıkacak iznimizi vererdiğimize göre yazımızı sonlandırıyorum.

      Mutlu günler diliyorum.
