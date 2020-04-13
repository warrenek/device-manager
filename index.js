const express = require('express')
const si = require('systeminformation');
//const drivelist = require('drivelist');
const app = express()
const port = 3000



// vygeneruje html stranku ze slozky Views/index.pug 
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Device manager'
      });
    
      
});



si.cpu(function(data) {
    console.log('CPU Information:');
    console.log('- manufucturer: ' + data.manufacturer);
    console.log('- brand: ' + data.brand);
    console.log('- speed: ' + data.speed);
    console.log('- cores: ' + data.cores);
    console.log('- physical cores: ' + data.physicalCores);
    console.log('............................................');
})


si.getStaticData(function(data){
    console.log(data);
})

si.system().then(data => console.log(data));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

 
//const drives = await drivelist.list();
//console.log(drives);