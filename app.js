const prev = document.querySelector(".prev-btn");
const article = document.querySelector(".review");

let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");

staff = [
    {
        author: "Peter Jones",
        job: "INTERN",
        info: `Sriracha literally flexitarian irony, 
        vape marfa unicorn. Glossier tattooed 8-bit, fixie 
        waistcoat offal activated charcoal slow-carb marfa hell
         of pabst raclette post-ironic jianbing swag.`
    },

    {
        author: "Bill Anderson",
        job: "THE BOSS",
        info: `Edison bulb put a bird on it humblebrag, marfa pok 
        pok heirloom fashion axe cray stumptown venmo actually seitan. 
        VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote 
        bag street art shabby chic.`
    },

    {
        author: "Susan Smith",
        job: "WEB DEVELOPER",
        info: `I'm baby meggings twee health goth +1. Bicycle rights tumeric 
        chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled 
        coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`
    },

    {
        author: "Anna Johnson",
        job: "WEB DESIGNER",
        info: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. 
        Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel 
        pin fashion axe.photo booth jean shorts artisan narwhal.`
    },

    {
        author: "Peter Jones",
        job: "INTERN",
        info: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier 
        tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell 
        of pabst raclette post-ironic jianbing swag.`
    },
];

let i = 0;
article.addEventListener("click", function reviews(event) {
    let target = event.target;

    if (target.matches(".fa-chevron-left")) {
        i--;
        if (i < 0) {
            i = staff.length - 1;
        }
        staffDetails(i);
        
    } else if (target.matches(".fa-chevron-right")) {
        i++;
        if (i > staff.length - 1) {
            i = 0;
        } 
        staffDetails(i);
        
    } else if (target.matches(".random-btn")) {
        let i = Math.floor(Math.random() * staff.length);
        staffDetails(i);
    }
});

function staffDetails(i) {
    let currentStaff = staff[i];
    author.textContent = currentStaff.author;
    info.textContent = currentStaff.info;
    job.textContent = currentStaff.job;
}