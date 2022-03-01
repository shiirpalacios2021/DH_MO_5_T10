let express=require('express');
let app=express();
let path=require('path');
 app.use(express.estatic("public"));
 
app.listen(3030,(req,res)=>{
    console.log("servidor corriendo")
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))});
    
    
app.get("/babbage",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/babbage.html"))});
    
    app.get("/berners-lee",(req,res)=>{
        res.sendFile(path.join(__dirname,"./views/berners-lee.html"))});

        
        app.get("/clarke",(req,res)=>{
            res.sendFile(path.join(__dirname,"./views/clarke.html"))});

            app.get("/hamilton",(req,res)=>{
                res.sendFile(path.join(__dirname,"./views/hamilton.html"))});

                app.get("/hopper",(req,res)=>{
                    res.sendFile(path.join(__dirname,"./views/hopper.html"))});

                    app.get("/lovelace",(req,res)=>{
                        res.sendFile(path.join(__dirname,"./views/lovelace.html"))});

                        app.get("/turing",(req,res)=>{
                            res.sendFile(path.join(__dirname,"./views/turing.html"))});
                            
                            
                        
                        
                    
                    
                
                
            
               

        
        