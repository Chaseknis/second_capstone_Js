const createApp = async () => {
  const key = localStorage.getItem('apikey');
  if (key === null || key === undefined || key === '') {
    const rawResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const data = await rawResponse.text();
    localStorage.setItem('apikey', data);
  }
};

module.exports = { createApp };