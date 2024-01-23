export const handleApiCallForLanguageTranslation = (text, languages) => {
    const { translate, translated } = languages
    return fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${translate}|${translated}`)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log(error);
        });
};