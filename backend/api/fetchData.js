async function fetchData() {
    try {

        const fetch = (await import('node-fetch')).default;
        
        const response = await fetch('https://tycoon-2epova.users.cfx.re/status/widget/players.json');
        const data = await response.json();

        const dxp = data.server.dxp.slice(0, 3); // Wyciągamy pierwsze trzy elementy

        // Zwróć obiekt z wieloma wartościami
        return {
            uptime: data.server.uptime,
            dxp: dxp,
            beta: data.server.beta,
            // Dodaj inne wartości, które chcesz zwrócić
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rzuć ponownie błąd, aby był dostępny w wywołaniu
    }
}

module.exports = fetchData;