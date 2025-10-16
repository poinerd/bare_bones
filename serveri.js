import http from 'http';

const PORT = process.env.PORT ;

let users = [
  { id: 1, name: 'Emmanuel' },
  { id: 2, name: 'Justus' },
  { id: 3, name: 'Rahman' }
];

let server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  } 


  
  
  else{
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({message: 'Route Not found'}))
    res.statusCode = 404
    res.end();

  }
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

