const createApp = async () => {
  const key = localStorage.getItem('apiKey');
  if (key === null || key === undefined || key === '') {
    const rawResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await rawResponse.text();
    localStorage.setItem('apiKey', data);
  }
};

module.exports = { createApp };