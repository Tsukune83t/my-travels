import React from 'react'
import Travel from "./Travel"

const travels = [
    {
        destination:"Kyoto", 
        country:"Japon", 
        photo:
        "https://mobile-cdn.123rf.com/300wm/platongkoh/platongkoh1502/platongkoh150200092/36745094-uji-kyoto-japon-c%C3%A9l%C3%A8bre-byodo-dans-le-temple-bouddhiste-b%C3%A2timent-phoenix-hall-.jpg?ver=6",
        distance:" Kyoto se trouve à 9 943 km de Toulon"
    },
    {
        destination:"Rome", 
        country:"Italie", 
        photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVKfa6t87qzUGk-2wNdlzHCttdE3TYI5LXBfW7Fu7GeQucKat",
        distance:" Rome se trouve à 846 km de Toulon"
    },
    {
        destination:"New York", 
        country:"Eetats-Unis", 
        photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2cq--QOgR6sY0UmOyJ_Sg6v017aA-6izQdOA9UQQ7cYLhwZ0",
        distance:" New York se trouve à 6 350 km de Toulon"
    },
    {
        destination:"Bangkok", 
        country:"Thaïland", 
        photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimld2-7uBgr6r1ue88x-cdGBvWdRbWCI4M1pfKHcQMhL-Luoj5A",
        distance:" Bangkok se trouve à 9 325 km de Toulon"
    },
    {
        destination:"Shanghai", 
        country:"Chine", 
        photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKI6boQkP7BXMTnMJ6PCrbCQOrhiGeHPweNNTiZ8B3Ra3zv_-y",
        distance:" Shanghai se trouve à 9 458 km de Toulon"
    },
];
const Travels = () => (
    <div>
        {travels.map(country => (

      <Travel {...country} /> ))}
    </div>
)

export default Travels;
