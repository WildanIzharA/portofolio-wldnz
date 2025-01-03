

const projectWildan = [
    {
        namaApplication : 'Resturant - Cashier Side',
        bodyCopy : 'Restaurant - Cashier Side Simulator (User : "admin", Password : "admin") - Desktop',
        imagePath : './img/project/restaurant_cashierside_php.png',
        demoUrl : 'http://cashier.infinityfreeapp.com/wildanResto/',
        canDemo : true
    },
    {
        namaApplication : 'Destinize (Implentasi Design)',
        bodyCopy : 'Application yang memungkinkan Pengguna dapat mencari dan mengetahui tempat wisata di daerahnya, application ini di lengkapi oleh banyak fitur yang memudahkan pengguna',
        imagePath : './img/project/destinize.jpeg',
        demoUrl : 'https://wldnz.github.io/implentasiDesign-2',
        canDemo : true
    },
    {
        namaApplication : 'Omah (Implentasi Design)',
        bodyCopy : 'Application yang memungkinkan Pengguna dapat mencari dan mengetahui rumah yang sedang di jual atau di sewa di berbagai daerahn, application ini di lengkapi oleh banyak fitur yang memudahkan pengguna',
        imagePath : './img/project/omah.png',
        demoUrl : 'https://wldnz.github.io/implentasiDesign-1',
        canDemo : true
    },
    {
        namaApplication : 'XXII OFFICIAL',
        bodyCopy : 'Application yang memungkinkan Pengguna dapat mencari Movie Film kesukaannya..',
        imagePath : './img/project/latihan-api.png',
        demoUrl : 'https://wldnz.github.io/latihan-api',
        canDemo : true
    },
    {
        namaApplication : 'WebCart',
        bodyCopy : 'Application yang bertujuan untuk mempromosikan serta memperjual belikan barang secara online (referensi dari tokopedia, shoppe)',
        imagePath : './img/project/webcart.png',
        demoUrl : 'https://wldnz.github.io/website-cart-mobile/dashboard.html',
        canDemo : true
    },
    {
        namaApplication : 'Latihan Embed',
        bodyCopy : 'Latihan Embed -- Latihan Design Untuk embed Chat',
        imagePath : './img/project/latihan-embed.png',
        demoUrl : 'https://wldnz.github.io/latihan-embed',
        canDemo : true
    },
    {
        namaApplication : 'Dephone',
        bodyCopy : 'Application yang bertujuan untuk mempromosikan serta memperjual belikan barang eletronik secara online',
        imagePath : './img/project/dephone.png',
        demoUrl : 'https://wldnz.github.io/website-cart-mobile/percobaan-design-responsive-grid/dashboard.html',
        canDemo : true
    },
    {
        namaApplication : 'Todo List',
        bodyCopy : 'Application yang bertujuan membuat list-list (menggunakan dexie.js)',
        imagePath : './img/project/todoku.png',
        demoUrl : 'https://todoku.vercel.app',
        canDemo : true
    },
    {
        namaApplication : 'TicTacToe',
        bodyCopy : 'Sebuah Game TicTacToe bisa multiplayer / versus bot',
        imagePath : './img/project/tictactoe.png',
        demoUrl : 'https://tictactoe-eight-lemon.vercel.app',
        canDemo : true
    },
    {
        namaApplication : 'Calculator Besar',
        bodyCopy : 'sebuah calculator pada umumnya',
        imagePath : './img/project/kalkulatorbesar.png',
        demoUrl : 'https://kalkulatorbesar.vercel.app',
        canDemo : true
    },
];


const myAchievement = [
    {
        nama : 'RevoU Fundamental Course Software Engineer',
        imagePath : 'https://media.licdn.com/dms/image/v2/D4D2DAQFTMiou16pQ9w/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1734962194629?e=1736334000&v=beta&t=XTiI2a7tNYNT9T8DsHeotJSHu6u3NiCYJqZ2iYS78KQ',
    },
];


const latestProject = document.querySelector('.latest-project');
const achievement_wrapper = document.querySelector('#achievement-wrapper');
const mainGalleryProject = document.querySelector('.gallery-project-inside');

const latestProject1_3 = projectWildan.filter((value,index) => index < 3);


achievement_wrapper.innerHTML += `${myAchievement.map(value => {
    return `<div class="flex flex-col justify-evenly items-center text-center gap-5 min-96">
        <img class="h-52 max-w-80 rounded-xl" src=${value.imagePath}>
        <h2 class="max-w-72">${value.nama}</h2>
    </div>`
}).join('')}`;

latestProject.innerHTML += 
`
    <div class="wrapper-card">
        ${latestProject1_3.map((value) => {
        return`
        <div class="h-96 flex flex-col justify-between items-center text-center gap-5 min-96">
            <img class="h-52 w-80 rounded-xl" src=${value.imagePath}>
            <h2 class="max-w-72">${value.namaApplication}</h2>
            <p class="max-w-72">${value.bodyCopy}</p>
            <a class="w-52" href=${value.demoUrl}><button class="w-full p-2.5 text-xl rounded-lg bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-blue-500/50">Demo Live</button></a>
        </div>
        `;
    }).join('')}
    </div>
`


function listAllProjectExceptLastest(element,data){
    element.children[0].innerHTML +=`
        ${data.map((value) => {
            return `
            <a href="${value.demoUrl}" class="rounded-lg"><img class="max-w-64 rounded-lg h-64 shadow-md shadow-white object-cover" src="${value.imagePath}"></a>
            `
        }).join('')}`;
}

function lastestProject_first(element,data){
    return element.children[1].innerHTML = `${data.filter((value,index) => index === 0)
    .map((obj) => {
        return `
            <a class="w-full" href="${obj.demoUrl}"><img class="w-full rounded-lg" src="${obj.imagePath}"></a>
        `
    }).join('')}
    `;
}
function lastestProject_second(element,data){
    return element.parentElement.children[4].innerHTML += `${data.filter((value,index) => index === 1)
                .map((obj) => {
                    return `
                        <a class="w-11/12" href="${obj.demoUrl}"><img class="w-full rounded-lg" src="${obj.imagePath}"></a>
                    `
                }).join('')}
    `;
}

listAllProjectExceptLastest(mainGalleryProject,projectWildan);
lastestProject_first(mainGalleryProject,projectWildan);
lastestProject_second(mainGalleryProject,projectWildan);

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  
  if (isMobile()) {
    if(achievement_wrapper.children.length == 1){
        achievement_wrapper.style.justifyContent = "center";
    }
} else {
    console.log("Desktop device detected");
    achievement_wrapper.style.justifyContent = "center";
    if(achievement_wrapper.children.length > 3){
        achievement_wrapper.style.justifyContent = "start";
    }
  }