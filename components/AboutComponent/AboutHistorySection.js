import React from 'react'

export const AboutHistorySection = ({ historySectionRef }) => {
    return (
        <section className='md:pt-16 pt-8 md:ml-9' ref={historySectionRef} id='history-section'>
                    <h4 className='font-montserrat font-bold text-dark text-xl md:text-2xl'>History</h4>
                    <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Bandung memiliki sejuta pesona yang selalu membuat wisatawan terpana. Bagaimana tidak? Mulai dari tempat wisata berbasis alam, destinasi rekreasi kekinian, hingga kuliner dan tren fesyen bisa Sobat Pesona temui semua di Ibu Kota Jawa Barat ini. Saking idealnya, Bandung seringkali menjadi destinasi tujuan rekreasi singkat di hari libur maupun akhir pekan. Baik bersama teman, keluarga, atau sendirian, selalu ada tempat seru dan menyenangkan yang bisa ditelusuri di Kota Bandung.</p>
                    <img src='/img-about-history.png' className='pt-5 w-full rounded-2lg' />
                    <p className='font-karla text-neutral text-xs md:text-base text-center pt-2.5 pb-5'>Ini adalah caption gambar</p>
                    <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Suasana sejuk dan pemandangan hijau di berbagai sudut dataran tinggi di Bandung sangat cocok jadi tempat rileksasi pikiran. Sobat Pesona bisa mencoba berkunjung ke kebun teh asri di kawasan Ciwidey dan menikmati udara segar dengan bebas. Kalau mau destinasi yang lebih hits, menelusuri setiap sisi hutan pinus di Cikole yang cantik nan instagenic adalah jawabannya, Sobat Pesona! Selain itu, ada pula glamping seru dengan pilihan panorama alam yang menakjubkan, seperti di Lakeside Rancabali, The Lodge Maribaya, dan Trizara Resort. </p>
                    <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Yang tak boleh ketinggalan, apalagi kalau bukan wisata alam ke Gunung Tangkuban Perahu. Ya! Sobat Pesona harus menyaksikan keindahan kawah yang erat kaitannya dengan cerita rakyat Jawa Barat berjudul Sangkuriang itu. Menurut alkisah, bentuk Gunung Tangkuban perahu yang terlihat seperti gunung terbalik ini berasal dari perahu buatan Sangkuriang yang menjadi syarat untuk bisa menikahi gadis tercantik yang ternyata adalah sang ibunda, Dayang Sumbi. Namun syarat itu gagal terpenuhi hingga Sangkuriang menendang perahu tersebut hingga terbalik dan menurut cerita itu lah awal terciptanya Gunung Tangkuban Perahu.</p>
                    <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl'>Language</h4>
                    <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Kalau Sobat Pesona yang ingin mencari spot foto yang manis dan penuh warna pastel yang kekinian, kunjungi saja Rabbit Town! Selain itu ada pula Bandung Amazing Art World yang menyediakan latar foto instagrammable dengan efek 3D hingga wahana Dunia Terbalik nan unik. </p>
                    <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl'>Tradition</h4>
                    <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Kalau Sobat Pesona yang ingin mencari spot foto yang manis dan penuh warna pastel yang kekinian, kunjungi saja Rabbit Town! Selain itu ada pula Bandung Amazing Art World yang menyediakan latar foto instagrammable dengan efek 3D hingga wahana Dunia Terbalik nan unik. </p>
                    <img src='/img-about-tradition.png' className='pt-5 w-full rounded-2lg' />
                    <p className='font-karla text-neutral text-xs md:text-base text-center pt-2.5 pb-5'>Ini adalah caption gambar</p>
        </section>
    )
}
