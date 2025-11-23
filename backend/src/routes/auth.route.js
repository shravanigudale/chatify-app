import express from "express";

const router = express.Router();

export default router;

router.get("/signup",(req,res)=>{ //we have prefix it in server.js that is api/auth(same for all)
    res.send("Signup endpoint");
});

router.get("/login",(req,res)=>{
    res.send("Login endpoint");
});

router.get("/logout",(req,res)=>{
    res.send("Logout endpoint");
}); 