const keywords = {
    skills: [
        "Architecht",
        "Serverless",
        "Blockchain",
        "Scrum",
        "Cloud",
        "Platform",
        "Artificial Intelligence",
        "Internet of Things",
        "Mobile First",
        "Multiexperience",
        "API Fisrst",
        "Developer",
        "Devops",
        "Front-End",
        "Back-End",
        "FullStack"
    ],
    levels: [
        "Senior",
        "Master",
        "Specialist",
        "Expert",
        "Leader",
        "Evangelist",
        "Advocate",
        "Manager",
        "Hacker"
    ]
}

function generate(words){
    let title = []
    let unusedSkills = keywords.skills.concat([]);
    for(let i = 0; i< words; i++){
        if (i % 2 != 0){
            title.push(randomWord(keywords.levels))
        } else {
            let randomSkill = randomWord(keywords.skills)
            title.push(randomSkill);
            unusedSkills = unusedSkills.splice(unusedSkills.indexOf(randomSkill))
        }
    }
    return title.join(' ');
}

function randomWord(words){
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

function init(){
    let generateBtn = document.getElementById('generate');
    let resultSpan = document.getElementById('result');
    let twitterBtn = document.getElementById('twitter');
    let updateTitle = () => {
        resultSpan.innerHTML = '';
        let title = generate(8);
        resultSpan.appendChild(document.createTextNode(title));
        twitterBtn.setAttribute('href', `https://twitter.com/intent/tweet`);
        twitterBtn.setAttribute('data-text', `I got my tech Linkedin Hedline: 
${title}`)
        twitterBtn.setAttribute('data-hashtags', 'linkedin,tech,buzzwords')
    }
    generateBtn.addEventListener('click', updateTitle)
    updateTitle();
}
