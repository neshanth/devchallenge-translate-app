export const handleApiCallForLanguageTranslation = () => {
    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${translate}|french`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
};