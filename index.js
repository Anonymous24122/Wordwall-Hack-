Element.prototype.onClick = function (f) {this.onclick = () => {return f(this)}};
let arr = document.querySelectorAll(".format-button");
let templateId = window.pageData['templateId'];
arr.forEach(e => e.onClick((ef) => console.log(`Zmieniono szablon: ${templateId=Number(ef.getAttribute("data-template-id"))}`)));
document.querySelector(".show-more")
    .addEventListener("click",
                      () =>
                          {
                            arr = document.querySelectorAll(".format-button");
                            arr.forEach(e => e.onClick((ef) => console.log(`Zmieniono szablon: ${templateId=Number(ef.getAttribute("data-template-id"))}`)));
                          });

const xhr = new XMLHttpRequest();

function addEntry(wynik, nick, czas)
{
    try
    {
        const idAktywnosci = window.pageData['activityId']; 
    
        console.log(`%cCzas: ${czas}, IdAktywności: ${idAktywnosci}, Nick: ${nick}, Wynik: ${wynik}, IDSzablonu: ${templateId}`, "color: green; font-weight: 900; background-color: rgba(0, 189, 0, 0.3); padding: 2.5px; border-radius: 5px;");
        
        xhr.open("POST", "https://wordwall.net/leaderboardajax/addentry/");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send(`&score=${wynik}&time=${czas}&name=${nick}&mode=1&activityId=${idAktywnosci}&templateId=${templateId}`);
    } catch (error) {console.log(`%cBłąd: ${error}`, "color: red; font-weight: 900; background-color: rgba(209, 0, 0, 0.5); padding: 2.5px; border-radius: 5px;")};
}
