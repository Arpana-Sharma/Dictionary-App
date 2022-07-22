const searchBtn = document.getElementById("search");
const wordTag = document.getElementById("word");
const box = document.querySelector(".box");
const result = document.querySelector("#results");
searchBtn.addEventListener("click",function(){
    let word = wordTag.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        result.style.display = "block";
        console.log(json);
        console.log(json[0].meanings[0].definitions[0].definition);
        let meaning = ``;
        let mn = 1;
        let sentence = ``;
        let sn = 1;
        let antonym = ``;
        let an = 1;
        console.log(json);

        let synonym = ``;
        for(const m of json[0].meanings){
            meaning += `${mn}. ${m.definitions[0].definition} \n`;
            mn++;
        }
        for(const s of json[0].meanings){
            synonym += `${sn}. ${s.synonyms[0]} \n`;
            sn++;
        }
        for(const s of json[0].meanings){
            antonym += `${an}. ${s.antonyms[0]} \n`;
            an++;
        }
        for(const s of json[0].meanings){
            sentence += `${sn}. ${s.antonyms[0]} \n`;
            sn++;
        }
        document.getElementById("meaning").innerHTML = `Meaning: ${meaning}`;
        document.getElementById("anytonym").innerHTML = `Anytonym ${antonym}:`;
        document.getElementById("synonym").innerHTML = `Synonym ${synonym}:`;
        document.querySelector("#playa").href = json[0].phonetics[0].audio;
    });
});
// https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3"