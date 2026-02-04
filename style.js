function nextPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById("page" + num).classList.add('active');
}

function showMessage() {
    document.getElementById("finalMessage").innerHTML = `
        hlo tharshu 💜<br><br>

        No my dear selamuarasi...<br>
        nama frndship thodankunaku<br>
        unknown person la irrunthu<br>
        classmate apron busmate<br>
        aporom nalla close friends...<br><br>

        iam very very lucky to have u<br>
        as my friend 🥹<br><br>

        Nabitiya summa tha sonna 😂<br>
        carmal matha ponne nee<br>
        romba nallava...<br><br>

        nalla padi 💫<br>
        nalla thoongu 🌙<br>
        epovu happy ahh irru 💖<br>
        selapuarasi 🤍
    `;
    nextPage(3);
}

/* Heavy sparkles */
for (let i = 0; i < 140; i++) {
    let s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(s);
}

/* Stars from bottom to top */
for (let i = 0; i < 80; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDelay = Math.random() * 6 + "s";
    document.body.appendChild(star);
}
