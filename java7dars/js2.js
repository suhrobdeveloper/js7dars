let cars=["damas", "matiz", "spark","cobalt","gentra"]
let m=prompt("qanday mashina kiritasiz ");
if (cars.includes(m.toLocaleLowerCase())){
   console.log("sizda bu mashin bor")
}
else{
    cars.push(m);
    console.log("mashina qoshildi")

}
console.log(cars)