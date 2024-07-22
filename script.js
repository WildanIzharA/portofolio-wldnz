

const projectWildan = [
    {
        namaApplication : 'Destinize (Implentasi Design)',
        bodyCopy : 'Application yang memungkinkan Pengguna dapat mencari dan mengetahui tempat wisata di daerahnya, application ini di lengkapi oleh banyak fitur yang memudahkan pengguna',
        imagePath : './img/project/destinize.jpeg',
        demoUrl : 'https://wldnz.github.io/implentasiDesign-2'
    },
    {
        namaApplication : 'Omah (Implentasi Design)',
        bodyCopy : 'Application yang memungkinkan Pengguna dapat mencari dan mengetahui rumah yang sedang di jual atau di sewa di berbagai daerahn, application ini di lengkapi oleh banyak fitur yang memudahkan pengguna',
        imagePath : './img/project/omah.png',
        demoUrl : 'https://wldnz.github.io/implentasiDesign-1'
    },
    {
        namaApplication : 'XXII OFFICIAL',
        bodyCopy : 'Application yang memungkinkan Pengguna dapat mencari Movie Film kesukaannya..',
        imagePath : './img/project/latihan-api.png',
        demoUrl : 'https://wldnz.github.io/latihan-api'
    },
    {
        namaApplication : 'WebCart',
        bodyCopy : 'Application yang bertujuan untuk mempromosikan serta memperjual belikan barang secara online (referensi dari tokopedia, shoppe)',
        imagePath : './img/project/webcart.png',
        demoUrl : 'https://wldnz.github.io/website-cart-mobile/dashboard.html'
    },
    {
        namaApplication : 'Latihan Embed',
        bodyCopy : 'Latihan Embed -- Latihan Design Untuk embed Chat',
        imagePath : './img/project/latihan-embed.png',
        demoUrl : 'https://wldnz.github.io/latihan-embed'
    },
    {
        namaApplication : 'Dephone',
        bodyCopy : 'Application yang bertujuan untuk mempromosikan serta memperjual belikan barang eletronik secara online',
        imagePath : './img/project/dephone.png',
        demoUrl : 'https://wldnz.github.io/website-cart-mobile/percobaan-design-responsive-grid/dashboard.html'
    },
    {
        namaApplication : 'Todo List',
        bodyCopy : 'Application yang bertujuan membuat list-list (menggunakan dexie.js)',
        imagePath : './img/project/todoku.png',
        demoUrl : 'https://todoku.vercel.app'
    },
    {
        namaApplication : 'TicTacToe',
        bodyCopy : 'Sebuah Game TicTacToe bisa multiplayer / versus bot',
        imagePath : './img/project/tictactoe.png',
        demoUrl : 'https://tictactoe-eight-lemon.vercel.app'
    },
    {
        namaApplication : 'Calculator Besar',
        bodyCopy : 'sebuah calculator pada umumnya',
        imagePath : './img/project/kalkulatorbesar.png',
        demoUrl : 'https://kalkulatorbesar.vercel.app'
    },
];

const latestProject = document.querySelector('.latest-project');
const mainGalleryProject = document.querySelector('main[class="gallery-project-inside"]');

const latestProject1_3 = projectWildan.filter((value,index) => index < 3);



latestProject.innerHTML += 
`
    <div class="wrapper-card">
        ${latestProject1_3.map((value) => {
        return`
        <div class="card">
           <img src=${value.imagePath}>
           <h2>${value.namaApplication}</h2>
           <p>${value.bodyCopy}</p>
           <button><a href=${value.demoUrl}>Demo Live</a></button>
        </div>
        `;
    }).join('')}
    </div>
`

mainGalleryProject.innerHTML = 
`
    <!-- kumpulan project 3 ke bawah -->
        <div class="wrapper-card">
        ${projectWildan.map((value) => {
            return `
            <a href="${value.demoUrl}" class="card"><img src="${value.imagePath}"></a>
            `
        }).join('')
        }
        </div>
    <!--  -->

    

    <div class="latest">
        ${projectWildan.filter((value,index) => index === 0)
            .map((obj) => {
                return `
                    <a href="${obj.demoUrl}"><img src="${obj.imagePath}"></a>
                `
            }).join('')}
     </div>
        
    <div class="second">
        ${projectWildan.filter((value,index) => index === 1)
                .map((obj) => {
                    return `
                        <a href="${obj.demoUrl}"><img src="${obj.imagePath}"></a>
                    `
                }).join('')
            }
    </div>

`