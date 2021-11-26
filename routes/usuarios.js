const {Router} = require("express");


const router = Router ();


//localhost:3001/usuarios/
router.get('/', function (req, res) {
    res.json({msg:'Hola Pato desde GET'});
}); 

router.post('/', function (req, res){
    res.status(201).json({msg:'Hola Pato desde POST'});
});

router.put('/', function (req, res){
    res.status(400).json({msg:'Hola Pato desde PUT'});
});

router.delete('/',function (req, res){
    res.status(500).json({msg:'Hola Pato desde DELETE'});
});

module.exports = router;