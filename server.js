// import http from 'http';
// import { posts } from './postController.js';
// import fs from "fs/promises"
// import url from 'url'
// import path from 'path'

// const __filename = url.fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// console.log("file path is", __filename, __dirname)



// // fs.writeFile('note.txt', 'hello World', (err)=>{
// //     if(err) throw new Error('Error reading file')
// // })

// // fs.readFile('note.txt', 'utf-8', (err, data)=>{
// //     if(err){
// //         throw new Error('There was an error reading file')
    
// //     } 
    
// //     console.log("File content", data )
    

// // })
// // fs.appendFile('note.txt', 'Welcome to my world', (err)=>{
// //     if(err) throw new Error('There was an error appending to file')
// // })

// // fs.unlink('note.txt', (err)=>{
// //     if(err) throw new Error('There was an error deleting file')
// // })


// const PORT = process.env.PORT;

// function getFullPage(po) {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head><title>Posts</title></head>
//     <body>
//       ${po.map(post => `
//         <div>
//           <h1>${post.title}</h1>
//           <p>${post.id}</p>
//         </div>
//       `).join('')}
//     </body>
//     </html>
//   `;
// }

// const server = http.createServer(async (req, res) => {
//     // setHeader()
//     // write()
//     // 

//   let filepath;
//   filepath= path.join(__dirname, 'public', 'about.html')
//   const data = await fs.readFile(filepath)
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write(data)
//   res.end()


  
// //   console.log(req.url)
// //   console.log(req.method)
// // if(req.url === '/about'){
// //     res.end('<h1> This is the about page</h1>')
    
// // }else{
// //   res.end(getFullPage(posts));
// // }

// // });


// }
// )

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}...`);
// });
