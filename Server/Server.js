const express = require('express');
const app= express();
const http= require('http');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const datasql= require('./DataConnection');
let stringBuilding= require('./StringBuilding');
let DurationBuilding= require('./DurationBuilding');
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.status(200);
  res.end("Server Works");
})
app.get("/api/movies", (req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Expose-Headers", "*");
  res.setHeader("Access-Control-Request-Headers", "*");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
  const connection= mysql.createConnection(datasql);
    connection.connect();
    
  if(req.query.genre=== 'all'){
    connection.query('Select * from movies', (err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.json(result);
      }
    });
  }



  else{
    console.log(req.query);
    const genreCondition = req.query.genre;
    const durationCondition = req.query.duration;

    let whereClause = '';

    if (genreCondition && durationCondition) {
      whereClause = `WHERE ${stringBuilding(req.query.genre, 'genre')} AND ${DurationBuilding(req.query.duration, 'duration')}`;
      console.log("enter 1 ")
    }
    else if (genreCondition) {
      whereClause = `WHERE ${stringBuilding(req.query.genre, 'genre')}`;
      console.log("enter 3 ")
    } 
    else if (durationCondition) {
      whereClause = `WHERE ${DurationBuilding(req.query.duration, 'duration')}`;
      console.log("enter 4 ")
    }


const query = `SELECT * FROM movies ${whereClause}`;
console.log(query);
    connection.query(query, (err, result)=>{
//connection.query(`SELECT * FROM movies WHERE ${ req.query.duration!=='' ? stringBuilding(req.query.genre, 'genre'):''} ${req.query.duration!==''?' OR '+ DurationBuilding(req.query.duration, 'duration'):''}`, (err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.json(result);
      }
    });
  }
    res.status(200);
    connection.end()
})

app.listen(5000, ()=>{
    console.log("server works");
})