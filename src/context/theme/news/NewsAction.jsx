export const fetchNews = async (topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-07-15&sortBy=publishedAt&apiKey=0057d2481f7b4ec9ac308036197cf8cf`);
    const data = await response.json();
    return data.articles;
}
