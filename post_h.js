const myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', '*');
myHeaders.set('Access-Control-Allow-Origin', '*');

(async () => {
    const rawResponse = await fetch('https://crossorigin.me/https://www.cassaforenze.it/?rid=mDPEqCa', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();
