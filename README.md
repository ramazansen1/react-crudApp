<h1>CRUD App</h1>
<p>Create Read Update Delete</p>
<p>Oluştur Oku Düzenle Sil</p>

<ul>
    <li>
        Projeye bootstrapi dahil et
        > index.htmle bootstrap cdni ekle
    </li>
    <li>
        1:
        > Yeni eklenicek elamanı almak için form oluştur:
        > form içserisinden gelen verileri al ve state aktar
        > ekle butonuna basıldığı anda forma girilen bilgilerle beraber yeni obje oluştur
        > oluşturulan objenin değerleri: tarih, kitapIsmi, id, okunduMu
        oluşan objeyi kitaplar isminde bir diziye aktar
        > obje oluşturulduktan inputu sıfırla
    </li>
    <li>
        2- books Stateinde tutulan kitapları al ve map methodu ile listele(ekrana bas)
        > eğer state boşsa ekrana "henüz kitap eklenmedi" yaz
        > BookCard bileşenine kitap bilgilerini prop olrak gönder
        > BookCard bileşenin kitapla iligli bütün özellikleri göster
    </li>
    <li>
        3- Kitap Silme: 
        > herhangi bir kitabın sil butonuna basıldığında 
        > çalışan fonkisyona silinicek olanın idsi gitsin
        > gelen idyi fonkisyona parametre olaraka  al 
        > silinicek id ye eşit olmayan objeleri al ve bir diziye aktar
        > oluşan diziyi state aktar
    </li>

    <li>
        4- Kitabı Okundu Olarak işaretle:
        > okundu butonuna basılınca çalışan fonkisyona kitabı gönder
        > kitabın isRead değerini tersine çevir
        > dizi içerisinde değişecek olan elemanı bul
        > o elemanı çıkar ve yerine yenisini ekle
    </li>

</ul>
