# Wordwall-Hack-
"Hack" na Leaderboard w Wordwall'u
# POBIERAJĄC I KORZYSTAJĄC Z TEGO KODU AKCEPTUJESZ WARUNKI [LICENCJI MIT](LICENSE)

> [!IMPORTANT]
> Ten kod może w przyszłości przestać działać (np. z powodu zmiany architektury platformy Wordwall).  
> Działa tylko wtedy jeśli autor zadania ***włączył Leaderboard***!  
> **Nie możesz zmieniać szablonu zadania przed pozwoleniem na zmianę w instrukcjach**!  
> **Może być konieczne wpisanie `allow pasting` w DevTools**.

---
Uruchamianie
1. Upewnij się że przed wklejeniem tego kodu nie zmieniałeś szablonu w Wordwall;
2. Otwórz DevTools (`Ctrl + Shift + J`) i wklej ten niechlujny fragment kodu z pliku [index.js](index.js);
3. Naciśnij `Enter` i **dopiero teraz możesz zmienić szablon (Template), *jeśli chcesz***;
4. Wywołaj funkcję `addEntry(wynik, nick, czas)`, gdzie `wynik` to po prostu liczba punktów, `nick` to po prostu nickname, a `czas` to po prostu czas (np. 1234, będzie odpowiadać w zaokrągleniu do 1.2 s na tablicy rankingowej);
5. Musisz odświeżyć stronę i wejść w dany szablon (template), **jeśli go zmieniałeś**.
---
Przykład:
> ``` JS
> addEntry(999, "Cześć", 1234);
> ```
> | Widok przed zmianą | Widok po zmianie |
> | ------------------ | ---------------- |
> | <img width="532" height="863" alt="image" src="https://github.com/user-attachments/assets/82efb704-870f-4d05-acdf-3adb604dd1ff" />     | <img width="533" height="867" alt="image" src="https://github.com/user-attachments/assets/8141dfaf-5964-484a-8106-5d2df0c5d847" />     |
